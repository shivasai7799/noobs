var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
    Color[Color["Orange"] = 3] = "Orange";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
var myname = 'Shiva';
function myName() {
    return myname;
}
console.log(myName());
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 7));
var myMultiply;
myMultiply = 'Say Hello';
console.log(myMultiply);
myMultiply = multiply;
console.log(myMultiply(10, 2));
//objects
var userData = {
    name: 'Shivasai',
    age: 27
};
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
var myRealRealAge = 27;
myRealRealAge = '27';
//Check types 
var finalValue = 20;
if (typeof finalValue == "string") {
    console.log("type is right");
}
else {
    console.log("type is wrong");
}
//never 
function neverReturns() {
    throw new Error('An Error');
}
//Default parameters
console.log('Default parameters');
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countDown();
//Rest & Spread 
console.log("Rest and Spread");
var numbers = [2, 4, 6, 7, 8];
console.log(Math.max(2, 4, 6, 7, 8));
console.log(Math.max.apply(Math, numbers));
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray('max', 1, 3, 4, 5));
console.log("Destructuring of an Array");
var shiva = ["shivasai", "Mechineni"];
var firstName = shiva[0], lastName = shiva[1];
console.log(firstName, lastName);
console.log("Destructuring of Objects");
var userData1 = {
    mName: "shivasai",
    age: 27
};
var mName = userData1.mName, age = userData1.age;
console.log(mName, age);
//Template literals
var myUser = 'Shiva';
var greeting = "This is " + myUser + " and wishing you Goodmorning";
console.log(greeting);
//# sourceMappingURL=app.js.map