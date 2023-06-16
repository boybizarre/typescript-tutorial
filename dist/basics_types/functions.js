"use strict";
var addNum = function (n1, n2) {
    return n1 + n2;
};
var printResult = function (num) {
    console.log('The result: ' + num);
    return;
};
var addAndHandle = function (n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
};
var combineValues;
combineValues = addNum;
console.log(combineValues(6, 6));
addAndHandle(30, 50, function (result) {
    console.log(result);
});
//# sourceMappingURL=functions.js.map