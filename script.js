const operationSymbols = ['CE', '+', '-', '*', '/', '=', ];
const numPadSymbols = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.']
const operationsContainer = document.querySelector('.operation-btns');
const numPadContainer = document.querySelector(".num-btns");
const screenDiv = document.querySelector('.screen');
screenDiv.textContent = 0;
let lastNum = null;
let lastOperator = null;

createElementsFromArrayInDiv(operationSymbols, operationsContainer, "operation-btn");
createElementsFromArrayInDiv(numPadSymbols, numPadContainer, "num-btn");

const numPadButtons = [...document.querySelectorAll('.num-btn')];
numPadButtons.forEach(num => num.addEventListener('click', addNumberToScreen))

const operationButtons = [...document.querySelectorAll('.operation-btn')];
operationButtons.forEach(op => op.addEventListener('click', operateOnNumber))

function createElementsFromArrayInDiv(array, div, className) {
    for(item of array) {
        let createdDiv = document.createElement("div");
        createdDiv.textContent = item;
        createdDiv.classList.add(className);
        div.appendChild(createdDiv);
    }
}

function isEqualsOrClear(str){
    return str === '=' || str === 'CE';
}

function operateOnNumber(e) {
    // if(isEqualsOrClear(this.textContent)) return;
    if(this.textContent === '='){
        if(lastNum && lastOperator){
            const result = operate(lastOperator, lastNum, +screenDiv.textContent)
            lastNum = result;
            lastOperator = null;
            screenDiv.textContent = result;
            return;
        }
    }
    lastNum = +screenDiv.textContent;
    lastOperator = this.textContent;
    screenDiv.textContent = ''
}

function addNumberToScreen(e) {
    screenDiv.textContent = formatContentForScreen(this.textContent);
}

function formatContentForScreen(content) {
    if(content === '.' && screenDiv.textContent.includes('.')) return screenDiv.textContent;
    if(screenDiv.textContent == 0) return content;
    return screenDiv.textContent += content;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch(operator){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a,b);
    }
}