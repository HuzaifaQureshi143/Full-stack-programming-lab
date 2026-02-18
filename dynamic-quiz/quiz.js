// Correct answers stored in separate variables
var answer1 = "A";
var answer2 = "C";
var answer3 = "B";
var answer4 = "C";
var answer5 = "A";

// Helper: get selected radio value
function getSelected(name) {
  var radios = document.getElementsByName(name);
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) return radios[i].value;
  }
  return null;
}

// Separate check function for each question
function checkAnswer1() {
  var sel = getSelected("q1");
  if (!sel) { document.getElementById("f1").innerHTML = "Please select an answer."; return 0; }
  document.getElementById("f1").innerHTML = (sel === answer1) ? "Correct!" : "Incorrect. Answer: HyperText Markup Language.";
  return sel === answer1 ? 1 : 0;
}

function checkAnswer2() {
  var sel = getSelected("q2");
  if (!sel) { document.getElementById("f2").innerHTML = "Please select an answer."; return 0; }
  document.getElementById("f2").innerHTML = (sel === answer2) ? "Correct!" : "Incorrect. Answer: CSS.";
  return sel === answer2 ? 1 : 0;
}

function checkAnswer3() {
  var sel = getSelected("q3");
  if (!sel) { document.getElementById("f3").innerHTML = "Please select an answer."; return 0; }
  document.getElementById("f3").innerHTML = (sel === answer3) ? "Correct!" : "Incorrect. Answer: //";
  return sel === answer3 ? 1 : 0;
}

function checkAnswer4() {
  var sel = getSelected("q4");
  if (!sel) { document.getElementById("f4").innerHTML = "Please select an answer."; return 0; }
  document.getElementById("f4").innerHTML = (sel === answer4) ? "Correct!" : "Incorrect. Answer: <a>";
  return sel === answer4 ? 1 : 0;
}

function checkAnswer5() {
  var sel = getSelected("q5");
  if (!sel) { document.getElementById("f5").innerHTML = "Please select an answer."; return 0; }
  document.getElementById("f5").innerHTML = (sel === answer5) ? "Correct!" : "Incorrect. Answer: Document Object Model.";
  return sel === answer5 ? 1 : 0;
}

// Calculate total score
function calculateScore(scores) {
  var total = 0;
  for (var i = 0; i < scores.length; i++) total += scores[i];
  return total;
}

// Submit and display result
function submitQuiz() {
  var scores = [checkAnswer1(), checkAnswer2(), checkAnswer3(), checkAnswer4(), checkAnswer5()];
  var score = calculateScore(scores);
  var total = scores.length;
  var msg;

  if (score >= 4) {
    msg = "Excellent!";
  } else if (score >= 2) {
    msg = "Good!";
  } else {
    msg = "Try Again!";
  }

  document.getElementById("result").innerHTML = "Score: " + score + "/" + total + " — " + msg;
}

// Reset quiz
function resetQuiz() {
  var radios = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < radios.length; i++) radios[i].checked = false;
  for (var q = 1; q <= 5; q++) document.getElementById("f" + q).innerHTML = "";
  document.getElementById("result").innerHTML = "";
}
