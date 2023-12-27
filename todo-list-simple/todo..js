function addTask() {
    var taskInput = document.getElementById("newTask");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    var tasksList = document.getElementById("tasks");

    var li = document.createElement("li");
    li.innerHTML = '<span>' + taskText + '</span> <button onclick="removeTask(this)">Remove</button>';
    tasksList.appendChild(li);

    taskInput.value = ""; function addTask() {
    var taskInput = document.getElementById("newTask");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    var tasksList = document.getElementById("tasks");

    var li = document.createElement("li");
    li.innerHTML = '<span>' + taskText + '</span> <button onclick="removeTask(this)">Remove</button>';
    tasksList.appendChild(li);

    taskInput.value = "";
}

function removeTask(button) {
    var li = button.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
}
}

function removeTask(button){
//get the the parent li of btn
var li = button.parentNode;
    
//get the parent ul of the li
var ul = li.parentNode;
    
// remove the li from the ul
ul.removeChild(li);
}