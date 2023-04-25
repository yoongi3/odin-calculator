const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');

let firstOperand = '';
let secondOperand = '';
let currOperator = '';
let ans = '';
let shouldClear;

buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        handleButtons(button);
        console.log(button.classList+" "+ firstOperand+" "+currOperator+" "+secondOperand+" "+ans)
    })
});

function handleButtons(button){
    if(button.classList.contains('number')){
        handleNumber(button.textContent);
    }
    if(button.classList.contains('operator')){
        handleOperator(button.textContent);
    }
    if(button.classList.contains('equal')){
        operate(currOperator, firstOperand, secondOperand);
    }
    if(button.classList.contains('clear')){
        clear();
    }
    if(button.classList.contains('delete')){
        backspace();
    }
    // decimal
    // equal

}

function handleNumber(number){
    if(input.textContent){
        if(input.textContent[0].includes("0", 0) || shouldClear){
            input.textContent = '';
            shouldClear = false;
        }
        if(currOperator == ''){
            firstOperand = '';
        }
    }
    input.textContent += number;
    secondOperand = input.textContent;
}

function handleOperator(operator){
    if (firstOperand == ''){
        firstOperand = secondOperand;
        secondOperand = '';
        input.textContent = '0';
    }
    if (!firstOperand == ''){
        if(!secondOperand == ''){
            operate(currOperator, firstOperand, secondOperand);
        }
    }
    currOperator = operator;
    return;
}

function operate(c, a, b){
    (console.log(c))
    if (c === "+"){
        ans = (+a)+(+b);
    }if (c === "-"){
        ans = (+a)-(+b);
    }if (c === "*"){
        ans = (+a)*(+b);
    }if (c === "/"){
        ans = (+a)/(+b);
    }
    input.textContent = ans;
    firstOperand = ans;
    ans = '';
    secondOperand = '';
    currOperator = '';
    shouldClear = true;
}

function clear(){
    input.textContent = "0";
    ans = '';
    secondOperand = '';
    firstOperand = '';
    currOperator = '';
}
function backspace(){
    input.textContent = input.textContent.toString().slice(0,-1);
    secondOperand = input.textContent;
}