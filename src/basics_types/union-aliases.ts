
type combinable = number | string;
type conversionDescriptor = 'as-number' | 'as-text';

const combine = (
  input1: combinable,
  input2: combinable,
  resultConversion: conversionDescriptor
) => {
  let result;

  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;

  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
};

const combineAges = combine(30, 26, 'as-number');
const combineStringAges = combine('30', '26', 'as-number');
const combineNames = combine('Max', 'Alice', 'as-text');

console.log(combineAges);
console.log(combineStringAges);
console.log(combineNames);
