const operationSymbols = ['CE', '+', '-', '*', '/', '=', ];
const numPadSymbols = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.']
const operationsContainer = document.querySelector('.operation-btns');
const numPadContainer = document.querySelector(".num-btns");
const screenDiv = document.querySelector('.screen');

createElementsFromArrayInDiv(operationSymbols, operationsContainer, "operation-btn");
createElementsFromArrayInDiv(numPadSymbols, numPadContainer, "num-btn");

const numPadButtons = [...document.querySelectorAll('.num-btn')];
numPadButtons.forEach(num => num.addEventListener('click', addToScreen))

function createElementsFromArrayInDiv(array, div, className) {
    for(item of array) {
        let createdDiv = document.createElement("div");
        createdDiv.textContent = item;
        createdDiv.classList.add(className);
        div.appendChild(createdDiv);
    }
}

function addToScreen(e) {
    if(this.textContent === '.' && screenDiv.textContent.includes('.')) return;
    screenDiv.textContent += this.textContent;
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