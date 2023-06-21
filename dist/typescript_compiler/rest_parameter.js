"use strict";
let logged;
const sendAnalytics = (data) => {
    console.log(data);
};
sendAnalytics('The data...');
const add = (...numbers) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
};
console.log(add(5, 4, 3, 2));
//# sourceMappingURL=rest_parameter.js.map