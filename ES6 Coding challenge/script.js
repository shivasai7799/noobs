class Town {
	constructor(name,buildYear){
		this.name = name;
		this.buildYear = buildYear;
	}
}

class parks extends Town { 
constructor(name,buildYear,area, numOfTrees){
super(name,buildYear);
	this.area = area;
	this.numOfTrees = numOfTrees;
	
}
	
treeDensity() {
 const density = this.numOfTrees/this.area;
	console.log(`${this.name} has a tree density of ${density} trees per square km`);
}

}

class streets extends Town  {
constructor(name,buildYear, length, size = 3){
super(name , buildYear);
this.length = length;
this.size = size;

}
	
classifyStreet () {
const classification = new Map();
    classification.set(1, 'tiny');
	classification.set(2, 'small');
	classification.set(3, 'normal');
	classification.set(4, 'big');
	classification.set(5, 'huge');
	
	console.log(`${this.name},build in ${this.buildYear},is a ${classification.get(this.size)} street.`);
	
}
	
}

const allParks = [ new parks('Green park' , 1987 , 0.2 , 215),
				new parks('National park' , 1887 , 2.5 , 1000),
				 new parks('oak park' , 1956 , 0.2 , 949)];

const allStreets = [ new streets('north first' , 1987 , 0.2 , 215),
				new streets('zanker' , 1887 , 2.5 , 1000),
				 new streets('Alicante' , 1956 , 0.2 , 949)];




function calcAge(arr){
	const sum = arr.reduce((prev,curr,index) => prev + curr,0)
	return [sum , sum/arr.length];
	
}

function reportParks(p) {
	
	console.log('------- All parks Reports ---------');
	
	//density 
	p.forEach(el => el.treeDensity());
	
	
	//Average age 
	const ages = p.map(el => new Date().getFullYear() - el.buildYear);
	console.log(new Date());
	const [totalAge, average] = calcAge(ages);
	console.log(`Our ${p.length} parks have an average of ${average} years`);
	
	// which park has more than 1000 trees
	const i = p.map(el => el.numOfTrees).findIndex(el => el >= 1000);
	
	console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s){
	
	console.log(`--------STREETS REPORTS------`);
	
	//Total and average length of town's streets
	const [totalLength ,AvgLength] = calcAge(s.map(el => el.length));
	console.log(`Our ${s.length} streets have a total length of ${totalLength} km ,with an average of ${AvgLength} km.`);
	
	//ClassifySizes 
	s.forEach(el => el.classifyStreet());
	 
	
	
}

reportParks(allParks);
reportStreets(allStreets);


//class Town {
//	constructor(name,yearOfBirth){
//		this.name = name;
//		this.yearOfBirth = yearOfBirth ;
//	}
//	
//}
//
//
//class Parks extends Town {
//	constructor(name,yearOfBirth,place){
//		super(name,yearOfBirth);
//		this.palce = place;
//	}
//	
//	calcAge(){
//		const age = new Date().getFullYear() - this.yearOfBirth;
//		console.log(`age of the person is ${age}`);
//	}
//}
//
//function calcAge(arr){
//    const sum = arr.reduce((prev,curr,index) => prev + curr,0)
//	return [sum , sum/arr.length];
//}
//
//const allParks = [new Parks('shiva', 1991, 'medak'), new Parks('srinivas', 1994, 'kansas'), new Parks('kumar', 1995, 'California')];
//
//function reportParks(p){
// console.log(`----------Report log---------`);
// 
// const ages = allParks.forEach(p => {
//	 p.calcAge()
// });
//	
//const ages1 = p.map(el => new Date().getFullYear() - el.buildYear);
//console.log(new Date());
//const [totalAge, average] = calcAge(ages1);
//console.log(`Our ${p.length} parks have an average of ${average} years`);
//
//};
//
//
//
//reportParks(allParks);




