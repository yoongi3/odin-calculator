let firstNum;
let secondNum;
let operator = "";

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(c, a, b){
    if (c === "+"){
        return add(a,b);
    }if (c === "-"){
        return subtract(a,b);
    }if (c === "*"){
        return multiply(a,b);
    }if (c === "/"){
        return divide(a,b);
    }
}

console.log(operate("/",1203,131))