"use strict";
const addNum = (n1, n2) => {
    return n1 + n2;
};
const printResult = (num) => {
    console.log('The result: ' + num);
    return;
};
const addAndHandle = (n1, n2, callback) => {
    let result = n1 + n2;
    callback(result);
};
let combineValues;
combineValues = addNum;
console.log(combineValues(6, 6));
addAndHandle(30, 50, (result) => {
    console.log(result);
});
//# sourceMappingURL=functions.js.map