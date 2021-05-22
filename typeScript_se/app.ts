function add(n1:number, n2:number) : number{
    return n1 + n2;
}
console.log(add(2,4));

function printResult(num : number) : void {
console.log('The Result is:' + num);
}

function addAndHandle(n1: number,n2: number,cb :(num : number) => void){
const result = n1 + n2 ;
cb(result);
}

printResult(add(33,4));

addAndHandle(11,12, (result) => {
    console.log(result);
});

//let combineValues : Function;
//combineValues = add;

let combineValues : (a : number,b: number) => number;

function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    return cb({data: 'Hi there!'});
  }
   
  sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
   });

   console.log("Hello Shivasai");

let name1 : string  = 'Shivasai';
console.log(name1);
