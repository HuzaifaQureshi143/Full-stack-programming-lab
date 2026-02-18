// Bonus: Display browser info using BOM on page load
window.onload = function () {
    var info = document.getElementById("browserInfo");
    info.innerHTML =
        "<strong>Browser Info (BOM):</strong><br>" +
        "Window Width: " + window.innerWidth + "px<br>" +
        "Window Height: " + window.innerHeight + "px<br>" +
        "Browser: " + navigator.appName + "<br>" +
        "User Agent: " + navigator.userAgent;
};

// Function to create a single color box
function createBox(color) {
    if (color === "") return; // skip empty inputs

    var box = document.createElement("div");
    box.style.backgroundColor = color;
    box.style.width = "150px";
    box.style.height = "150px";
    box.style.display = "inline-block";
    box.style.margin = "10px";
    box.style.border = "2px solid black";
    box.innerHTML = "<p style='text-align:center;'>" + color + "</p>";

    document.getElementById("boxContainer").appendChild(box);
}

// Function to read all 3 inputs and add color boxes
function addColors() {
    var color1 = document.getElementById("color1").value.trim();
    var color2 = document.getElementById("color2").value.trim();
    var color3 = document.getElementById("color3").value.trim();

    var colors = [color1, color2, color3];

    // Loop through all 3 colors and create a box for each
    for (var i = 0; i < colors.length; i++) {
        createBox(colors[i]);
    }
}

// Function to clear all color boxes
function clearAll() {
    var container = document.getElementById("boxContainer");
    container.innerHTML = "";
}
