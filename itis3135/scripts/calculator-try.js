let value1 = undefined;
let value2 = undefined;
let operator = undefined;

function doCalculation(num1, op, num2) {
    let result = 0;
    switch (op) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    return result;
}

function getState() {
    if (value1 == undefined && operator == undefined && value2 == undefined) {
        return 0;
    } else if (value1 != undefined && operator != undefined && value2 == undefined) {
        return 1;
    } else {
        return -1;
    }
}

function clearDisplay() {
    document.getElementById("calculator-display").innerText = "0";
    value1 = undefined;
    operator = undefined;
    value2 = undefined;
}

function calculatorInput(input) {
    let currentDisplay = document.getElementById("calculator-display").innerText;
    let empty = currentDisplay == "0" || currentDisplay == "+" || currentDisplay == "-" || currentDisplay == "*" || currentDisplay == "/" || currentDisplay == "Infinity" || currentDisplay == "NaN";
    let state = getState();
    switch (input) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            if (empty) {
                document.getElementById("calculator-display").innerText = input;
            } else {
                document.getElementById("calculator-display").innerText += input;
            }
            break;
        case ".":
            if ((currentDisplay == "0" || !empty) && !currentDisplay.includes(".")) {
                document.getElementById("calculator-display").innerText += input;
            }
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            if (state == 0) {
                value1 = parseFloat(document.getElementById("calculator-display").innerText);
                operator = input;
                document.getElementById("calculator-display").innerText = input;
            } else if (state == 1 && (currentDisplay == "0" || !empty)) {
                value2 = parseFloat(document.getElementById("calculator-display").innerText);
                let temp = doCalculation(value1, operator, value2);
                clearDisplay();
                value1 = temp;
                operator = input;
                value2 = undefined;
                document.getElementById("calculator-display").innerText = input;
            } else if (state == 1 && (currentDisplay != "0" && empty)) {
                value2 = 0;
                let temp = doCalculation(value1, operator, value2);
                clearDisplay();
                value1 = temp;
                operator = input;
                value2 = undefined;
                document.getElementById("calculator-display").innerText = input;
            } else {
                alert("error with operator: " + input);
            }
            break;
        case "=":
            if (state == 1 && !empty) {
                value2 = parseFloat(document.getElementById("calculator-display").innerText);
                let temp = doCalculation(value1, operator, value2);
                clearDisplay();
                document.getElementById("calculator-display").innerText = temp;
            } else if (state == 1 && empty) {
                value2 = 0;
                let temp = doCalculation(value1, operator, value2);
                clearDisplay();
                document.getElementById("calculator-display").innerText = temp;
            } else if (state != 0) {
                alert("error with equals operator");
            }
            break;
    }
    return input;
}