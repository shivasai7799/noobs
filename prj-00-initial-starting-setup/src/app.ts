//Drag and Drop Interfaces 

interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
}

interface DragTarget {
    dragOverHandler(event: DragEvent): void;
    dropHandler(event: DragEvent): void;
    dragLeaveHandler(event: DragEvent): void;
}
enum ProjectStatus {
    Active,
    Finished
}
//Project Type
class Project {
    constructor(public id: string, public title: string, public description: string, public numOfPeople: number, public status: ProjectStatus) {

    }
}

//State Management 
type Listener<T> = (items: T[]) => void;

class State<T> {
    protected listeners: Listener<T>[] = [];

    addListener(listerFn: Listener<T>) {
        this.listeners.push(listerFn);
    }
}

class ProjectState extends State<Project> {

    private projects: Project[] = [];

    private static instance: ProjectState;

    private constructor() {
        super();
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }



    addproject(title: string, description: string, numOfPeople: number) {
        const newProject = new Project(
            Math.random().toString(),
            title,
            description,
            numOfPeople,
            ProjectStatus.Active);
        this.projects.push(newProject);
        for (const listerFn of this.listeners) {
            listerFn(this.projects.slice());
        }
    }

    moveProject(projectId : string, newStatus : ProjectStatus) {
     const project = this.projects.find(prj => prj.id === projectId);
     if(project && project.status !== newStatus){
         project.status = newStatus;
         this.updateListeners();
     }
    }

    private updateListeners() {
        for(const listerFn of this.listeners){
            listerFn(this.projects.slice());
        }
    }
}

const projectState = ProjectState.getInstance();

//Validation
interface Validatable {
    required?: boolean;
    value: number | string;
    minlength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

function validate(validatableInput: Validatable) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minlength != null && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length > validatableInput.minlength;
    }
    if (validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length < validatableInput.maxLength;
    }
    if (validatableInput.min != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
}


//autobind decorator
function autobind(_1: any, _2: string, descriptor: PropertyDescriptor) {
    const originalDescriptor = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,


        get() {
            const boundEn = originalDescriptor.bind(this);
            return boundEn;
        }
    };
    return adjDescriptor;
}

abstract class Component<T extends HTMLElement, U extends HTMLElement>{
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;

    constructor(templateId: string, hostElementId: string, insertAtStart: boolean, newElememtId?: string) {
        this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement;
        this.hostElement = document.getElementById(hostElementId)! as T;

        const importNode = document.importNode(this.templateElement.content, true);

        this.element = importNode.firstElementChild as U;
        if (newElememtId) {
            this.element.id = newElememtId;
        }
        this.attach(insertAtStart);
    }

    private attach(insertAtBeginning: boolean) {
        this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);
    }

    abstract configure(): void;
    abstract renderContent(): void;


}

//Project Input 

class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
    private project: Project;

    get persons() {
        if (this.project.numOfPeople === 1) {
            return '1 Person';
        } else {
            return `${this.project.numOfPeople} Persons'`;
        }
    }
    constructor(hostId: string, project: Project) {
        super('single-project', hostId, false, project.id);
        this.project = project;

        this.configure();
        this.renderContent();
    }
    @autobind
    dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData('text/plain', this.project.id);
    event.dataTransfer!.effectAllowed = 'move';
    }

    dragEndHandler(_: DragEvent) {
        console.log('Dragend');
    }

    configure() {
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    }
    renderContent() {
        this.element.querySelector('h2')!.textContent = this.project.title;
        this.element.querySelector('h3')!.textContent = this.persons + ' ' + ' assigned';
        this.element.querySelector('p')!.textContent = this.project.description;
    }


}

//Input render 

class projectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
    assignedProjects: Project[];

    constructor(private type: 'active' | 'finished') {
        super('project-list', 'app', false, `${type}-projects`);
        this.assignedProjects = [];

        this.configure();
        this.renderContent();

    }
    @autobind
    dragOverHandler(event: DragEvent){
        if(event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            event.preventDefault();
            const listEl = this.element.querySelector('ul')!;
            listEl.classList.add('droppable');
        }
        
    }
    @autobind
    dropHandler(event: DragEvent){
       const prjId = event.dataTransfer!.getData('text/plain');
       projectState.moveProject(prjId, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished);
       console.log(prjId);
    }

    @autobind
    dragLeaveHandler(_: DragEvent){
        const listEl = this.element.querySelector('ul')!;
        listEl.classList.remove('droppable');
    }

    configure() {
        this.element.addEventListener('dragover', this.dragOverHandler);
        this.element.addEventListener('dragleave', this.dragLeaveHandler);
        this.element.addEventListener('drop', this.dropHandler);

        projectState.addListener((projects: Project[]) => {
            const relevantProjects = projects.filter(prj => {
                if (this.type === 'active') {
                    return prj.status === ProjectStatus.Active;
                }
                return prj.status === ProjectStatus.Finished;
            });
            this.assignedProjects = relevantProjects;
            this.renderProject();
        });
    }

    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + 'PROJECTS';
    }

    private renderProject() {
        const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
        listEl.innerHTML = '';
        for (const prjItem of this.assignedProjects) {
            new ProjectItem(this.element.querySelector('ul')!.id, prjItem);
        }
    }
}




//Project Input 
class projectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleElement: HTMLInputElement;
    descriptionElement: HTMLInputElement;
    peopleElement: HTMLInputElement;

    // templateList : HTMLTemplateElement;
    // element2 : HTMLUListElement;


    constructor() {
        super('project-input', 'app', true, 'user-input')
        this.titleElement = this.element.querySelector('#title')! as HTMLInputElement;
        this.descriptionElement = this.element.querySelector('#description')! as HTMLInputElement;
        this.peopleElement = this.element.querySelector('#people')! as HTMLInputElement;
        // this.templateList = document.getElementById('single-project')! as HTMLTemplateElement;
        // const importNodeProject = document.importNode(this.templateList.content, true);
        // this.element2 = importNodeProject.firstElementChild as HTMLUListElement;
        this.configure();
    }

    configure() {
        this.element.addEventListener('submit', this.submitHandler);

    }

    renderContent() { }

    private gatherInput(): [string, string, number] | void {
        const namedTitle = this.titleElement.value;
        const namedDescription = this.descriptionElement.value;
        const namedPeople = this.peopleElement.value;

        const titleValidatable: Validatable = {
            value: namedTitle,
            required: true
        }

        const descriptionValidatable: Validatable = {
            value: namedDescription,
            required: true,
            minlength: 5
        }

        const peopleValidatable: Validatable = {
            value: +namedPeople,
            required: true,
            min: 1,
            max: 5
        }

        if (
            !validate(titleValidatable) ||
            !validate(descriptionValidatable) ||
            !validate(peopleValidatable)
        ) {
            alert('Invalid input! please try again');
            return;
        } else {
            return [namedTitle, namedDescription, +namedPeople];
        }
    }


    private clearInputs() {
        this.titleElement.value = '';
        this.descriptionElement.value = '';
        this.peopleElement.value = '';
    }


    @autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            projectState.addproject(title, desc, people);
            this.clearInputs();
        }
    }
}

const prjInput = new projectInput();
const activePrjList = new projectList('active');
const finishedPrjList = new projectList('finished');