let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let shouldResetScreen = false

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.getElementById('equalsBtn')
const clearButton = document.getElementById('clearBtn')
const deleteButton = document.getElementById('deleteBtn')
const pointButton = document.getElementById('pointBtn')
const lastOperationScreen = document.getElementById('lastOperationScreen')
const currentOperationScreen = document.getElementById('currentOperationScreen')

function addNumber(number) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen) {
        resetScreen();
        currentOperationScreen.textContent += number;
    }
};
  
function resetScreen() {
    currentOperationScreen.textContent = '';
    shouldResetScreen = false;
};

function clear() {
    currentOperationScreen.textContent = '0';
    lastOperationScreen.textContent = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
};
  
function addPoint() {
    if (shouldResetScreen) {
        resetScreen();
    }
    if (currentOperationScreen.textContent === '') {
        currentOperationScreen.textContent = '0';
    }
    if (currentOperationScreen.textContent.includes('.')) {
        return currentOperationScreen.textContent += '.';
    }
};

function deleteNumber() {
    currentOperationScreen.textContent = currentOperationScreen.textContent
        .toString()
        .slice(0, -1)
};
  
function setOperation(operator) {
    if (currentOperation !== null) {
        evaluate();
    };
    
    firstOperand = currentOperationScreen.textContent;
    currentOperation = operator;
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`;
    shouldResetScreen = true;
};

  
function add(a, b) {
    return a + b;
};

function substract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch (operator) {
      case '+':
        return add(a, b);
      case '-':
        return subtract(a, b);
      case 'x':
        return multiply(a, b);
      case '÷':
        if (b === 0) {
            return null
        } else return divide(a, b);
      default:
        return null;
    }
};