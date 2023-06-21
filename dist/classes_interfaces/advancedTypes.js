"use strict";
var _a;
let admin = {
    name: 'Bruno',
    privileges: ['Attacking Midfielder', 'Center Midfielder'],
    startDate: new Date(),
};
function addUp(value1, value2) {
    if (typeof value1 === 'string' || typeof value2 === 'string') {
        return value1.toString() + value2.toString();
    }
    return value1 + value2;
}
;
const result = addUp('Arnold', 'Kyle');
result.split(' ');
const fetchedUserData = {
    id: 9,
    name: 'Martial',
    job: {
        title: 'Striker',
        description: 'Scoring goals',
    },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
console.log(fetchedUserData && fetchedUserData.job.title);
const userInputValue = undefined;
const storedData = userInputValue !== null && userInputValue !== void 0 ? userInputValue : 'DEFAULT';
console.log(storedData);
const printEmployeeInformation = (employee) => {
    console.log('Name: ' + employee.name);
    if ('privileges' in employee) {
        console.log('Privileges: ' + employee.privileges);
    }
    ;
    if ('startDate' in employee) {
        console.log('Start Date: ' + employee.startDate);
    }
    ;
};
printEmployeeInformation(admin);
class Car {
    drive() {
        console.log('Driving a car...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(cargo) {
        console.log('Loading cargo: ' + cargo);
    }
}
let v1 = new Car();
let v2 = new Truck();
const vehicleInfo = (vehicle) => {
    vehicle.drive();
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(1000);
    }
};
vehicleInfo(v1);
vehicleInfo(v2);
const moveAnimal = (animal) => {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
};
moveAnimal({ type: 'bird', flyingSpeed: 20 });
const inputHtmlElement = document.getElementById('num1');
const errorBag = {
    email: 'Not a valid email address',
    username: 'Must start with a character',
};
//# sourceMappingURL=advancedTypes.js.map