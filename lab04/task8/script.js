$(document).ready(function () {
    const quizData = [
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"],
            answer: 0
        },
        {
            question: "Choose the correct HTML element for the largest heading:",
            options: ["heading", "h6", "h1", "head"],
            answer: 2
        },
        {
            question: "Which CSS property controls the text size?",
            options: ["text-style", "font-size", "text-size", "font-style"],
            answer: 1
        },
        {
            question: "Inside which HTML element do we put the JavaScript?",
            options: ["Javascript", "scripting", "js", "script"],
            answer: 3
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let selectedOptionIndex = null;

    function loadQuestion() {
        // Reset state for new question
        selectedOptionIndex = null;
        $('#nextBtn').prop('disabled', true);

        let q = quizData[currentQuestionIndex];

        // Hide container, update content, then fade back in
        $('#questionContainer').fadeOut(250, function () {
            $('#questionText').text((currentQuestionIndex + 1) + ". " + q.question);

            // Build options list
            let optionsHtml = '';
            q.options.forEach(function (opt, index) {
                // Using dummy data attribute to track index
                optionsHtml += `<li class="option-item" data-index="${index}">${opt}</li>`;
            });
            $('#optionsList').html(optionsHtml);

            // Update progress
            $('#currentQ').text(currentQuestionIndex + 1);

            if (currentQuestionIndex === quizData.length - 1) {
                $('#nextBtn').text("Finish Quiz");
            } else {
                $('#nextBtn').text("Next Question");
            }

            $(this).fadeIn(250);
        });
    }

    // Initialize Quiz
    $('#totalQ').text(quizData.length);
    $('#maxScore').text(quizData.length);
    loadQuestion();

    // Event delegation for options
    $('#optionsList').on('click', '.option-item', function () {
        // Remove selected class from all
        $('.option-item').removeClass('selected');

        // Add selected class to chosen option
        $(this).addClass('selected');

        // Save the index of selected option
        selectedOptionIndex = $(this).data('index');

        // Enable Next button
        $('#nextBtn').prop('disabled', false);
    });

    // Next/Finish Button functionality
    $('#nextBtn').click(function () {
        // Check answer
        if (selectedOptionIndex === quizData[currentQuestionIndex].answer) {
            score++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            // Load next question
            loadQuestion();
        } else {
            // End of quiz
            $('#quizContainer').slideUp(500, function () {
                $('#finalScore').text(score);
                $('#scoreContainer').slideDown(500);
            });
        }
    });

    // Restart Quiz functionality
    $('#restartBtn').click(function () {
        currentQuestionIndex = 0;
        score = 0;
        $('#scoreContainer').slideUp(400, function () {
            loadQuestion();
            $('#quizContainer').slideDown(500);
        });
    });
});
