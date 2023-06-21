"use strict";
const button = document.querySelector('button');
let stateName = 'California';
const sumNum = (n1, n2) => {
    if (n1 + n2 > 3) {
        return n1 + n2;
    }
    return;
};
const clickHandler = (message, age) => {
    console.log('Clicked! ' + message + `We know you are ${age} years old`);
};
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "You're Welcome!", 30));
}
//# sourceMappingURL=app.js.map