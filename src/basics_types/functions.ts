const addNum = (n1: number, n2: number) => {
  return n1 + n2;
};


const printResult = (num: number) => {
  console.log('The result: ' + num);
  return;
}

const addAndHandle = (n1: number, n2:number, callback: (num: number) => void ) => {
  let result = n1 + n2;
  callback(result);
}

let combineValues: (a: number, b: number) => number;

combineValues = addNum;
// combineValues = printResult;

console.log(combineValues(6, 6));

addAndHandle(30, 50, (result) => {
  console.log(result);
});

// console.log(printResult(addNum(2, 4))); // returns undefined