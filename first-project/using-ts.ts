const button1 = document.querySelector("button");
const input11 = document.getElementById("num1") ! as HTMLInputElement; //typecasting --> as typescript doesnt recognises the input element
const input21 = document.getElementById("num2") ! as HTMLInputElement;

function add1(num1 : number , num2 : number) {
    return num1 + num2;
  
}

button1.addEventListener("click", function() {
  console.log(add1( + input11.value, + input21.value));
});
