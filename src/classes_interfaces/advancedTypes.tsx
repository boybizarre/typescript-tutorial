type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// INTERSECTING TYPES
type AdminEmployee = Admin & Employee;

let admin: AdminEmployee = {
  name: 'Bruno',
  privileges: ['Attacking Midfielder', 'Center Midfielder'],
  startDate: new Date(),
};

type Combinable = number | string;
type Numeric = boolean | number;

type universal = Combinable & Numeric;

// Function overloading
function addUp(value1: number, value2: number): number;
function addUp(value1: string, value2: string): string;
function addUp(value1: number, value2: string): string;
function addUp(value1: string, value2: number): string;
 
function addUp(value1: Combinable, value2: Combinable)  {
  // TYPE GUARD
  if (typeof value1 === 'string' || typeof value2 === 'string') {
    return value1.toString() + value2.toString();
  }

  return value1 + value2;
};

const result = addUp('Arnold', 'Kyle'); // could use type casting 'as string'
result.split(' ');

// Optional chaining
const fetchedUserData = {
  id: 9,
  name: 'Martial',
  job: {
    title: 'Striker',
    description: 'Scoring goals',
  },
};

console.log(fetchedUserData?.job?.title); //should in case i'm receiving data from a backend
console.log(fetchedUserData && fetchedUserData.job.title);


// Nullish coalescing
const userInputValue = undefined;

const storedData = userInputValue ?? 'DEFAULT';

console.log(storedData);



type UnknownEmployee = Admin | Employee;

const printEmployeeInformation = (employee: UnknownEmployee) => {

  console.log('Name: ' + employee.name);

  // TYPE GUARD
  if ('privileges' in employee) {
    console.log('Privileges: ' + employee.privileges);
  };

  if ('startDate' in employee) {
    console.log('Start Date: ' + employee.startDate);
  };

};

printEmployeeInformation(admin);

class Car {
  drive(){
    console.log('Driving a car...');
  }
}

class Truck {
  drive(){
    console.log('Driving a truck...');
  }

  loadCargo(cargo: number) {
    console.log('Loading cargo: ' + cargo)
  }
}

let v1 = new Car();
let v2 = new Truck();

type Vehicle = Car | Truck;

const vehicleInfo = (vehicle: Vehicle) => {
  vehicle.drive();
  if ('loadCargo' in vehicle) {
    vehicle.loadCargo(1000);
  }

  // if (vehicle instanceof Truck) {
  //   vehicle.loadCargo(1000);
  // }
}

vehicleInfo(v1);
vehicleInfo(v2);

// DISCRIMINATED UNIONS
interface Bird {
  type: 'bird',
  flyingSpeed: number;
}

interface Horse {
  type: 'horse',
  runningSpeed: number;
}

type Animal = Bird | Horse

const moveAnimal = (animal: Animal) => {
  let speed: number;
  switch(animal.type){
    case 'bird':
      speed = animal.flyingSpeed;
    break;
    case 'horse':
      speed = animal.runningSpeed;
  }

  console.log('Moving at speed: ' + speed);
};

moveAnimal({ type: 'bird', flyingSpeed: 20 });

// TYPE CASTING
// const paragraph = document.querySelector('p'); // htmlparagraph element
const inputHtmlElement = document.getElementById('num1')! as HTMLInputElement;

interface ErrorContainer { //{ email: 'Not a valid email address', username: 'Must start with a character'}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email address',
  username: 'Must start with a character',
}


// if (inputHtmlElement) {
//   (inputHtmlElement  as HTMLInputElement).value = 'Hi there';
// }



// same thing with
// interface Admin {
//   name: string,
//   privileges: string[];
// }

// interface Employee {
//   name: string,
//   startDate: Date,
// }

// interface AdminEmployee extends Admin, Employee {};

// let admin: AdminEmployee = {
//   name: 'Bruno',
//   privileges: ['Attacking Midfielder', 'Center Midfielder'],
//   startDate: new Date()
// }
