"use strict";
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(2, 4));
function printResult(num) {
    console.log('The Result is:' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(33, 4));
addAndHandle(11, 12, function (result) {
    console.log(result);
});
//let combineValues : Function;
//combineValues = add;
var combineValues;
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: 'Hi there!' });
}
sendRequest('Send this!', function (response) {
    console.log(response);
    return true;
});
console.log("Hello Shivasai");
var name1 = 'Shivasai';
console.log(name1);
