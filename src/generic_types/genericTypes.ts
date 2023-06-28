const names: Array<string> = ['Marcus', 'Harry', 'Phil']; // same as writing string[]
names[0].split(' ');

let error: boolean = true;
const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve('This is a timeout error');
  }, 3000);
});

console.log(promise);

promise.then((data) => {
  data.split(' ');
});

// constraints
const merge = <T extends {}, U>(obj1: T, obj2: U) => {
  return Object.assign(obj1, obj2);
};

const mergedObj = merge(
  { name: 'Marcus', role: ['Left Winger', 'Striker'] },
  { age: 25 }
);

console.log(mergedObj.age);

// because typescript cannot tell if the element variable type would have a length property
interface Lengthy {
  length: number;
}

const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
  let descriptionText = 'Got no value';
  if (element.length === 1) {
    descriptionText = 'Got 1 Value';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements';
  } else {
  }

  return [element, descriptionText];
};

console.log(countAndDescribe('Hi, there'));
console.log(countAndDescribe(['Sports', 'Cooking']));

// keyof constraints because typescript cannot tell if key parameter would be a valid key type of object
const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return obj[key];
};

console.log(extractAndConvert({ name: 'Harry' }, 'name'));

// generic classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      // -1
      return;
    }

    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Harry');
textStorage.addItem('Phil');
textStorage.addItem('Marcus');
textStorage.removeItem('Phil');

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objectStorage = new DataStorage<object>();
// const maxObj = { name: 'Max' };

// objectStorage.addItem({ name: 'Dean' });

// // ...
// objectStorage.removeItem(maxObj);
// console.log(objectStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// partial utility type
const createCourseGoal = (
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal => {
  let courseGoal: Partial<CourseGoal> = {}; // tells typescript that the variable will still end up being of type courseGoal at the end of the day.
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;

  return courseGoal as CourseGoal;
};

// Readonly utility type
const namesArr: Readonly<string[]> = ['Max', 'McGuire'];

// namesArr.push('Fred');
// namesArr.pop();
