let addOp = document.getElementById("add");
let subOp = document.getElementById("subtract");
let mulOp = document.getElementById("multiply");
let divOp = document.getElementById("divide");
let equalsOp = document.getElementById("equals")
let deciOp = document.getElementById("decimal");

let delBtn = document.getElementById("delete");
let clrBtn = document.getElementById("clear")

let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");
let btn5 = document.getElementById("5");
let btn6 = document.getElementById("6");
let btn7 = document.getElementById("7");
let btn8 = document.getElementById("8");
let btn9 = document.getElementById("9");
let btn0 = document.getElementById("0");

let num1 = parseInt(btn1.innerText);
let num2 = parseInt(btn2.innerText);
let num3 = parseInt(btn3.innerText);
let num4 = parseInt(btn4.innerText);
let num5 = parseInt(btn5.innerText);
let num6 = parseInt(btn6.innerText);
let num7 = parseInt(btn7.innerText);
let num8 = parseInt(btn8.innerText);
let num9 = parseInt(btn9.innerText);
let num0 = parseInt(btn0.innerText);

let displayComp = document.getElementById("operations");
let solutionComp = document.getElementById("answer");

let currentNum = 0;
let opUsed;

// Delete and Clear Buttons
delBtn.addEventListener("click", function(){
    displayComp.textContent = displayComp.textContent.slice(0, -1);
})
clrBtn.addEventListener("click", function(){
    displayComp.innerHTML = '';
    solutionComp.innerHTML = '';
})

// Listen to which number is clicked
btn1.addEventListener("click", function(){
    displayComp.innerText += num1;
})
btn2.addEventListener("click", function(){
    displayComp.innerText += num2;
})
btn3.addEventListener("click", function(){
    displayComp.innerText += num3;
})
btn4.addEventListener("click", function(){
    displayComp.innerText += num4;
})
btn5.addEventListener("click", function(){
    displayComp.innerText += num5;
})
btn6.addEventListener("click", function(){
    displayComp.innerText += num6;
})
btn7.addEventListener("click", function(){
    displayComp.innerText += num7;
})
btn8.addEventListener("click", function(){
    displayComp.innerText += num8;
})
btn9.addEventListener("click", function(){
    displayComp.innerText += num9;
})
btn0.addEventListener("click", function(){
    displayComp.innerText += num0;
})


// Listen to which operation is clicked
addOp.addEventListener("click", function(){
    opUsed = '+';
    if ((displayComp.textContent.includes('+')) || (displayComp.textContent.includes('/')) || (displayComp.textContent.includes('*')) || (displayComp.textContent.includes('-')) || (displayComp.textContent === '')){
        return;
    } else ((displayComp.innerText += "+") && (opUsed = '+'));
})
subOp.addEventListener("click", function(){
    opUsed = '-';
    if ((displayComp.textContent.includes('-')) || (displayComp.textContent.includes('+')) || (displayComp.textContent.includes('/')) || (displayComp.textContent.includes('*')) || (displayComp.textContent === '')){
        return;
    } else ((displayComp.innerText += "-") && (opUsed = '-'));
})
mulOp.addEventListener("click", function(){
    opUsed = '*';
    if ((displayComp.textContent.includes('*')) || (displayComp.textContent.includes('+')) || (displayComp.textContent.includes('/')) || (displayComp.textContent.includes('-')) || (displayComp.textContent === '')){
        return;
    } else ((displayComp.innerText += "*") && (opUsed = '*'));
})
divOp.addEventListener("click", function(){
    if ((displayComp.textContent.includes('/')) || (displayComp.textContent.includes('+')) || (displayComp.textContent.includes('*')) || (displayComp.textContent.includes('-')) || (displayComp.textContent === '') ){
        return;
    } else ((displayComp.innerText += "/") && (opUsed = '/'));
})

deciOp.addEventListener("click", function(){
    displayComp.innerText += '.';
})

equalsOp.addEventListener("click", function(){
    let result;
    let finalEquation = displayComp.textContent;
    let operands = finalEquation.split(opUsed);
    let firstNum = parseFloat(operands[0]);
    let secondNum = parseFloat(operands[1]);

    if (currentNum === 0){
        switch(opUsed) {
            case '+':
                result = firstNum + secondNum;
                break;
            case '-':
                result = firstNum - secondNum;
                break;
            case '*':
                result = firstNum * secondNum;
                break;
            case '/':
                result = firstNum / secondNum;
                break;
        }
        solutionComp.innerText = parseInt(result).toFixed(2);
        displayComp.innerText = '';
        displayComp.innerHTML += parseInt(result).toFixed(2);
    }
})