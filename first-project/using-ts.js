var button1 = document.querySelector("button");
var input11 = document.getElementById("num1"); //typecasting --> as typescript doesnt recognises the input element
var input21 = document.getElementById("num2");
function add1(num1, num2) {
    return num1 + num2;
}
button1.addEventListener("click", function () {
    console.log(add1(+input11.value, +input21.value));
});
