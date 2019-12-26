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

enum Role {ADMIN1 ,READ_ONLY1,AUTHOR1};

const person1 : {
    name : string;
    age : number;
    hobbies : string[];
    role : any;
} = {
        name : 'Shivasai',
        age : 30,
        hobbies : ['Sports', 'Cooking'],
        role : Role.AUTHOR1
}


let favouriteHobbies11 : string[];
favouriteHobbies11 = ['sports'];
// person.role.push('admikn');
person1.role[1] = 'mechineni';
console.log(person1.role);

for (const shiva of  person1.hobbies){
    console.log(shiva.toUpperCase());
}

console.log(person1.name);


