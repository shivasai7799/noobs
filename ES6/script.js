/*var Box5 = {
	color : 'green',
	position : 1,
	clickMe : function() {
		var self = this;
		document.querySelector('.green').addEventListener('click' , function () {
			alert('this box color is' + ' ' + self.color + ' ' + 'and the postion of the box is' + ' ' + self .position);
		});
	}
	
}

Box5.clickMe();*/

//ES6
/*const box6 = {
	color : 'green',
	position : 'nth',
	clickMe : function() {
		document.querySelector('.green').addEventListener('click' , () => {
			alert(`this box color is ${this.color} and the postion of the box is ${this.position}`);
		});
	}
	
}

box6.clickMe();*/

//function Person(name){
//	this.name = name;
//} 

/*Person.prototype.myFriends = function (friends){
	var arr = friends.map(function(el){
		return this.name + ' '  + 'is friends of' + ' ' + el ;
	}.bind(this));
	console.log(arr);
}

var friends = ['shiva' ,'sai','kumar'];

new Person('john').myFriends(friends);*/


/*Person.prototype.myFriends = function(friends) {
	var arr = friends.map(el => {
		return `${this.name} is friends of ${el}`
	});
	console.log(arr);
}

var friends = ['shiva' ,'sai','kumar'];

new Person('john').myFriends(friends);*/


/*function Shiva(name){
	this.name = name;
}

Shiva.prototype.myJobs = function(job){
	var arr = job.map(el => {
		return `${this.name} is a  ${el};`
	});
	
	console.log(arr);
}

var job = ['designer' , 'Engineer' , 'Devoloper'];

new Shiva('Shivasai').myJobs(job);*/

/*
var shiva = {
	firstName : 'Shivasai',
	lastName : 'Kumar'
}
*/

/*const {firstName , lastName} = shiva;
console.log(firstName);
console.log(lastName);*/

/*var shiva = ['shivasai' , 'Mechineni'];
const [firstName ,lastName] = shiva;
console.log(firstName);
console.log(lastName);*/

/*const {firstName : a ,lastName : b} = shiva;
console.log(a);
console.log(b);*/


/*function calcAgeRetirment(year){
	const age = new Date().getFullYear() - year;
	return [age , 65 - age];
}

const [age , retirement] = calcAgeRetirment(1993);

console.log(age);
console.log(retirement);*/


//var boxes = document.querySelectorAll('.box');
//
//var Array5 = Array.prototype.slice.call(boxes);
//
//Array5.forEach(function (cur){
//	cur.style.backgroundColor = 'blue';
//});

//ES6
//var Array6 = Array.from(boxes);
//Array.from(boxes).forEach(function(cur){
//	cur.style.backgroundColor = 'green';
//});


//ES5 for loop

//for (i = 0 ; i < Array5.length ; i++ ) { 
// if (Array5[i].className === 'box blue'){
////	 continue;
//	 break;
// }
//Array5[i].textContent = 'I Changed to Blue';
//
//}


//ES6 
/*for (const cur of Array6) {
	if (cur.className.includes('blue')) {
		continue;
	}
	cur.textContent = 'This is what Happend';
}*/


//var ages = [11 ,12 ,18 , 20 ,21];
//
//var full = ages.map(function(cur){
//	return cur >= 18 ;
//});
//
//console.log(full.indexOf(true));
//console.log(ages[full.indexOf(true)]);
//
//
//
//
//var full2 =ages.map(cur => cur >= 18);
//
//console.log(full2);
//console.log(full2.indexOf(true));
//console.log(ages.full2.findIndex(true));



//spread operator

//function fourAges(a,b,c,d){
//	return a+b+c+d;
//};
//
//var sum1 = fourAges(18,20,30,12);
//
//console.log(sum1);
//
//var ages = [18,20,30,12];
//
////ES5 
//
//var sum2 = fourAges.apply( null ,ages);
//
//console.log(sum2);


//ES6  Spread operator

//var sum3 = fourAges(...ages);
//console.log(sum3);
//
//
//var johnFamily = ['john' , 'smith' , 'shiva' , 'sai'];
//
//var smithFamily = ['mechineni','nani','ravi','sai'];
//
//
//var bigFamily = [...johnFamily , ...smithFamily];
//console.log(bigFamily);


//joining the nodelist using spread operator

//const h = document.querySelector('h1');
//
//const boxes1 = document.querySelectorAll('.box');
//
//const all = [h, ...boxes1];
//
//Array.from(all).forEach(cur => cur.style.color = 'red');



//Rest parameters 


//ES5

//function isFullAge(){
//	var isArr = Array.prototype.slice.call(arguments);
//	isArr.forEach(function (cur) {
//		console.log((2019 - cur) > 18);
//	})
//};
//
//isFullAge(2109 ,1991,1998);


//ES6

//function isFullAge2(...years){
//	years.forEach(cur => console.log((2019 - cur) > 18));
//		
//	}
//
//
//isFullAge2(2109 ,1991,1998);


//function isFullAge(limit){
//	var isArr = Array.prototype.slice.call(arguments ,1);
//	isArr.forEach(function (cur) {
//		console.log((2019 - cur) > limit);
//	})
//};
//
//isFullAge(21, 2019 ,1991,1998);


//ES6

