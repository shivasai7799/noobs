"use strict";
function combinedAges(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineNumbers1 = combinedAges(20, 30);
var combinedStrings = combinedAges('shivasai', 'Mechineni');
console.log(combineNumbers1);
console.log(combinedStrings);
