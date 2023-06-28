// const Logger = (constructor: Function) => {
//   console.log('Logging...');
//   console.log(constructor);
// }

// @Logger
// class PersonClass {
//   name = 'Max';

//   constructor() {
//     console.log('Creating person object...');
//   }
// }

// const pers = new PersonClass();

// console.log(pers);

// working with decorator factories
// decorator factory function
const Logger = (logString: string) => {
  console.log('LOGGER FACTORY');

  // decorator function
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
};

// decorator factory function
const WithTemplate = (template: string, hookId: string) => {
  console.log('TEMPLATE FACTORY');

  // decorator function
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    // returning and changing a class in a class decorator
    return class extends originalConstructor {
      constructor(..._args: any[]) {
        super();

        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
};

// the factory decorator functions execute in order like in regular javascript but the actual decorators execute from bottom up;
@Logger('LOGGING - PERSON')
@WithTemplate('<H1>My Person Object</h1>', 'app')
class PersonClass {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new PersonClass();

console.log(pers);

const Log = (target: any, propertyName: string | Symbol) => {
  console.log('Property Decorator');
  console.log(target);
  console.log(propertyName);
  console.log(' - - - - - - - - ');
};

const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
  console.log('Accessor Decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
  console.log(' - - - - - - - - ');
};

const Log3 = (
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) => {
  console.log('Method Decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
  console.log(' - - - - - - - - ');
};

const Log4 = (target: any, name: string, position: number) => {
  console.log('Parameter Decorator');
  console.log(target);
  console.log(name);
  console.log(position);
  console.log(' - - - - - - - - ');
};

class Product {
  @Log // property decorator
  title: string;
  private _price: number;

  @Log2 // accessor decorator
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - Must be positive number');
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @Log3 // method decorator
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const book1 = new Product('Book 1', 20);
const book2 = new Product('Book 2', 40);

// console.log(book2);

// other decorator return types
const AutoBind = (
  _target: any,
  _name: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod: Function = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
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
  message: string = 'This works!';

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button1 = document.querySelector('button')!;

button1.addEventListener('click', p.showMessage);
// console.log(p.showMessage.bind(this));