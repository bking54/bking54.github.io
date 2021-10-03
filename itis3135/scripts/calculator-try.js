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

function calculatorInput(input) {
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
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            break;
        case "=":
            break;
    }
    return input;
}