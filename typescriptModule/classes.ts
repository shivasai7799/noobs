class Person {
private type : string;
protected age : number = 27;

constructor( public name:string, public username : string){
}


printAge() { 
console.log(this.age);
this.typeOf('old guy');
}

private typeOf(type:string){
this.type = type;
console.log(this.type);
}
};

// const person = new Person('nani', 'SHIVA');
// console.log(person);
// person.printAge();

class Shivasai extends Person { 
 constructor(username : string,name:string){
  super(name, username);
  this.age = 31;
}
}
const  shivasai = new Shivasai('nan','ssss');
console.log(shivasai);


//getters and setters
class Plant {
   private _species : string = 'DEFAULT';

   get species(){
       return this._species;
   }

   set species(value:string){
    if(value.length > 3){
        this._species = value;
    }else {
        this._species = 'DEFAULT';
    }
   }
}

const plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'ABCCCC';
console.log(plant.species);


//static properties and methods 
class Helper {
   static PI:number = 3.14;
   static circumference(diameter : number): number {
   return this.PI * diameter;
   }
}
console.log('shiva', 2 * Helper.PI);
console.log(Helper.circumference(8) * 2);

//Abstract classes 
abstract class Project { 
projectName : string = 'Default Name';
budget : number = 1000;

abstract changeName(value:string) : void;

calcBudget(){
 return this.budget*2;
}
}

class ITProject extends Project {
    changeName(name :string) : void {
     this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName('shivasai');
console.log(newProject);


//Private constructors 
class OnlyOne { 
    private static instance : OnlyOne;

    public readonly name : string;

    private constructor (name : string){
        this.name = name;
    }
    static getInstance(){
        if(!OnlyOne.instance){
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}


let newOne = OnlyOne.getInstance();
console.log(newOne);
console.log(newOne.name);