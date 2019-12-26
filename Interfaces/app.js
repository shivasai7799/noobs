// function myName(lateral : {label : string}){
//     console.log(lateral.label);
// }
// let myObj = {name : 'Shiva', label : 'Shivasai'};
// myName(myObj);
// interface labeled {
//     label : string
// }
// function label(lateral : labeled){
//     console.log(lateral.label);
// }
// let obj = {name : 'Shiva', label : 'Shivasai'};
// label(obj);
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }
// function createSquare(config: SquareConfig): {color: string; area: number} {
//     let newSquare = {color: "white", area: 100};
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }
// let mySquare = createSquare({color: "black"});
// console.log(mySquare);
// interface NamedPerson { 
//     firstName : string;
//     age?: number;
//     [propName : string]: any;
//     greet(lastName : string):void;
// }
// function greet(person : NamedPerson) {
//     console.log("hello, " + " " + person.firstName);
// }
// function changeName(person : NamedPerson){
//     person.firstName = "Anna";
// }
// const person: NamedPerson = {
//     firstName : "Max",
//     hobbies : ["cooking", "sports"],
//     greet(lastName :string) {
//         console.log("Hi ", + this.firstName + " " + lastName);
//     }
// };
// //greet({firstName : "max", age : 27});
// changeName(person);
// greet(person);
// person.greet('Anything');
// class Person implements NamedPerson {
//     firstName : string;
//     greet(lastName:string){
//         console.log("Hi ", + this.firstName + " " + lastName);
//     };
// }
// const myPerson = new Person();
// myPerson.firstName ="Shivasai";
// greet(myPerson);
// myPerson.greet("Anything");
// //Function Types 
// interface DoubleValueFunc {
//     (number1 :number , number2 :number):number;
// }
// let myDoubleFunction = function(value1 : number , value2 : number) {
//  return (value1 + value2) * 2;
// }
// console.log(myDoubleFunction(10,20));
// //Interface Inheritance
// interface agedPerson extends NamedPerson {
//     age : number;
// }
// const oldPerson : agedPerson = {
//  age : 27,
//  firstName : "Max",
//  greet(lastName:string) {
//      console.log("Hello!");
//  }
// };
// console.log(oldPerson);
// Generics 
function identity(data) {
    return data;
}
console.log(identity("shivasai"));
console.log(identity(27));
console.log({ name: 'shivasai', age: 77 });
//Better Generic  
function defaultEcho(data) {
    return data;
}
console.log(defaultEcho("shivasai").length);
console.log(defaultEcho(27));
console.log({ name: 'shivasai', age: 77 });
