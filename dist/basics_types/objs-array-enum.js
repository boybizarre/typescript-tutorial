"use strict";
var Role;
(function (Role) {
    Role[Role["admin"] = 2] = "admin";
    Role["author"] = "author";
    Role["readonly"] = "reader";
})(Role || (Role = {}));
;
var person = {
    name: 'Olakunle',
    age: 25,
    hobbies: ['Reading', 'Skipping', 'Cooking'],
    role: Role.readonly
};
if (person.role === Role.readonly)
    console.log('This is the reader');
console.log(person);
var favoriteActivities;
favoriteActivities = ['Smoking', 'Jumping', 'Running'];
for (var hobby in person.hobbies) {
    console.log(favoriteActivities[hobby]);
}
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(person);
//# sourceMappingURL=objs-array-enum.js.map