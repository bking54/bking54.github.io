//prompts user for input when the page loads. if the input is not validated it will ask again.
function getUserEntry() {
    let response = prompt("Enter a number between -10 and 10");
    if (validateEntry(response) == -1) {
        alert("Invalid entry, please try again.");
        getUserEntry();
    } else {
        getShape(validateEntry(response));
    }
    
}

//takes an integer between 0 and 10 and alerts the user to the corresponding shape.
function getShape(sides) {
    switch (sides) {
        case 0:
            alert("A shape must have more than 0 sides");
            break;
        case 1:
            alert("A shape with 1 side is called a Monogon");
            break;
        case 2:
            alert("A shape with 2 sides is called a Bigon");
            break;
        case 3:
            alert("A shape with 3 sides is called a Triangle");
            break;
        case 4:
            alert("A shape with 4 sides is called a Quadrilateral");
            break;
        case 5:
            alert("A shape with 5 sides is called a Pentagon");
            break;
        case 6:
            alert("A shape with 6 sides is called a Hexagon");
            break;
        case 7:
            alert("A shape with 7 sides is called a Septagon");
            break;
        case 8:
            alert("A shape with 8 sides is called a Octagon");
            break;
        case 9:
            alert("A shape with 9 sides is called a Nonagon");
            break;
        case 10:
            alert("A shape with 10 sides is called a Decagon");
            break;
    }
}

//confirm input is a number, and that it is in range.
//returns number of sides or -1
function validateEntry(input) {
    if (isNaN(input)) {
        return -1;
    } else {
        let polygon = Math.abs(Math.round(parseFloat(input)));
        if (polygon > 10 || polygon < 0) polygon = -1;
        return polygon;
    }
}

//similar to getUserEntry, but this function is prompted by the button.
function buttonClick() {
    let response = document.getElementById("polygonbox").value;
    document.getElementById("polygonbox").value = "";
    if (validateEntry(response) == -1) {
        alert("Invalid entry, please try again.");
        getUserEntry();
    } else {
        getShape(validateEntry(response));
    }
}