// Temperature conversion
var tempbtn = document.getElementById("temperature-btn");
tempbtn.addEventListener("click", temperature);

function temperature() {
    var celsius = document.getElementById("celsius").value;
    var far = (celsius * (9 / 5)) + 32;
    document.getElementById("fahrenheit").value = far;
}

// Weight conversion
var weighbtn = document.getElementById("weight-btn");
weighbtn.addEventListener("click", weight);

function weight() {
    var kilo = document.getElementById("kilo").value;
    var pound = kilo * 2.205;
    document.getElementById("pounds").value = pound;
}

// Distance conversion
var distancebtn = document.getElementById("distance-btn");
distancebtn.addEventListener("click", distance);

function distance() {
    var km = document.getElementById("km").value;
    var miles = km / 1.609; // more accurate formula
    document.getElementById("miles").value = miles;
}
