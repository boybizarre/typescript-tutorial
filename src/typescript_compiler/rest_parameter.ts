let logged;

const sendAnalytics = (data: string) => {
  console.log(data);
};

sendAnalytics('The data...');

// rest parameter
const add = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
};

console.log(add(5, 4, 3, 2));