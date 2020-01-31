type addFn = (a:number ,b:number) => number;

let add : addFn;

add = (n1:number,n2: number)=>{
    return n1 + n2;
};

interface Named {
    name : string;
}


interface  Greetable extends Named  { 
    age: number;
    greet(phrase:string) : void
}

class Person implements Greetable {
    name : string;
    age : number;
    constructor(name:string, age:number){
        this.name=name;
        this.age = age;
    }
    greet(phrase : string) {
        console.log(phrase + this.name);
    }
}

let user1 : Greetable;

user1 = new Person('MAX',28);

user1 = {
    name : 'Shivasai',
    age : 30,
    greet(phrase){
        console.log(phrase + this.name);
    }
}

console.log(user1.greet("Hello my name is :"));