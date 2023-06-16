"use strict";
var button = document.querySelector('button');
var stateName = 'California';
var sumNum = function (n1, n2) {
    if (n1 + n2 > 3) {
        return n1 + n2;
    }
    return;
};
var clickHandler = function (message, age) {
    console.log('Clicked! ' + message + "We know you are ".concat(age, " years old"));
};
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "You're Welcome!", 30));
}
//# sourceMappingURL=app.js.map