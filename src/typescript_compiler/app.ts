const button = document.querySelector('button')!;


let stateName = 'California';  // global variables are allowed

const sumNum = (n1: number, n2: number) => {
  if( n1 + n2 > 3) {
    return n1 + n2;
  }

  return; // no implicit returns 
}


const clickHandler = (message: string, age: number) => {

  // let userName = 'Todd'; //no unused local variables
  console.log('Clicked! ' + message + `We know you are ${age} years old`);
};

// alternative
if (button) {
  button.addEventListener('click', clickHandler.bind(null, "You're Welcome!", 30));
}


