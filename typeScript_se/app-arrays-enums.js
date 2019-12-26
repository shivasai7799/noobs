"use strict";
// const person : {
//     name : string; // not a good practice
//     age : number;
// } = {
//     const person : {
//         name : string;
//         age : number ;
//         hobbies : string[];
//         role : [number, string]
//     }  = {
//     name : 'Shivasai',
//     age : 30,
//     hobbies : ['Sports', 'Cooking'],
//     role : [2 , 'hobbies']
// }
var Role;
(function (Role) {
    Role[Role["ADMIN1"] = 0] = "ADMIN1";
    Role[Role["READ_ONLY1"] = 1] = "READ_ONLY1";
    Role[Role["AUTHOR1"] = 2] = "AUTHOR1";
})(Role || (Role = {}));
;
var person1 = {
    name: 'Shivasai',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR1
};
var favouriteHobbies11;
favouriteHobbies11 = ['sports'];
// person.role.push('admikn');
person1.role[1] = 'mechineni';
console.log(person1.role);
for (var _i = 0, _a = person1.hobbies; _i < _a.length; _i++) {
    var shiva = _a[_i];
    console.log(shiva.toUpperCase());
}
console.log(person1.name);
