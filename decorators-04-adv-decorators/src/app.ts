function Logger(logString:string){
  return function(constructor:Function){
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template : string , hookid :string){
  return function(constructor:any){
  const hookEl = document.getElementById(hookid);
  const shiva = new constructor();
  if(hookEl){
    hookEl.innerHTML = template;
    hookEl.querySelector('h1')!.textContent = shiva.name;
  }
  }
}

@WithTemplate('<h1>Shivasai kumar </h1>','app')
class Person {
  name = 'Shivasai kumar Mechineni';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);


// ------

function Log(target : any, propertyName : string | symbol){
console.log('property decorator!');
console.log(target, propertyName);

}

class price {
  @Log
  title: string;
  private _price : number;

  set price(val:number){
  if(val > 0){
    this. _price = val;
  } else {
    throw new Error('invalid number - should be negative');
  }
   
  }

  constructor(t:string , p:number){
    this.title = t;
    this._price = p
  }

  getpriceWithTax(tax:number){
    return this.price * (1+ tax);
  }
}
