// Exercise 1 - Maybe use an Arrow Function?
var double = function (value) {
    return value * 2;
};
console.log(double(10));
var double1 = function (value) { return value * 2; };
console.log(double1(100));
// // Exercise 2 - If only we could provide some default values...
// var greet1 = function (name) {
//     if (name === undefined) { name = "Max"; }
//     console.log("Hello, " + name);
// };
// greet1();
// greet1("Anna");
var greet2 = function (name) {
    if (name === void 0) { name = 'shivasai'; }
    console.log("Hello " + name);
};
greet2();
greet2("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbe = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbe));
var numb = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numb));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numb);
console.log(newArray);
var newArray1 = [55, 20];
newArray1.push.apply(newArray1, numb);
console.log(newArray1);
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);
var testResults1 = [3.89, 2.99, 1.38];
var result11 = testResults1[0], result12 = testResults1[1], result13 = testResults1[2];
console.log(result11, result12, result13);
// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
var firstName1 = scientist.firstName;
var experience = scientist.experience;
console.log(firstName1, experience);
var scientist1 = { firstName11: "Will", experience11: 12 };
var firstName11 = scientist1.firstName11, experience11 = scientist1.experience11;
console.log(firstName11, experience11);
//# sourceMappingURL=problem1.js.map