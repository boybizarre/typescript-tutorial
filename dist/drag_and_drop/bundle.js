/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/drag_and_drop/components/base_component.ts":
/*!********************************************************!*\
  !*** ./src/drag_and_drop/components/base_component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component)
/* harmony export */ });
class Component {
    constructor(templateId, hostElementId, insertAtStart, newElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    attach(insertAtBeginning) {
        this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);
    }
}


/***/ }),

/***/ "./src/drag_and_drop/components/project_input.ts":
/*!*******************************************************!*\
  !*** ./src/drag_and_drop/components/project_input.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectInput: () => (/* binding */ ProjectInput)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_component */ "./src/drag_and_drop/components/base_component.ts");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/validation */ "./src/drag_and_drop/utils/validation.ts");
/* harmony import */ var _decorators_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/bind */ "./src/drag_and_drop/decorators/bind.ts");
/* harmony import */ var _state_project_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/project_state */ "./src/drag_and_drop/state/project_state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




class ProjectInput extends _base_component__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor() {
        super('project-input', 'app', true, 'user-input');
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionInputElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
        this.configure();
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }
    renderContent() { }
    gatherUsersInput() {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        const titleValidate = {
            value: enteredTitle,
            required: true,
        };
        const descriptionValidate = {
            value: enteredDescription,
            required: true,
            minLength: 5,
        };
        const peopleValidate = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5,
        };
        if (!(0,_utils_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(titleValidate) ||
            !(0,_utils_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(descriptionValidate) ||
            !(0,_utils_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(peopleValidate)) {
            alert('Invalid input, please try again.');
            return;
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }
    clearInput() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUsersInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            _state_project_state__WEBPACK_IMPORTED_MODULE_3__.projectState.addProject(title, desc, people);
            this.clearInput();
        }
    }
}
__decorate([
    _decorators_bind__WEBPACK_IMPORTED_MODULE_2__.Bind
], ProjectInput.prototype, "submitHandler", null);


/***/ }),

/***/ "./src/drag_and_drop/components/project_item.ts":
/*!******************************************************!*\
  !*** ./src/drag_and_drop/components/project_item.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectItem: () => (/* binding */ ProjectItem)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_component */ "./src/drag_and_drop/components/base_component.ts");
/* harmony import */ var _decorators_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators/bind */ "./src/drag_and_drop/decorators/bind.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class ProjectItem extends _base_component__WEBPACK_IMPORTED_MODULE_0__.Component {
    get persons() {
        if (this.project.people === 1) {
            return '1 person assigned';
        }
        else {
            return `${this.project.people} persons assigned`;
        }
    }
    constructor(hostId, project) {
        super('single-project', hostId, false, project.id);
        this.project = project;
        this.configure();
        this.renderContent();
    }
    dragStartHandler(event) {
        event.dataTransfer.setData('text/plain', this.project.id);
        event.dataTransfer.effectAllowed = 'move';
    }
    dragEndHandler(_event) {
        console.log('Drag End');
    }
    configure() {
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    }
    renderContent() {
        this.element.querySelector('h2').textContent = this.project.title;
        this.element.querySelector('h3').textContent = this.persons;
        this.element.querySelector('p').textContent = this.project.description;
    }
}
__decorate([
    _decorators_bind__WEBPACK_IMPORTED_MODULE_1__.Bind
], ProjectItem.prototype, "dragStartHandler", null);


/***/ }),

/***/ "./src/drag_and_drop/components/project_list.ts":
/*!******************************************************!*\
  !*** ./src/drag_and_drop/components/project_list.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectList: () => (/* binding */ ProjectList)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_component */ "./src/drag_and_drop/components/base_component.ts");
