var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers
};

function updateCalorie() {
    let num = $('calories').value;
    let day = -1;

    if ($('monday').checked) {
        day = 0;
    } else if ($('tuesday').checked) {
        day = 1;
    } else if ($('wednesday').checked) {
        day = 2;
    } else if ($('thursday').checked) {
        day = 3;
    } else if ($('friday').checked) {
        day = 4;
    } else if ($('saturday').checked) {
        day = 5;
    } else if ($('sunday').checked) {
        day = 6;
    }

    if (num != "") {
        num = parseInt(num);
        if (num == NaN) {
            alert('Enter a valid number');
        } else {
            calories[day] = num;
            let results = "Your updated calories are:\n";
            for (let n = 0; n < days.length; n++) {
                results += days[n] + " Calories Consumed: " + calories[n] + "\n";
            }
            alert(results);
            $('calories').value = "";
        }
    } else {
        alert('Enter a valid number');
    }

}

function showAverageCalories() {
    let sum = 0;
    let count = 0;
    for (let n = 0; n < calories.length; n++) {
        count++;
        sum += calories[n];
    }
    $('results').value = (sum / count);
}

function showMax() {
    let max = -1;
    let index = 0;
    for (let n = 0; n < days.length; n++) {
        if (max < calories[n]) {
            max = calories[n];
            index = n;
        }
    }
    $('showMax').innerText = "Your maximum consumed calorie is " + calories[index] + " on " + days[index];
}