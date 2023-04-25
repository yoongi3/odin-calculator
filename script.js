const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');

let prevNum;
let currNum;
let ans;
let prevBtn;
let operator;
let shouldClear;

function operate(c, a, b){
    if (c === "+"){
        ans = (+a)+(+b);
    }if (c === "-"){
        ans = (+a)-(+b);
    }if (c === "*"){
        ans = (+a)*(+b);
    }if (c === "/"){
        ans = (+a)/(+b);
    }
    console.log(ans)
    input.textContent = ans;
    prevNum = '';
    currNum = '';
    operator = '';
}

buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        handleButtons(button);
        console.log(button.classList+" "+ prevNum+" "+operator+" "+currNum+" "+ans)
    })
});

function handleButtons(button){
    if(button.classList.contains('number')){
        if(input.textContent){
            if(input.textContent[0].includes("0", 0) || shouldClear){
                input.textContent = '';
                shouldClear = false;
            }
        }
        input.textContent += button.textContent;
        currNum = input.textContent;
    }
    if(button.classList.contains('operator')){
        if(prevBtn == "operator"){
            operate(operator, prevNum, currNum);
            operator = button.textContent;
            prevNum = ans;
            prevBtn = "operator";
            shouldClear = true;
            return;
        }
        if(prevBtn == "equal"){
            operator = button.textContent;
            prevNum = input.textContent;
            input.textContent = "0";
            prevBtn = "operator";
            shouldClear = true;
            return;
        }
        else
        prevNum = currNum;
        currNum = ''
        operator = button.textContent;
        input.textContent = "0";
        prevBtn = "operator";
    }
    if(button.classList.contains('equal')){
        prevBtn = "equal";
        operate(operator, prevNum, currNum);
    }
    if(button.classList.contains('clear')){
        prevBtn = "clear";
        input.textContent = "0";
        ans = '';
        currNum = '';
        prevNum = '';
        operator = '';
    }
    // backspace
    // decimal
    // equal

}

    