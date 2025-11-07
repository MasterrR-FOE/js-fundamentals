// Select HTML elements
let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  let taskText = taskInput.value.trim(); // Get and clean input

  if (taskText === "") {
    alert("Please enter a task!");
    return; // Stop if input is empty
  }

  // Create a new <li> element
  let newTask = document.createElement("li");
  newTask.textContent = taskText;

  // Add task to the list
  taskList.appendChild(newTask);

  // Clear the input field
  taskInput.value = "";
}

// Add event listener to the button
addTaskBtn.addEventListener("click", addTask);
