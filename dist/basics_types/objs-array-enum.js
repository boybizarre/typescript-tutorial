"use strict";
var Role;
(function (Role) {
    Role[Role["admin"] = 2] = "admin";
    Role["author"] = "author";
    Role["readonly"] = "reader";
})(Role || (Role = {}));
;
const person = {
    name: 'Olakunle',
    age: 25,
    hobbies: ['Reading', 'Skipping', 'Cooking'],
    role: Role.readonly
};
if (person.role === Role.readonly)
    console.log('This is the reader');
console.log(person);
let favoriteActivities;
favoriteActivities = ['Smoking', 'Jumping', 'Running'];
for (let hobby in person.hobbies) {
    console.log(favoriteActivities[hobby]);
}
for (let hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
console.log(person);
//# sourceMappingURL=objs-array-enum.js.map