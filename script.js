const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');

let prevNum = 0;
let currNum = 0;
let ans = '0';
let operator = "";

function operate(c, a, b){
    if (c === "+"){
        ans = (+a)+(+b);
    }if (c === "-"){
        ans = a-b;
    }if (c === "*"){
        ans = a*b;
    }if (c === "/"){
        ans = a/b;
    }
    input.textContent = ans;
    prevNum = ans;
}

buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        handleButtons(button);
    })
});

function handleButtons(button){
    if(button.classList.contains('number')){
        if(input.textContent[0].includes("0", 0) || input.textContent.startsWith(ans)){
            input.textContent = '';
            ans = '0';
        }
        input.textContent += button.textContent;
        currNum = input.textContent;
        console.log("prev "+prevNum + operator + "curr "+currNum)
    }
    if(button.classList.contains('operator')){
        if(prevNum){
            operate(operator,prevNum,currNum)
            operator = button.textContent;
            return;
        }
        operator = button.textContent;
        prevNum = currNum;
        input.textContent = '0'
    }
    if(button.classList.contains('equal')){
        operate(operator, prevNum, currNum);
    }
    if(button.classList.contains('clear')){
        input.textContent = "0";
        currNum = '';
        prevNum = '';
        operator = '';
    }
    // backspace
    // decimal
    // equal

}

    