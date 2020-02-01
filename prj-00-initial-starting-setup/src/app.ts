// Code goes here!
class projectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleElement: HTMLInputElement;
    descriptionElement: HTMLInputElement;
    peopleElement: HTMLInputElement;
    // templateList : HTMLTemplateElement;
    // element2 : HTMLUListElement;


    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importNode = document.importNode(this.templateElement.content, true);

        this.element = importNode.firstElementChild as HTMLFormElement;

        this.element.id = 'user-input';

        this.titleElement = this.element.querySelector('#title') ! as HTMLInputElement;
        this.descriptionElement = this.element.querySelector('#description')! as HTMLInputElement;
        this.peopleElement = this.element.querySelector('#people')! as HTMLInputElement;

         console.log(this.titleElement.value);
        // this.templateList = document.getElementById('single-project')! as HTMLTemplateElement;
        // const importNodeProject = document.importNode(this.templateList.content, true);
        // this.element2 = importNodeProject.firstElementChild as HTMLUListElement;

        this.attach();
        this.configure();


    }

    private submitHandler(event: Event) {
        event.preventDefault();
        const value = this.titleElement.value;
        console.log(value)
    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }



    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
        //   this.hostElement.insertAdjacentElement('afterend', this.element2)
    }
}

const prjInput = new projectInput();