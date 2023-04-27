const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');
const log = document.getElementById('log');

let firstOperand = '';
let secondOperand = '';
let currOperator = '';
let ans = '';
let shouldClear = true;

console.log("firstOperand: "+ firstOperand+" currOperator: "+currOperator+" secondOperand: "+secondOperand+" "+ans) // ****

buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        handleButtons(button);
        log.textContent = (firstOperand+ " "+currOperator+" "+secondOperand+" "+ans)
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
    if(button.classList.contains('decimal')){
        handleDecimal(button.textContent);
    }
}

function handleNumber(number){
    if(input.textContent){
        if(shouldClear){
            input.textContent = '';
            shouldClear = false;
        }
        if(currOperator == ''){
            firstOperand = '';
        }
    }
    input.textContent += number;
    shouldClear = false;
    secondOperand = input.textContent;
}

function handleDecimal(decimal){
    if(input.textContent.includes(".") && !shouldClear){
        return
    }
    if(shouldClear){
        input.textContent = '0';
        shouldClear = false;
    }
    input.textContent += decimal;
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
    shouldClear = true;
    return;
}

function operate(c, a, b){
    if(a== '' || b== '')
        ans = input.textContent;
    if (c === "+")
        ans = (+a)+(+b);
    if (c === "-")
        ans = (+a)-(+b);
    if (c === "*")
        ans = (+a)*(+b);
    if (c === "/"){
        if (b == 0){
            b = 1;
            alert("can not divide by 0");
        }
        ans = (+a)/(+b);
    }
    input.textContent = Number(Math.round((+ans)+'e3')+'e-3');
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
    if(input.textContent.length == 1){
        input.textContent = "0"
        return
    }
    if(shouldClear){
        input.textContent = "0"
        return;
    }
    input.textContent = input.textContent.toString().slice(0,-1);
    secondOperand = input.textContent;
    if(input.textContent == "0")
        shouldClear = true;
}
