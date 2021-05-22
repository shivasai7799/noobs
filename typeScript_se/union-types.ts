function combinedAges(input1 : number | string ,input2 : number | string){
   let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
    result = input1 + input2 ; 
 } else {
    result = input1.toString() + input2.toString();
 }
    return result;
}

const combineNumbers1 = combinedAges(20,30);
const combinedStrings = combinedAges('shivasai', 'Mechineni');

console.log(combineNumbers1);
console.log(combinedStrings);
