let employees = ["Darth Vader", "Bender Bending Redriguez", "Pennywise the dancing clown", "Margo Martindale", "Michael Stevens", "Ted Templeton Jr.", "Spongebob Squarepants", "Bernie Sanders", "Norville Rogers"];
let salaries = [55000, 52500, 60000, 72500, 75000, 10, 65000, 52500, 42000];

function displayResults() {
    let max = salaries[0];
    for (let n = 1; n < salaries.length; n++) if (max < salaries[n]) max = salaries[n];
    
    let avg;
    let sum = 0.0;
    for (let n = 0; n < salaries.length; n++) sum += salaries[n];
    avg = sum / salaries.length;

    let employeeIndex = parseInt(document.getElementById("arrays-dropdown").value);

    let result = "<h3>Results:</h3><p>Average Salary: $" + avg + "</p><p>Highest Salary: $" + max + "</p><p>" + employees[employeeIndex] + "'s Salary: $" + salaries[employeeIndex] + "</p>";
    document.getElementById("results").innerHTML = result;
}

function displaySalary() {
    let result = "<br><table><thead><tr><th>Employee Name</th><th>Employee Salary</th></tr></thead><tbody>";
    for (let n = 0; n < employees.length; n++) {
        result += ("<tr><td>" + employees[n] + "</td><td>$" + salaries[n] + "</td></tr>");
    }
    result += "</tbody></table>";
    document.getElementById("results").innerHTML = result;
}

function addSalary() {
    let newEmployee = document.getElementById("employee").value;
    let newSalary = parseFloat(document.getElementById("salary").value).toFixed(2);

    if (newEmployee == "" && isNaN(newSalary)) {
        alert("Error: Invalid employee name and salary");
        document.getElementById("salary").value = "";
    } else if (newEmployee == "") {
        alert("Error: No employee name given");
    } else if (isNaN(newSalary)) {
        alert("Error: Given salary not a number");
        document.getElementById("salary").value = "";
    } else {
        document.getElementById("results").innerHTML = "<h3>New Employee Entry</h3><p>New Employee: " + newEmployee + "</p><p>Starting Salary: $" + newSalary + "</p";
        document.getElementById("arrays-dropdown").innerHTML += ("<option value='" + employees.length + "'>" + newEmployee + "</option>");
        employees[employees.length] = newEmployee;
        salaries[salaries.length] = parseFloat(newSalary);
        document.getElementById("salary").value = "";
        document.getElementById("employee").value = "";
    }

    moveCursor();
}

function moveCursor() {
    document.getElementById("employee").focus();
}
