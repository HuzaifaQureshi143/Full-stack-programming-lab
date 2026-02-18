// Separate validation function for Name
function validateName() {
    var name = document.getElementById("name").value.trim();
    var error = document.getElementById("nameError");
    if (name === "") {
        error.innerHTML = "* Name cannot be empty.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

// Separate validation function for Email
function validateEmail() {
    var email = document.getElementById("email").value.trim();
    var error = document.getElementById("emailError");
    if (email === "" || email.indexOf("@") === -1) {
        error.innerHTML = "* Email must contain '@'.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

// Separate validation function for Age
function validateAge() {
    var age = parseInt(document.getElementById("age").value);
    var error = document.getElementById("ageError");
    if (isNaN(age) || age < 18 || age > 60) {
        error.innerHTML = "* Age must be between 18 and 60.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

// Separate validation function for Password
function validatePassword() {
    var password = document.getElementById("password").value;
    var error = document.getElementById("passwordError");
    if (password.length < 6) {
        error.innerHTML = "* Password must be at least 6 characters.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

// Main submit function
function submitForm() {
    var isNameValid = validateName();
    var isEmailValid = validateEmail();
    var isAgeValid = validateAge();
    var isPasswordValid = validatePassword();

    var successMsg = document.getElementById("successMsg");

    // Only proceed if all validations pass
    if (isNameValid && isEmailValid && isAgeValid && isPasswordValid) {

        // Use confirm() before final submission
        var confirmed = confirm("Are you sure you want to submit the form?");

        if (confirmed) {
            var name = document.getElementById("name").value.trim();
            successMsg.innerHTML = "Registration successful! Welcome, " + name + "!";

            // Bonus: alert after successful submission
            alert("Thank you, " + name + "! Your registration is complete.");
        } else {
            successMsg.innerHTML = "Submission cancelled.";
        }

    } else {
        successMsg.innerHTML = "";
    }
}
