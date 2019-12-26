

enum Color {
    Blue,
    Green,
    Yellow,
    Orange
}

let myColor : Color = Color.Green;

console.log(myColor);

let myname : string = 'Shiva';

function myName() : string {
    return myname;
}

console.log(myName());

function multiply(value1 :number,value2:number){
 return value1 * value2;
}
console.log(multiply(2, 7));

let myMultiply;
myMultiply = 'Say Hello';
console.log(myMultiply)
myMultiply = multiply;
console.log(myMultiply(10,2));


//objects

let userData : {name : string, age : number} = { 
    name : 'Shivasai',
    age : 27
}
// userData = {
//     name : 'shiva',
//     age : 30 
// };

// //Type Creation 
type Complex = {data : number[], output:(all:boolean) => number []};

//Complex object
// let complex : Complex = {
//     data : [10 ,20 ,30 ,40],

//     output : function (all: boolean):number {
//         return this.data;
//     }
// };

// let complex2 : Complex = {
//     data : [10 ,20 ,30 ,40],

//     output : function (all: boolean):number {
//         return this.data;
//     }
// };

//Union Types 
let myRealRealAge : number | string = 27;
myRealRealAge = '27';


//Check types 
let finalValue = 20;
if(typeof finalValue == "string"){
    console.log("type is right");
} else {
    console.log("type is wrong");
}


//never 
function neverReturns():never {
    throw new Error('An Error');
}

//Default parameters
console.log('Default parameters');
const countDown = (start : number = 10) :void => {
    console.log(start);
    while(start > 0){
        start --;
    }
    console.log("Done!",start);
};
countDown();

//Rest & Spread 
console.log("Rest and Spread");
const numbers = [2 ,4, 6, 7, 8];
console.log(Math.max(2 ,4, 6, 7, 8));
console.log(Math.max(...numbers));

function makeArray(name:string, ...args : number[]){
 return args;
}

console.log(makeArray('max',1,3,4,5));


console.log("Destructuring of an Array");
const shiva = ["shivasai","Mechineni"];
const [firstName, lastName] = shiva;
console.log(firstName,lastName);

console.log("Destructuring of Objects");
const userData1 = {
    mName : "shivasai",
    age : 27
}
const {mName,age} = userData1
console.log(mName,age);

//Template literals
const myUser = 'Shiva';
const greeting = `This is ${myUser} and wishing you Goodmorning`;
console.log(greeting);

