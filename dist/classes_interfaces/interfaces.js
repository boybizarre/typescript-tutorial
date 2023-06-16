"use strict";
var Person = (function () {
    function Person(age, name) {
        if (name)
            this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi!');
        }
    };
    return Person;
}());
var user1;
user1 = new Person(22);
user1.greet("Hello there, my name is");
console.log(user1);
;
var addNums;
addNums = function (number1, number2) {
    return number1 + number2;
};
//# sourceMappingURL=interfaces.js.map