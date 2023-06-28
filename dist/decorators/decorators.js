"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const Logger = (logString) => {
    console.log('LOGGER FACTORY');
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
};
const WithTemplate = (template, hookId) => {
    console.log('TEMPLATE FACTORY');
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._args) {
                super();
                console.log('Rendering template');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
};
let PersonClass = class PersonClass {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
};
PersonClass = __decorate([
    Logger('LOGGING - PERSON'),
    WithTemplate('<H1>My Person Object</h1>', 'app')
], PersonClass);
const pers = new PersonClass();
console.log(pers);
const Log = (target, propertyName) => {
    console.log('Property Decorator');
    console.log(target);
    console.log(propertyName);
    console.log(' - - - - - - - - ');
};
const Log2 = (target, name, descriptor) => {
    console.log('Accessor Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
    console.log(' - - - - - - - - ');
};
const Log3 = (target, name, descriptor) => {
    console.log('Method Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
    console.log(' - - - - - - - - ');
};
const Log4 = (target, name, position) => {
    console.log('Parameter Decorator');
    console.log(target);
    console.log(name);
    console.log(position);
    console.log(' - - - - - - - - ');
};
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid price - Must be positive number');
        }
    }
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
const book1 = new Product('Book 1', 20);
const book2 = new Product('Book 2', 40);
const AutoBind = (_target, _name, descriptor) => {
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
class Printer {
    constructor() {
        this.message = 'This works!';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button1 = document.querySelector('button');
button1.addEventListener('click', p.showMessage);
//# sourceMappingURL=decorators.js.map