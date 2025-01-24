

let plus = document.getElementById("plus");
let divde = document.getElementById("divde");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");


plus.addEventListener('click', () => {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let result = number1 + number2;
    document.getElementById("result").innerText = "result= " + result;
})

divde.addEventListener('click', () => {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let result = number1 / number2;
    document.getElementById("result").innerText = "result= " + result;
})


minus.addEventListener('click', () => {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let result = number1 - number2;
    document.getElementById("result").innerText = "result= " + result;
})


multiply.addEventListener('click', () => {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let result = number1 * number2;
    document.getElementById("result").innerText = "result= " + result;
})
















