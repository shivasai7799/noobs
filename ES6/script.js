/* var name5 = 'Shivasai';
var age = '25';
name5 = 'Shivasai kumar';
console.log(name5);


let name6 = 'nai maloom';
let age2 = 30;
name6 = 'arvinda sametha';
console.log(name6);


const name7 = 'shivakumar';
const age3 = 30;

console.log(name7); */


//es5
//function Shiva5(testPassed){  //function scoped
//	
//	if (testPassed){
//		var name = 'shivasai';
//		var age = 25;
//		
//		console.log( name + ',' + 'he is quiet a good age' + ' ' + age + ' ' +  'to drive a car' );
//	} else {
//		console.log('he is not eligible to drive a car');
//	}
//	
//}
//
//Shiva5(true);

//es6
/* function Shiva6(testPassed){ //block scoped
	let firstName = 'shivasai';
	const age = 25;
	if (testPassed){
		firstName = 'shivasai';
		console.log( firstName + ',' + 'he is quiet a good age' + ' ' + age + ' ' +  'to drive a car' );
	} 
		
	
}

Shiva6(true); */

//IIFE and blocks in es6

//{
//	
//	const a = 50 ;
//	let b = 100;
//	console.log(a + b);
//}
//
////es5 
//
//(function () {
//	var a =30 ;
//	var b = 70;
//	console.log(a);
//})();

/* let firstName = 'shivasai';
let lastName = 'kumar';
const yearOfBirth = 1990 ;

function calcAge(year){
	return 2016 - year;
}


console.log("this is"  + firstName + lastName + " ,"+  "he is born in:" + yearOfBirth + "and his age is " + calcAge(yearOfBirth));


console.log(`this is ${firstName} ${lastName}. he is born in ${yearOfBirth}. his age is ${calcAge(yearOfBirth)}`);

const n = `${firstName} ${lastName}`;

console.log(n.startsWith('S'));
console.log(n.includes('ku'));
console.log(n.endsWith('r'));
console.log(n.repeat(5)); */

//Arrow functions

/*let years = [1940 ,1950 ,1960 ,1993];
var ages5 = years.map(function(el){
	return 2019 - el ;
});



//es6 

/*var ages6 = years.map((el,index) => `Age element ${index + 1 } : ${2019 - el}.`);
console.log(ages6); */


/*let age6 = years.map((el,index) => {
	const now = new Date().getFullYear();
	const age = now - el;
	return `Age element ${index + 1} : ${age}.`
});

console.log(age6);*/


//ES5

var Box5 = {
	color : green ,
	
}



