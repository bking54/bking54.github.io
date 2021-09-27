const companyName = "Blue Kangaroo Enterprises";

let getDate = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();
    return currentMonth + "/" + currentDay + "/" + currentYear;
}

let getTime = () => {
    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    return currentHour + ":" + currentMinute;
}


let currentDate = getDate();
let currentTime = getTime();
let user = prompt("What is your name?");
let reaction = prompt("How are you today?");
let response = "Welcome to a webpage designed by Blue Kangaroo Enterprises, " + user +  "! Today is " + currentDate + " and the time is " 
    + currentTime + ". We are glad that you are " + reaction + " today.";


function displayResponse() {
    document.getElementById("script-output").innerHTML = response;
}

function buttonClick() {
    alert(response);
    
}

function rectangleArea() {
    let x = prompt("How long is the short side?");
    let y = prompt("How long is the long side?");
    let product = x * y;
    alert(x + " x " + y + " = " + product);
}

function checkNumber() {
    let x = prompt("Which number would you like to check?");
    let result = x % 3;
    if (result == 0) {
        alert(x + " is divisble by 3.");
    } else {
        alert(x + " is NOT divisble by 3.");
    }
}

function findAverage() {
    let x = prompt("What is the first number?");
    let y = prompt("What is the second number?");
    x = parseFloat(x);
    y = parseFloat(y);
    let average = (x + y) / 2;
    alert("The average of " + x + " and " + y + " is " + average + ".");
}

function displayRandomNumber() {
    let max = prompt("Enter a maximum value for the random number.");
    max = parseFloat(max);
    let random = Math.floor(Math.random() * max);
    alert("The number chosen was " + random);
}

function complementUser() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            alert("Looking good, " + user + "!");
            break;
        case 1:
            alert("I hope you had a great day, " + user + "!");
            break;
        case 2:
            alert("You're so cool, " + user + "!");
            break;
    }
}

