class Mechineni {
    kumar : string;

constructor ( public name : string,public chicha:string){

}
}

let nan = new Mechineni('bbbbb', 'vammo');
console.log(nan);


class Plants { 
 private _species : string = 'Default';

 get species(){
     return this._species;
 }

 set species(value:string){
  if(value.length > 3){
      this._species = value;
  } else {
      this._species = 'Default';
  }
 }

}

let per = new Plants();
console.log(per.species);
per.species = 'shivas';
console.log(per.species);


//Abstract class
abstract class Project1 {
    projctName : string = 'Default';
    budget : number;

 abstract changeName(name:string):void;

 calcBudget(){
     this.budget * 2;
 }

}

class ITproj extends Project1 {
 
    changeName(name:string):void {
        this.projctName = name;
    }
}

let proj = new ITproj();
console.log(proj);
proj.changeName('SHIVASAI');
console.log(proj);