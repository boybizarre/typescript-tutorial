import { Component } from "./base_component";
import { Validation, validate } from "../utils/validation";
import { Bind } from "../decorators/bind";
import { projectState } from "../state/project_state";


  // ProjectInput Class
  export class ProjectInput extends Component<HTMLDivElement, HTMLElement> {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
      super('project-input', 'app', true, 'user-input');

      this.titleInputElement = this.element.querySelector(
        '#title'
      ) as HTMLInputElement;
      this.descriptionInputElement = this.element.querySelector(
        '#description'
      ) as HTMLInputElement;
      this.peopleInputElement = this.element.querySelector(
        '#people'
      ) as HTMLInputElement;

      this.configure();
    }

    configure() {
      this.element.addEventListener('submit', this.submitHandler);
    }

    renderContent(): void {}

    private gatherUsersInput(): [string, string, number] | void {
      const enteredTitle = this.titleInputElement.value;
      const enteredDescription = this.descriptionInputElement.value;
      const enteredPeople = this.peopleInputElement.value;

      const titleValidate: Validation = {
        value: enteredTitle,
        required: true,
      };

      const descriptionValidate: Validation = {
        value: enteredDescription,
        required: true,
        minLength: 5,
      };

      const peopleValidate: Validation = {
        value: +enteredPeople,
        required: true,
        min: 1,
        max: 5,
      };

      if (
        !validate(titleValidate) ||
        !validate(descriptionValidate) ||
        !validate(peopleValidate)
      ) {
        alert('Invalid input, please try again.');
        return;
      } else {
        return [enteredTitle, enteredDescription, +enteredPeople];
      }
    }

    private clearInput() {
      this.titleInputElement.value = '';
      this.descriptionInputElement.value = '';
      this.peopleInputElement.value = '';
    }

    @Bind
    private submitHandler(event: Event) {
      event.preventDefault();
      const userInput = this.gatherUsersInput();
      if (Array.isArray(userInput)) {
        const [title, desc, people] = userInput;
        projectState.addProject(title, desc, people);
        this.clearInput();
      }
    }
  }
