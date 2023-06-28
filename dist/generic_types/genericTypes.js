"use strict";
const names = ['Marcus', 'Harry', 'Phil'];
names[0].split(' ');
let error = true;
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('This is a timeout error');
    }, 3000);
});
console.log(promise);
promise.then((data) => {
    data.split(' ');
});
const merge = (obj1, obj2) => {
    return Object.assign(obj1, obj2);
};
const mergedObj = merge({ name: 'Marcus', role: ['Left Winger', 'Striker'] }, { age: 25 });
console.log(mergedObj.age);
const countAndDescribe = (element) => {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 Value';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    else {
    }
    return [element, descriptionText];
};
console.log(countAndDescribe('Hi, there'));
console.log(countAndDescribe(['Sports', 'Cooking']));
const extractAndConvert = (obj, key) => {
    return obj[key];
};
console.log(extractAndConvert({ name: 'Harry' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Harry');
textStorage.addItem('Phil');
textStorage.addItem('Marcus');
textStorage.removeItem('Phil');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
const createCourseGoal = (title, description, completeUntil) => {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal;
};
const namesArr = ['Max', 'McGuire'];
//# sourceMappingURL=genericTypes.js.map