const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');

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

function display(){

}
buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        handleButtons(button);
    })
});

function handleButtons(button){
    if(button.classList.contains('number')){
        input.textContent += button.textContent;
    }
    if(button.classList.contains('operator')){
        console.log("operator")
    }

}

    