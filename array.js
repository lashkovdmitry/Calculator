"use strict"

const output = document.querySelector('.result');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const ac = document.querySelector('#reset');
const equal = document.querySelector('#equal');

let res = 0;
let first = 0;
let second = 0;
let choseOperation = '';

let isFirstNbr = true;

function showResult() {
    if (isFirstNbr) {
        output.textContent = first;
    } else {
        output.textContent = second;
    }
};

numbers.forEach(number => {
    const numberValue = number.textContent;

    number.addEventListener('click', function() {
        if (isFirstNbr) {
            first = first * 10 + Number(numberValue);
        } else {
            second = second * 10 + Number(numberValue);
        }
        
        showResult();
    });
});

operators.forEach(operator => {
    const operatorValue = operator.textContent;

    operator.addEventListener('click', function() {
        isFirstNbr = false;
        choseOperation = operatorValue;
    });
});

equal.addEventListener('click', function() {
    if (choseOperation === '/') {
        res = first / second;
    } else if (choseOperation === '*') {
        res = first * second;
    } else if (choseOperation === '-') {
        res = first - second;
    } else if (choseOperation === '+') {
        res = first + second;
    }

    output.textContent = res;

    first = res;
    second = 0;
});

ac.addEventListener('click', function() {
    res = 0;
    first = 0;
    second = 0;
    isFirstNbr = true;
    showResult();
});