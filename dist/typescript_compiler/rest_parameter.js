"use strict";
var logged;
var sendAnalytics = function (data) {
    console.log(data);
};
sendAnalytics('The data...');
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (currentResult, currentValue) {
        return currentResult + currentValue;
    }, 0);
};
console.log(add(5, 4, 3, 2));
//# sourceMappingURL=rest_parameter.js.map