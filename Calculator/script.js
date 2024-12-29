// script.js
let display = document.getElementById('result');

function appendNumber(number) {
    if (display.value === "0") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    if (display.value === "0" && operator !== '.') {
        display.value = operator;
    } else {
        display.value += operator;
    }
}

function calculate() {
    try {
        display.value = eval(display.value.replace(/sin|cos|tan|log|sqrt/g, function(match) {
            return `Math.${match}`;
        }).replace(/\^/g, "**"));
    } catch (e) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '0';
}

function appendFunction(func) {
    if (display.value === "0") {
        display.value = func + '(';
    } else {
        display.value += func + '(';
    }
}
