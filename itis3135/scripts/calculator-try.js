//global variables for storing values and an operator
let value1 = undefined;
let value2 = undefined;
let operator = undefined;

//take two values and combine them using the given operator
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

//gets state of the calculator: State 0 = when no values have been stored yet, State 1 = when a value and operator has been stored
function getState() {
    if (value1 == undefined && operator == undefined && value2 == undefined) {
        return 0;
    } else if (value1 != undefined && operator != undefined && value2 == undefined) {
        return 1;
    } else {
        return -1;
    }
}

//clears the display and global variables
function clearDisplay() {
    document.getElementById("calculator-display").innerText = "0";
    value1 = undefined;
    operator = undefined;
    value2 = undefined;
}

//takes an input from the calculator buttons and updates the display accordingly
function calculatorInput(input) {
    let currentDisplay = document.getElementById("calculator-display").innerText;
    let empty = currentDisplay == "0" || currentDisplay == "+" || currentDisplay == "-" || currentDisplay == "*" || currentDisplay == "/" || currentDisplay == "Infinity" || currentDisplay == "-Infinity" || currentDisplay == "NaN";
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
            if (empty) { //logic for adding integers to the display
                document.getElementById("calculator-display").innerText = input;
            } else {
                document.getElementById("calculator-display").innerText += input;
            }
            break;
        case ".":
            if ((currentDisplay == "0" || !empty) && !currentDisplay.includes(".")) { //logic for adding decimals to the display
                document.getElementById("calculator-display").innerText += input;
            }
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            if (state == 0) { //store the first value and operator
                value1 = parseFloat(document.getElementById("calculator-display").innerText);
                operator = input;
                document.getElementById("calculator-display").innerText = input;
            } else if (state == 1 && (currentDisplay == "0" || !empty)) { //logic for chaining operations together. allows for 5+5+5+5=20
                value2 = parseFloat(document.getElementById("calculator-display").innerText);
                let temp = doCalculation(value1, operator, value2);
                clearDisplay();
                value1 = temp;
                operator = input;
                value2 = undefined;
                document.getElementById("calculator-display").innerText = input;
            } else if (state == 1 && (currentDisplay != "0" && empty)) { //prevent an operator from being passed as a number, substitutes 0 for value2
                value2 = 0;
                let temp = doCalculation(value1, operator, value2);
                clearDisplay();
                value1 = temp;
                operator = input;
                value2 = undefined;
                document.getElementById("calculator-display").innerText = input;
            } else { //in case of error
                alert("error with operator: " + input);
            }
            break;
        case "=":
            if (state == 1 && !empty) { //does the final calculation, and resets the global variables
                value2 = parseFloat(document.getElementById("calculator-display").innerText);
                let temp = doCalculation(value1, operator, value2);
                clearDisplay();
                document.getElementById("calculator-display").innerText = temp;
            } else if (state == 1 && empty) {//does the same thing except it prevents value2 from being left undefined
                value2 = 0;
                let temp = doCalculation(value1, operator, value2);
                clearDisplay();
                document.getElementById("calculator-display").innerText = temp;
            } else if (state != 0) { //in case of error
                alert("error with equals operator");
            }
            break;
    }
    return input;
}