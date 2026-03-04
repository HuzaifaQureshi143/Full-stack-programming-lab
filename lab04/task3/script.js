$(document).ready(function () {
    function validateUsername() {
        let val = $('#username').val().trim();
        if (val.length < 3) {
            $('#username').addClass('error-input').removeClass('success-input');
            $('#usernameError').show();
            return false;
        } else {
            $('#username').removeClass('error-input').addClass('success-input');
            $('#usernameError').hide();
            return true;
        }
    }

    function validateEmail() {
        let val = $('#email').val().trim();
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(val)) {
            $('#email').addClass('error-input').removeClass('success-input');
            $('#emailError').show();
            return false;
        } else {
            $('#email').removeClass('error-input').addClass('success-input');
            $('#emailError').hide();
            return true;
        }
    }

    // Validate on blur
    $('#username').blur(validateUsername);
    $('#email').blur(validateEmail);

    // Form submission
    $('#myForm').submit(function (e) {
        e.preventDefault(); // Prevent page refresh

        // Trigger validation
        let isUserValid = validateUsername();
        let isEmailValid = validateEmail();

        if (isUserValid && isEmailValid) {
            $('#successMessage').fadeIn().delay(3000).fadeOut();
            $('#myForm')[0].reset();
            $('input').removeClass('success-input error-input');
            $('.error-msg').hide();
        }
    });
});
