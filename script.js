const operationSymbols = ['CE', '+', '-', '*', '/', '=', ];
const operationsContainer = document.querySelector('.operation-btns');
const numPadContainer = document.querySelector(".num-btns");

for (sym of operationSymbols) {
    let symDiv = document.createElement("div");
    symDiv.textContent = sym;
    symDiv.classList.add("operation-btn");
    operationsContainer.appendChild(symDiv);
    
}
for(let i = 9; i >= 0; i--) {
    let numDiv = document.createElement("div");
    numDiv.textContent = i;
    numDiv.classList.add("num-btn");
    numPadContainer.appendChild(numDiv);
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