//function isFullAge2(limit, ...years){
//	years.forEach(cur => console.log((2019 - cur) > limit));
//		
//	}
//
//
//isFullAge2(2109 ,1991,1998);


//function SmithFamily(firstName,lastName ,yearOfBirth ,nationality) {
////	yearOfBirth === undefined ? yearOfBirth = 1993 : yearOfBirth = yearOfBirth;
////	nationality === undefined ? nationality = 'American' : nationality = yearOfBirth;
//	if(yearOfBirth === undefined) {
//		yearOfBirth = 1993;
//	} else {
//		yearOfBirth = yearOfBirth;
//	}
//	if(nationality === undefined){
//		nationality = 'American';
//	} else {
//		
//		nationality = nationality;
//	}
//	this.firstName = firstName;
//	this.lastName = lastName;
//	this.yearOfBirth = yearOfBirth;
//	this.nationality = nationality;
//	
//	
//};
//ES6 
//function SmithFamily(firstName,lastName ,yearOfBirth = 1993  ,nationality = 'American') {
//    yearOfBirth === undefined ? yearOfBirth = 1993 : yearOfBirth = yearOfBirth;
//    nationality === undefined ? nationality = 'American' : nationality = yearOfBirth;
//	if(yearOfBirth === undefined) {
//		yearOfBirth = 1993;
//	} else {
//		yearOfBirth = yearOfBirth;
//	}
//	if(nationality === undefined){
//		nationality = 'American';
//	} else {
//		
//		nationality = nationality;
//	}
//	this.firstName = firstName;
//	this.lastName = lastName;
//	this.yearOfBirth = yearOfBirth;
//	this.nationality = nationality;
//	
//	
//}; 


//var emily = new SmithFamily('shiva' , 'sai');
//var john = new SmithFamily('shiva' , 'sai' , 2000 , 'Indian');


//ES6 Map 

//const question = new Map();
//
//question.set('question' , 'What is the Official Name of the Javscript version?');
//question.set(1 , 'ES6');
//question.set(2 , 'EcmaScript');
//question.set(3 , 'ES7');
//question.set(4 , 'ES5');
//question.set('correct' , 2);
//question.set(true , 'you are right :D');
//question.set(false , 'You are wrong please try again later :P');
//
//console.log(question.get('question'));
//
//if(question.has(4)) {
//   
//   
//   }
////question.delete(4);
//
//
////question.forEach((key , value) => console.log(`the key assigned is ${key} and the value is ${value}`));
//
//
//for (let [key,value] of question.entries()) {
//	if(typeof(key) === 'number'){
//		console.log(`Answer ${key} : ${value}`);
//	}
//}
//
//
//const ans = parseInt(prompt('Please enter your Answer'));
//
//console.log(question.get(ans === question.get('correct')));
//
////console.log(question.get(ans === question.get('correct')));




//var Person5 = function (name ,yearOfBirth, job) {
//	this.name = name;
//	this.yearOfBirth = yearOfBirth;
//	this.job = job;
//}
//
//Person5.prototype.calcAge = function() {
//	var age = new Date().getFullYear - this.yearOfBirth;
//	console.log(age);
//}
//
//var Shiva = new Person5('shivasai' , 1993, 'Engineer');
//
//
//
////ES6
//class Person6 {
//	constructor(name,yearOfBirth,job) {
//	this.name = name;
//	this.yearOfBirth = yearOfBirth;
//	this.job = job;
//	}
//
// 
//calculateAge() {
//	var age = new Date().getFullYear - this.yearOfBirth;
//	console.log(age);
//}
//
//}
//var Shiva = new Person6('shivasai' , 1993, 'Engineer');




//ES5 INHERITANCE WITH OBJECT PROTOTYPE CHAIN 


//var Person5 = function(name,yearOfBirth,job){
//	this.name = name;
//	this.yearOfBirth = yearOfBirth;
//	this.job = job;
//}
//
//
//Person5.prototype.calcAge = function() {
//var age = new Date().getFullYear() - this.yearOfBirth;
//console.log(age);
//}
//
//var Athlete5 = function(name,yearOfBirth,job,olympics,medals){
//	Person5.call(this ,name , yearOfBirth, job);
//	this.olympics = olympics;
//	this.medals = medals;
//}
//
//
//Athlete5.prototype = Object.create(Person5.prototype);
//
//Athlete5.prototype.wonMedal = function () {
//	this.medals++;
//	console.log(this.medals);
//}
//
//
//
//
//var john = new Athlete5('john' , 2009 , 'engineer' , 5 , 9 ,11);






//ES6


//class Person6 {
//	constructor(name,yearOfBirth,job) {
//	this.name = name;
//	this.yearOfBirth = yearOfBirth;
//	this.job = job;
//	}
//
// 
//   calculateAge() {
//	var age = new Date().getFullYear() - this.yearOfBirth;
//	console.log(age);
//}
//}
//	
//	class Athlete6 extends Person6 {
//		
//		constructor(name, yearOfBirth, job, olympics, medals){
//			super(name,yearOfBirth,job);
//			this.olympics = olympics;
//			this.medals = medals;
//		}
//		
//		wonMedals() {
//			this.medals++;
//			console.log(this.medals);
//		}
//	}
//
//
//
//const john = new Athlete6('john' , 2009 , 'engineer' , 5 , 9); 







