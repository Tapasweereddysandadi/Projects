function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskDate = document.getElementById("taskDate");

    let taskText = taskInput.value.trim();
    let dateText = taskDate.value.trim();

    // Check task
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Check date
    if (dateText === "") {
        alert("Please enter the date in DD/MM/YYYY format!");
        return;
    }

    // Create list item
    let li = document.createElement("li");

    // Task content
    let taskContent = document.createElement("div");
    taskContent.className = "task-content";

    let taskName = document.createElement("span");
    taskName.className = "task-name";
    taskName.textContent = taskText;

    let taskDateDisplay = document.createElement("span");
    taskDateDisplay.className = "task-date";
    taskDateDisplay.textContent = "Date: " + dateText;

    taskContent.appendChild(taskName);
    taskContent.appendChild(taskDateDisplay);

    // Complete button
    let completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.className = "complete-btn";

    completeButton.onclick = function () {
        li.classList.toggle("completed");

        if (li.classList.contains("completed")) {
            completeButton.textContent = "Completed";
        } else {
            completeButton.textContent = "Complete";
        }
    };

    // Delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = function () {
        li.remove();
    };

    // Add everything to list
    li.appendChild(taskContent);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    // Clear input boxes
    taskInput.value = "";
    taskDate.value = "";
}
