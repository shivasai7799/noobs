function add1(n1 : number, n2 : number, showResult : Boolean ,phrase : string): any {
    
    if(showResult){
        console.log(phrase  + n1 + n2);
    } else { 
        return n1 + n2 ;
    }
}
console.log(add1(10,20,true,'new Record is:'));