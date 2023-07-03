// const person: {
//   name: string,
//   age: number, }
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]
// } = {
//   name: 'Olakunle',
//   age: 25,
//   hobbies: ['Reading', 'Skipping', 'Cooking'],
//   role: [2, 'author'],
// }

enum Role { admin = 2, author = 'author', readonly = 'reader' };
// enum Roles { admin , author , readonly  };

const person = {
  name: 'Olakunle',
  age: 25,
  hobbies: ['Reading', 'Skipping', 'Cooking'],
  // role: [2, 'author'],
  role: Role.readonly
};

if (person.role === Role.readonly) console.log('This is the reader');

// person.role.push('admin');
// person.role[0] = 'admin';
// person.role = [0, 'admin', 'author'];

console.log(person);

let favoriteActivities: string[];
favoriteActivities = ['Smoking', 'Jumping', 'Running'];

for (let hobby in person.hobbies) {
  console.log(favoriteActivities[hobby]); // returns an index
}

for (let hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // returns the string
  // console.log(hobby.map()); // ERROR cannot map a string, because typescript inference already knows it contains a string
}
console.log(person);