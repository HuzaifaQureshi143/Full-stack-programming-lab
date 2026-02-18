// Function to perform the selected operation
function calculate() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operation = document.getElementById("operation").value;
    var resultEl = document.getElementById("result");

    // Check for empty inputs
    if (num1 === "" || num2 === "") {
        resultEl.innerHTML = "Error: Please enter both numbers.";
        return;
    }

    // Convert to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var result;

    // Perform operation using conditional statements
    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        // Prevent division by zero
        if (num2 === 0) {
            resultEl.innerHTML = "Error: Cannot divide by zero.";
            return;
        }
        result = num1 / num2;
    }

    // Bonus: change result text based on positive/negative value
    if (result > 0) {
        resultEl.innerHTML = "Result: " + result + " (Positive)";
    } else if (result < 0) {
        resultEl.innerHTML = "Result: " + result + " (Negative)";
    } else {
        resultEl.innerHTML = "Result: " + result + " (Zero)";
    }
}
