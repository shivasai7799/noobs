/// <reference path ='base-components.ts' />
namespace App {
    //Project Input 
    export class projectInput extends Component<HTMLDivElement, HTMLFormElement> {
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
}