/* harmony import */ var _models_project_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/project_model */ "./src/drag_and_drop/models/project_model.ts");
/* harmony import */ var _decorators_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/bind */ "./src/drag_and_drop/decorators/bind.ts");
/* harmony import */ var _state_project_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/project_state */ "./src/drag_and_drop/state/project_state.ts");
/* harmony import */ var _project_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project_item */ "./src/drag_and_drop/components/project_item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class ProjectList extends _base_component__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor(type) {
        super('project-list', 'app', false, `${type}-projects`);
        this.type = type;
        this.assignedProjects = [];
        this.configure();
        this.renderContent();
    }
    dragoverHandler(event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            event.preventDefault();
            const listEl = this.element.querySelector('ul');
            listEl.classList.add('droppable');
        }
    }
    dropHandler(event) {
        const projectId = event.dataTransfer.getData('text/plain');
        _state_project_state__WEBPACK_IMPORTED_MODULE_3__.projectState.moveProject(projectId, this.type === 'active' ? _models_project_model__WEBPACK_IMPORTED_MODULE_1__.ProjectStatus.active : _models_project_model__WEBPACK_IMPORTED_MODULE_1__.ProjectStatus.finished);
    }
    dragLeaveHandler(_event) {
        const listEl = this.element.querySelector('ul');
        listEl.classList.remove('droppable');
    }
    configure() {
        this.element.addEventListener('dragover', this.dragoverHandler);
        this.element.addEventListener('drop', this.dropHandler);
        this.element.addEventListener('dragleave', this.dragLeaveHandler);
        _state_project_state__WEBPACK_IMPORTED_MODULE_3__.projectState.addListener((projects) => {
            const relevantProjects = projects.filter((prj) => {
                if (this.type === 'active') {
                    return prj.status === _models_project_model__WEBPACK_IMPORTED_MODULE_1__.ProjectStatus.active;
                }
                return prj.status === _models_project_model__WEBPACK_IMPORTED_MODULE_1__.ProjectStatus.finished;
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
    }
    renderContent() {
        const listID = `${this.type}-projects-list`;
        this.element.querySelector('ul').id = listID;
        this.element.querySelector('h2').textContent =
            this.type.toUpperCase() + ' PROJECTS';
    }
    renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`);
        listEl.innerHTML = '';
        for (const projectItem of this.assignedProjects) {
            new _project_item__WEBPACK_IMPORTED_MODULE_4__.ProjectItem(this.element.querySelector('ul').id, projectItem);
        }
    }
}
__decorate([
    _decorators_bind__WEBPACK_IMPORTED_MODULE_2__.Bind
], ProjectList.prototype, "dragoverHandler", null);
__decorate([
    _decorators_bind__WEBPACK_IMPORTED_MODULE_2__.Bind
], ProjectList.prototype, "dropHandler", null);
__decorate([
    _decorators_bind__WEBPACK_IMPORTED_MODULE_2__.Bind
], ProjectList.prototype, "dragLeaveHandler", null);


/***/ }),

/***/ "./src/drag_and_drop/decorators/bind.ts":
/*!**********************************************!*\
  !*** ./src/drag_and_drop/decorators/bind.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bind: () => (/* binding */ Bind)
/* harmony export */ });
const Bind = (_target, _propName, descriptor) => {
    const originalMethod = descriptor.value;
    const adjustedDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjustedDescriptor;
};


/***/ }),

/***/ "./src/drag_and_drop/models/project_model.ts":
/*!***************************************************!*\
  !*** ./src/drag_and_drop/models/project_model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   ProjectStatus: () => (/* binding */ ProjectStatus)
/* harmony export */ });
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["active"] = 0] = "active";
    ProjectStatus[ProjectStatus["finished"] = 1] = "finished";
})(ProjectStatus || (ProjectStatus = {}));
class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}


/***/ }),

/***/ "./src/drag_and_drop/state/project_state.ts":
/*!**************************************************!*\
  !*** ./src/drag_and_drop/state/project_state.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectState: () => (/* binding */ ProjectState),
/* harmony export */   projectState: () => (/* binding */ projectState)
/* harmony export */ });
/* harmony import */ var _models_project_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project_model */ "./src/drag_and_drop/models/project_model.ts");

class State {
    constructor() {
        this.listeners = [];
    }
    addListener(ListenerFn) {
        this.listeners.push(ListenerFn);
    }
}
class ProjectState extends State {
    constructor() {
        super();
        this.projects = [];
    }
    static getInstance() {
        if (ProjectState.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addProject(title, description, numOfPeople) {
        const newProject = new _models_project_model__WEBPACK_IMPORTED_MODULE_0__.Project(Math.random().toString(), title, description, numOfPeople, _models_project_model__WEBPACK_IMPORTED_MODULE_0__.ProjectStatus.active);
        this.projects.push(newProject);
        this.updateListeners();
    }
    moveProject(projectId, newStatus) {
        const project = this.projects.find((prj) => prj.id === projectId);
        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListeners();
        }
    }
    updateListeners() {
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}
console.log('Running...');
const projectState = ProjectState.getInstance();


/***/ }),

/***/ "./src/drag_and_drop/utils/validation.ts":
/*!***********************************************!*\
  !*** ./src/drag_and_drop/utils/validation.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validate: () => (/* binding */ validate)
/* harmony export */ });
const validate = (input) => {
    let isValid = true;
    if (input.required) {
        isValid = isValid && input.value.toString().trim().length !== 0;
    }
    if (input.minLength != null && typeof input.value === 'string') {
        isValid = isValid && input.value.length > +input.minLength;
    }
    if (input.maxLength != null && typeof input.value === 'string') {
        isValid = isValid && input.value.length <= input.maxLength;
    }
    if (input.min != null && typeof input.value === 'number') {
        isValid = isValid && input.value >= input.min;
    }
    if (input.max != null && typeof input.value === 'number') {
        isValid = isValid && input.value <= input.max;
    }
    return isValid;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/drag_and_drop/app.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_project_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/project_input */ "./src/drag_and_drop/components/project_input.ts");
/* harmony import */ var _components_project_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/project_list */ "./src/drag_and_drop/components/project_list.ts");


new _components_project_input__WEBPACK_IMPORTED_MODULE_0__.ProjectInput();
new _components_project_list__WEBPACK_IMPORTED_MODULE_1__.ProjectList('active');
new _components_project_list__WEBPACK_IMPORTED_MODULE_1__.ProjectList('finished');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0tBQzVEO0lBRUQsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQ3hELE9BQU8sR0FBRyxPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDO0tBQy9DO0lBRUQsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQ3hELE9BQU8sR0FBRyxPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDO0tBQy9DO0lBQ0QsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFDOzs7Ozs7O1VDakNKO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjBEO0FBQ0Y7QUFFeEQsSUFBSSxtRUFBWSxFQUFFLENBQUM7QUFDbkIsSUFBSSxpRUFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFCLElBQUksaUVBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHQtY291cnNlLy4vc3JjL2RyYWdfYW5kX2Ryb3AvY29tcG9uZW50cy9iYXNlX2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWNvdXJzZS8uL3NyYy9kcmFnX2FuZF9kcm9wL2NvbXBvbmVudHMvcHJvamVjdF9pbnB1dC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWNvdXJzZS8uL3NyYy9kcmFnX2FuZF9kcm9wL2NvbXBvbmVudHMvcHJvamVjdF9pdGVtLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtY291cnNlLy4vc3JjL2RyYWdfYW5kX2Ryb3AvY29tcG9uZW50cy9wcm9qZWN0X2xpc3QudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1jb3Vyc2UvLi9zcmMvZHJhZ19hbmRfZHJvcC9kZWNvcmF0b3JzL2JpbmQudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1jb3Vyc2UvLi9zcmMvZHJhZ19hbmRfZHJvcC9tb2RlbHMvcHJvamVjdF9tb2RlbC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWNvdXJzZS8uL3NyYy9kcmFnX2FuZF9kcm9wL3N0YXRlL3Byb2plY3Rfc3RhdGUudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1jb3Vyc2UvLi9zcmMvZHJhZ19hbmRfZHJvcC91dGlscy92YWxpZGF0aW9uLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtY291cnNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHQtY291cnNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWNvdXJzZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHQtY291cnNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1jb3Vyc2UvLi9zcmMvZHJhZ19hbmRfZHJvcC9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29tcG9uZW50IGJhc2UgY2xhc3NcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQ8VCBleHRlbmRzIEhUTUxFbGVtZW50LCBVIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IHtcbiAgdGVtcGxhdGVFbGVtZW50OiBIVE1MVGVtcGxhdGVFbGVtZW50O1xuICBob3N0RWxlbWVudDogVDtcbiAgZWxlbWVudDogVTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB0ZW1wbGF0ZUlkOiBzdHJpbmcsXG4gICAgaG9zdEVsZW1lbnRJZDogc3RyaW5nLFxuICAgIGluc2VydEF0U3RhcnQ6IGJvb2xlYW4sXG4gICAgbmV3RWxlbWVudElkPzogc3RyaW5nXG4gICkge1xuICAgIHRoaXMudGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICB0ZW1wbGF0ZUlkXG4gICAgKSEgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgICB0aGlzLmhvc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaG9zdEVsZW1lbnRJZCkhIGFzIFQ7XG5cbiAgICBjb25zdCBpbXBvcnRlZE5vZGUgPSBkb2N1bWVudC5pbXBvcnROb2RlKFxuICAgICAgdGhpcy50ZW1wbGF0ZUVsZW1lbnQuY29udGVudCxcbiAgICAgIHRydWVcbiAgICApO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gaW1wb3J0ZWROb2RlLmZpcnN0RWxlbWVudENoaWxkIGFzIFU7XG4gICAgaWYgKG5ld0VsZW1lbnRJZCkge1xuICAgICAgdGhpcy5lbGVtZW50LmlkID0gbmV3RWxlbWVudElkO1xuICAgIH1cblxuICAgIHRoaXMuYXR0YWNoKGluc2VydEF0U3RhcnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2goaW5zZXJ0QXRCZWdpbm5pbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmhvc3RFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcbiAgICAgIGluc2VydEF0QmVnaW5uaW5nID8gJ2FmdGVyYmVnaW4nIDogJ2JlZm9yZWVuZCcsXG4gICAgICB0aGlzLmVsZW1lbnRcbiAgICApO1xuICB9XG5cbiAgYWJzdHJhY3QgY29uZmlndXJlKCk6IHZvaWQ7XG4gIGFic3RyYWN0IHJlbmRlckNvbnRlbnQoKTogdm9pZDtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL2Jhc2VfY29tcG9uZW50XCI7XG5pbXBvcnQgeyBWYWxpZGF0aW9uLCB2YWxpZGF0ZSB9IGZyb20gXCIuLi91dGlscy92YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBCaW5kIH0gZnJvbSBcIi4uL2RlY29yYXRvcnMvYmluZFwiO1xuaW1wb3J0IHsgcHJvamVjdFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL3Byb2plY3Rfc3RhdGVcIjtcblxuXG4gIC8vIFByb2plY3RJbnB1dCBDbGFzc1xuICBleHBvcnQgY2xhc3MgUHJvamVjdElucHV0IGV4dGVuZHMgQ29tcG9uZW50PEhUTUxEaXZFbGVtZW50LCBIVE1MRWxlbWVudD4ge1xuICAgIHRpdGxlSW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGRlc2NyaXB0aW9uSW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHBlb3BsZUlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoJ3Byb2plY3QtaW5wdXQnLCAnYXBwJywgdHJ1ZSwgJ3VzZXItaW5wdXQnKTtcblxuICAgICAgdGhpcy50aXRsZUlucHV0RWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnI3RpdGxlJ1xuICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgdGhpcy5kZXNjcmlwdGlvbklucHV0RWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnI2Rlc2NyaXB0aW9uJ1xuICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgdGhpcy5wZW9wbGVJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJyNwZW9wbGUnXG4gICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuY29uZmlndXJlKCk7XG4gICAgfVxuXG4gICAgY29uZmlndXJlKCkge1xuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuc3VibWl0SGFuZGxlcik7XG4gICAgfVxuXG4gICAgcmVuZGVyQ29udGVudCgpOiB2b2lkIHt9XG5cbiAgICBwcml2YXRlIGdhdGhlclVzZXJzSW5wdXQoKTogW3N0cmluZywgc3RyaW5nLCBudW1iZXJdIHwgdm9pZCB7XG4gICAgICBjb25zdCBlbnRlcmVkVGl0bGUgPSB0aGlzLnRpdGxlSW5wdXRFbGVtZW50LnZhbHVlO1xuICAgICAgY29uc3QgZW50ZXJlZERlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbklucHV0RWxlbWVudC52YWx1ZTtcbiAgICAgIGNvbnN0IGVudGVyZWRQZW9wbGUgPSB0aGlzLnBlb3BsZUlucHV0RWxlbWVudC52YWx1ZTtcblxuICAgICAgY29uc3QgdGl0bGVWYWxpZGF0ZTogVmFsaWRhdGlvbiA9IHtcbiAgICAgICAgdmFsdWU6IGVudGVyZWRUaXRsZSxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBkZXNjcmlwdGlvblZhbGlkYXRlOiBWYWxpZGF0aW9uID0ge1xuICAgICAgICB2YWx1ZTogZW50ZXJlZERlc2NyaXB0aW9uLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgbWluTGVuZ3RoOiA1LFxuICAgICAgfTtcblxuICAgICAgY29uc3QgcGVvcGxlVmFsaWRhdGU6IFZhbGlkYXRpb24gPSB7XG4gICAgICAgIHZhbHVlOiArZW50ZXJlZFBlb3BsZSxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIG1pbjogMSxcbiAgICAgICAgbWF4OiA1LFxuICAgICAgfTtcblxuICAgICAgaWYgKFxuICAgICAgICAhdmFsaWRhdGUodGl0bGVWYWxpZGF0ZSkgfHxcbiAgICAgICAgIXZhbGlkYXRlKGRlc2NyaXB0aW9uVmFsaWRhdGUpIHx8XG4gICAgICAgICF2YWxpZGF0ZShwZW9wbGVWYWxpZGF0ZSlcbiAgICAgICkge1xuICAgICAgICBhbGVydCgnSW52YWxpZCBpbnB1dCwgcGxlYXNlIHRyeSBhZ2Fpbi4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtlbnRlcmVkVGl0bGUsIGVudGVyZWREZXNjcmlwdGlvbiwgK2VudGVyZWRQZW9wbGVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2xlYXJJbnB1dCgpIHtcbiAgICAgIHRoaXMudGl0bGVJbnB1dEVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgIHRoaXMuZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgIHRoaXMucGVvcGxlSW5wdXRFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgQEJpbmRcbiAgICBwcml2YXRlIHN1Ym1pdEhhbmRsZXIoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdXNlcklucHV0ID0gdGhpcy5nYXRoZXJVc2Vyc0lucHV0KCk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh1c2VySW5wdXQpKSB7XG4gICAgICAgIGNvbnN0IFt0aXRsZSwgZGVzYywgcGVvcGxlXSA9IHVzZXJJbnB1dDtcbiAgICAgICAgcHJvamVjdFN0YXRlLmFkZFByb2plY3QodGl0bGUsIGRlc2MsIHBlb3BsZSk7XG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuIiwiaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi4vbW9kZWxzL2RyYWdfZHJvcF9pbnRlcmZhY2VzJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vYmFzZV9jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL21vZGVscy9wcm9qZWN0X21vZGVsJztcbmltcG9ydCB7IEJpbmQgfSBmcm9tICcuLi9kZWNvcmF0b3JzL2JpbmQnO1xuXG4vLyBQcm9qZWN0SXRlbSBjbGFzc1xuZXhwb3J0IGNsYXNzIFByb2plY3RJdGVtXG4gIGV4dGVuZHMgQ29tcG9uZW50PEhUTUxVTGlzdEVsZW1lbnQsIEhUTUxMSUVsZW1lbnQ+XG4gIGltcGxlbWVudHMgRHJhZ2dhYmxlXG57XG4gIHByaXZhdGUgcHJvamVjdDogUHJvamVjdDtcblxuICBnZXQgcGVyc29ucygpIHtcbiAgICBpZiAodGhpcy5wcm9qZWN0LnBlb3BsZSA9PT0gMSkge1xuICAgICAgcmV0dXJuICcxIHBlcnNvbiBhc3NpZ25lZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLnByb2plY3QucGVvcGxlfSBwZXJzb25zIGFzc2lnbmVkYDtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihob3N0SWQ6IHN0cmluZywgcHJvamVjdDogUHJvamVjdCkge1xuICAgIHN1cGVyKCdzaW5nbGUtcHJvamVjdCcsIGhvc3RJZCwgZmFsc2UsIHByb2plY3QuaWQpO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG5cbiAgICB0aGlzLmNvbmZpZ3VyZSgpO1xuICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xuICB9XG5cbiAgQEJpbmRcbiAgZHJhZ1N0YXJ0SGFuZGxlcihldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyIS5zZXREYXRhKCd0ZXh0L3BsYWluJywgdGhpcy5wcm9qZWN0LmlkKTtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIhLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gIH1cblxuICBkcmFnRW5kSGFuZGxlcihfZXZlbnQ6IERyYWdFdmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdEcmFnIEVuZCcpO1xuICB9XG5cbiAgY29uZmlndXJlKCk6IHZvaWQge1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydEhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5kcmFnRW5kSGFuZGxlcik7XG4gIH1cblxuICByZW5kZXJDb250ZW50KCkge1xuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoMicpIS50ZXh0Q29udGVudCA9IHRoaXMucHJvamVjdC50aXRsZTtcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaDMnKSEudGV4dENvbnRlbnQgPSB0aGlzLnBlcnNvbnM7XG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3AnKSEudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3QuZGVzY3JpcHRpb247XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vYmFzZV9jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhZ1RhcmdldCB9IGZyb20gJy4uL21vZGVscy9kcmFnX2Ryb3BfaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBQcm9qZWN0LCBQcm9qZWN0U3RhdHVzIH0gZnJvbSAnLi4vbW9kZWxzL3Byb2plY3RfbW9kZWwnO1xuaW1wb3J0IHsgQmluZCB9IGZyb20gJy4uL2RlY29yYXRvcnMvYmluZCc7XG5pbXBvcnQgeyBwcm9qZWN0U3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9wcm9qZWN0X3N0YXRlJztcbmltcG9ydCB7IFByb2plY3RJdGVtIH0gZnJvbSAnLi9wcm9qZWN0X2l0ZW0nO1xuXG4vLyBQcm9qZWN0TGlzdCBDbGFzc1xuZXhwb3J0IGNsYXNzIFByb2plY3RMaXN0XG4gIGV4dGVuZHMgQ29tcG9uZW50PEhUTUxEaXZFbGVtZW50LCBIVE1MRWxlbWVudD5cbiAgaW1wbGVtZW50cyBEcmFnVGFyZ2V0XG57XG4gIGFzc2lnbmVkUHJvamVjdHM6IFByb2plY3RbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHR5cGU6ICdhY3RpdmUnIHwgJ2ZpbmlzaGVkJykge1xuICAgIHN1cGVyKCdwcm9qZWN0LWxpc3QnLCAnYXBwJywgZmFsc2UsIGAke3R5cGV9LXByb2plY3RzYCk7XG5cbiAgICB0aGlzLmFzc2lnbmVkUHJvamVjdHMgPSBbXTtcblxuICAgIHRoaXMuY29uZmlndXJlKCk7XG4gICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gIH1cblxuICBAQmluZFxuICBkcmFnb3ZlckhhbmRsZXIoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIgJiYgZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzWzBdID09PSAndGV4dC9wbGFpbicpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBsaXN0RWwgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcigndWwnKSE7XG4gICAgICBsaXN0RWwuY2xhc3NMaXN0LmFkZCgnZHJvcHBhYmxlJyk7XG4gICAgfVxuICB9XG5cbiAgQEJpbmRcbiAgZHJvcEhhbmRsZXIoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgIGNvbnN0IHByb2plY3RJZCA9IGV2ZW50LmRhdGFUcmFuc2ZlciEuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICAgIHByb2plY3RTdGF0ZS5tb3ZlUHJvamVjdChcbiAgICAgIHByb2plY3RJZCxcbiAgICAgIHRoaXMudHlwZSA9PT0gJ2FjdGl2ZScgPyBQcm9qZWN0U3RhdHVzLmFjdGl2ZSA6IFByb2plY3RTdGF0dXMuZmluaXNoZWRcbiAgICApO1xuICB9XG5cbiAgQEJpbmRcbiAgZHJhZ0xlYXZlSGFuZGxlcihfZXZlbnQ6IERyYWdFdmVudCkge1xuICAgIGNvbnN0IGxpc3RFbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpITtcbiAgICBsaXN0RWwuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcHBhYmxlJyk7XG4gIH1cblxuICBjb25maWd1cmUoKSB7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5kcmFnb3ZlckhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5kcm9wSGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlSGFuZGxlcik7XG5cbiAgICBwcm9qZWN0U3RhdGUuYWRkTGlzdGVuZXIoKHByb2plY3RzOiBQcm9qZWN0W10pID0+IHtcbiAgICAgIGNvbnN0IHJlbGV2YW50UHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKHByaikgPT4ge1xuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnYWN0aXZlJykge1xuICAgICAgICAgIHJldHVybiBwcmouc3RhdHVzID09PSBQcm9qZWN0U3RhdHVzLmFjdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJqLnN0YXR1cyA9PT0gUHJvamVjdFN0YXR1cy5maW5pc2hlZDtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hc3NpZ25lZFByb2plY3RzID0gcmVsZXZhbnRQcm9qZWN0cztcbiAgICAgIHRoaXMucmVuZGVyUHJvamVjdHMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgbGlzdElEID0gYCR7dGhpcy50eXBlfS1wcm9qZWN0cy1saXN0YDtcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcigndWwnKSEuaWQgPSBsaXN0SUQ7XG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyJykhLnRleHRDb250ZW50ID1cbiAgICAgIHRoaXMudHlwZS50b1VwcGVyQ2FzZSgpICsgJyBQUk9KRUNUUyc7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclByb2plY3RzKCkge1xuICAgIGNvbnN0IGxpc3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgYCR7dGhpcy50eXBlfS1wcm9qZWN0cy1saXN0YFxuICAgICkhIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XG4gICAgbGlzdEVsLmlubmVySFRNTCA9ICcnO1xuICAgIGZvciAoY29uc3QgcHJvamVjdEl0ZW0gb2YgdGhpcy5hc3NpZ25lZFByb2plY3RzKSB7XG4gICAgICBuZXcgUHJvamVjdEl0ZW0odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykhLmlkLCBwcm9qZWN0SXRlbSk7XG4gICAgfVxuICB9XG59XG4iLCJcbiAgLy8gQmluZCBkZWNvcmF0b3JcbiAgZXhwb3J0IGNvbnN0IEJpbmQgPSAoXG4gICAgX3RhcmdldDogYW55LFxuICAgIF9wcm9wTmFtZTogc3RyaW5nLFxuICAgIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvclxuICApID0+IHtcbiAgICBjb25zdCBvcmlnaW5hbE1ldGhvZDogRnVuY3Rpb24gPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIGNvbnN0IGFkanVzdGVkRGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yID0ge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQoKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kRm4gPSBvcmlnaW5hbE1ldGhvZC5iaW5kKHRoaXMpO1xuICAgICAgICByZXR1cm4gYm91bmRGbjtcbiAgICAgIH0sXG4gICAgfTtcbiAgICAvLyBjb25zb2xlLmxvZyhvcmlnaW5hbE1ldGhvZCk7XG4gICAgcmV0dXJuIGFkanVzdGVkRGVzY3JpcHRvcjtcbiAgfTtcbiIsIlxuICAvLyBQcm9qZWN0IFR5cGVcbiAgZXhwb3J0IGVudW0gUHJvamVjdFN0YXR1cyB7XG4gICAgYWN0aXZlLFxuICAgIGZpbmlzaGVkLFxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGlkOiBzdHJpbmcsXG4gICAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyxcbiAgICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgICAgcHVibGljIHBlb3BsZTogbnVtYmVyLFxuICAgICAgcHVibGljIHN0YXR1czogUHJvamVjdFN0YXR1c1xuICAgICkge31cbiAgfVxuIiwiaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdFN0YXR1cyB9IGZyb20gJy4uL21vZGVscy9wcm9qZWN0X21vZGVsJztcblxuLy8gUHJvamVjdCBTdGF0ZSBNYW5hZ2VtZW50XG50eXBlIExpc3RlbmVyPFQ+ID0gKGl0ZW1zOiBUW10pID0+IHZvaWQ7XG5cbmNsYXNzIFN0YXRlPFQ+IHtcbiAgcHJvdGVjdGVkIGxpc3RlbmVyczogTGlzdGVuZXI8VD5bXSA9IFtdO1xuXG4gIGFkZExpc3RlbmVyKExpc3RlbmVyRm46IExpc3RlbmVyPFQ+KSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChMaXN0ZW5lckZuKTtcbiAgfVxufVxuXG4vLyBQcm9qZWN0IFN0YXRlIENsYXNzXG5leHBvcnQgY2xhc3MgUHJvamVjdFN0YXRlIGV4dGVuZHMgU3RhdGU8UHJvamVjdD4ge1xuICBwcml2YXRlIHByb2plY3RzOiBQcm9qZWN0W10gPSBbXTtcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFByb2plY3RTdGF0ZTtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKFByb2plY3RTdGF0ZS5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUHJvamVjdFN0YXRlKCk7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBhZGRQcm9qZWN0KHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIG51bU9mUGVvcGxlOiBudW1iZXIpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgICBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCksXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgbnVtT2ZQZW9wbGUsXG4gICAgICBQcm9qZWN0U3RhdHVzLmFjdGl2ZVxuICAgICk7XG5cbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgdGhpcy51cGRhdGVMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIG1vdmVQcm9qZWN0KHByb2plY3RJZDogc3RyaW5nLCBuZXdTdGF0dXM6IFByb2plY3RTdGF0dXMpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0cy5maW5kKChwcmopID0+IHByai5pZCA9PT0gcHJvamVjdElkKTtcbiAgICBpZiAocHJvamVjdCAmJiBwcm9qZWN0LnN0YXR1cyAhPT0gbmV3U3RhdHVzKSB7XG4gICAgICBwcm9qZWN0LnN0YXR1cyA9IG5ld1N0YXR1cztcbiAgICAgIHRoaXMudXBkYXRlTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGlzdGVuZXJzKCkge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXJGbiBvZiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgbGlzdGVuZXJGbih0aGlzLnByb2plY3RzLnNsaWNlKCkpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zb2xlLmxvZygnUnVubmluZy4uLicpO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdFN0YXRlID0gUHJvamVjdFN0YXRlLmdldEluc3RhbmNlKCk7XG5cbiIsIlxuICAvLyBWYWxpZGF0aW9uIGNvbmZpZ1xuICBleHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRpb24ge1xuICAgIHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG4gICAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICAgIG1pbkxlbmd0aD86IG51bWJlcjtcbiAgICBtYXhMZW5ndGg/OiBudW1iZXI7XG4gICAgbWluPzogbnVtYmVyO1xuICAgIG1heD86IG51bWJlcjtcbiAgfVxuXG4gIGV4cG9ydCBjb25zdCB2YWxpZGF0ZSA9IChpbnB1dDogVmFsaWRhdGlvbikgPT4ge1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgICBpZiAoaW5wdXQucmVxdWlyZWQpIHtcbiAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkICYmIGlucHV0LnZhbHVlLnRvU3RyaW5nKCkudHJpbSgpLmxlbmd0aCAhPT0gMDtcbiAgICB9XG5cbiAgICBpZiAoaW5wdXQubWluTGVuZ3RoICE9IG51bGwgJiYgdHlwZW9mIGlucHV0LnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgaW5wdXQudmFsdWUubGVuZ3RoID4gK2lucHV0Lm1pbkxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiAoaW5wdXQubWF4TGVuZ3RoICE9IG51bGwgJiYgdHlwZW9mIGlucHV0LnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgaW5wdXQudmFsdWUubGVuZ3RoIDw9IGlucHV0Lm1heExlbmd0aDtcbiAgICB9XG5cbiAgICBpZiAoaW5wdXQubWluICE9IG51bGwgJiYgdHlwZW9mIGlucHV0LnZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgaW5wdXQudmFsdWUgPj0gaW5wdXQubWluO1xuICAgIH1cblxuICAgIGlmIChpbnB1dC5tYXggIT0gbnVsbCAmJiB0eXBlb2YgaW5wdXQudmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiBpbnB1dC52YWx1ZSA8PSBpbnB1dC5tYXg7XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBQcm9qZWN0SW5wdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvamVjdF9pbnB1dCc7XG5pbXBvcnQgeyBQcm9qZWN0TGlzdCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9qZWN0X2xpc3QnO1xuXG5uZXcgUHJvamVjdElucHV0KCk7XG5uZXcgUHJvamVjdExpc3QoJ2FjdGl2ZScpO1xubmV3IFByb2plY3RMaXN0KCdmaW5pc2hlZCcpO1xuXG4vLyBjb25zb2xlLmxvZygnSGkhJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=