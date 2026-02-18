// Array of task IDs for looping
var taskIds = ["task1", "task2", "task3"];

// Function to mark a task as complete
function completeTask(id) {
    var taskDiv = document.getElementById(id);
    var input = taskDiv.querySelector("input");

    // Use a loop to apply completed formatting to all completed tasks
    // First mark this task's input
    input.setAttribute("data-completed", "true");

    // Loop through all tasks and apply strikethrough to completed ones
    for (var i = 0; i < taskIds.length; i++) {
        var div = document.getElementById(taskIds[i]);
        var inp = div.querySelector("input");
        if (inp.getAttribute("data-completed") === "true") {
            inp.style.textDecoration = "line-through";
            inp.style.fontStyle = "italic";
        }
    }
}

// Function to remove a task
function removeTask(id) {
    var taskDiv = document.getElementById(id);
    taskDiv.style.display = "none";
}
