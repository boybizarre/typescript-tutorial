"use strict";
class Person {
    constructor(age, name) {
        if (name)
            this.name = name;
        this.age = age;
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi!');
        }
    }
}
let user1;
user1 = new Person(22);
user1.greet("Hello there, my name is");
console.log(user1);
;
let addNums;
addNums = (number1, number2) => {
    return number1 + number2;
};
//# sourceMappingURL=interfaces.js.map