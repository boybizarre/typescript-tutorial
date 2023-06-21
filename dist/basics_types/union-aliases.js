"use strict";
const combine = (input1, input2, resultConversion) => {
    let result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
const combineAges = combine(30, 26, 'as-number');
const combineStringAges = combine('30', '26', 'as-number');
const combineNames = combine('Max', 'Alice', 'as-text');
console.log(combineAges);
console.log(combineStringAges);
console.log(combineNames);
//# sourceMappingURL=union-aliases.js.map