// type Person = {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// };

// let user1: Person;

// user1 = {
//   name: 'Harry Kane',
//   age: 29,

//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   },
// };

// user1.greet('Hi there, I am');


interface Name {
  readonly name?: string;
  city?: string;
}

interface Greetings extends Name {
  // readonly name: string;

  greet(phrase: string): void;
}

class Person implements Greetings {
  name?: string;
  age: number;
  constructor(age: number, name?: string) { // a required parameter cannot follow an optional parameter
    if (name) this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}

let user1: Greetings;

user1 = new Person(22);

user1.greet("Hello there, my name is");
console.log(user1);

// type addFn = (num1: number, num2: number) => number;
interface addFn {
  (num1: number, num2: number): number;
};

let addNums: addFn;

addNums = (number1: number, number2: number) => {
  return number1 + number2;
}

