let myTasks = [];

function weeklyGoal(userName, dailyGoal, bonusTasks) {
	// Create local variables
	let output, weeklyGoal, totalGoal;

	// Calculate weekly goal
	weeklyGoal = dailyGoal * 5; 
	// Calculate total goal
	totalGoal = weeklyGoal + bonusTasks; 
	// Create string to be displayed
	output = "Checking status for: " + userName + "<br>" +
    "User: " + userName + "<br>" + "Total Weekly Goal: "  + totalGoal
	// Display string in appropriate element
	document.getElementById("goal-message").innerHTML = output;
}

// Create event handler
document.getElementById("goal-btn").addEventListener(
	"click",
	function (event){
		// Create local variables
		let userName, dailyGoal, bonusTasks;
		// Prevent form from submitting so the page doesn't refresh
		event.preventDefault();
		// Get values from forms
		userName = document.getElementById("name").value;
		dailyGoal = document.getElementById("daily-goal").valueAsNumber;
		bonusTasks = document.getElementById("weekly-bonus").valueAsNumber;
		// Call function with form values as arguments
		weeklyGoal(userName, dailyGoal, bonusTasks);
	},
	// Makes sure bubbling phase is used for event detection
	false
)

// Create event handle for adding tasks
document.getElementById("add-task").addEventListener(
	"click",
	function (event){
		event.preventDefault();
		// Declare variable to hold unordered list element
		let unorderedListElement;
		// Get elements to be manipulated
		const addTaskButton = document.getElementById("add-task");
		const taskListElement = document.getElementById("task-list");
		// Check whether the unordered list already exists. If it does, use it. If not, create it.
		if (document.getElementById("user-tasks") !== null) {
			unorderedListElement = document.getElementById("user-tasks");
		} else {
			unorderedListElement = document.createElement("ul");
			unorderedListElement.setAttribute("id", "user-tasks");
		}
		// Append unordered list to task list element
		taskListElement.appendChild(unorderedListElement);
		// Capture data from input field
		const taskToAdd = document.getElementById("task-name").value;
		// Clear text from input field once captured
		document.getElementById("task-name").value = "";
		// Create text element containing captured task
		const taskText = document.createTextNode(taskToAdd);
		// Create new element to hold captured task
		const newTaskElement = document.createElement("li");
		// Append task text to newly created list element
		newTaskElement.appendChild(taskText);
		// Append task list item to unordered list
		unorderedListElement.appendChild(newTaskElement);
		// Append add task button to its parent to keep it at the bottom
		unorderedListElement.parentElement.appendChild(addTaskButton);
	}
)

// Prevent enter key from submitting form
const inputFields = document.getElementsByTagName("input")
for (field of inputFields) {
	if (field.id === "question") continue;
	field.addEventListener("keydown", function(event) {
		if (event.key === "Enter") {
			event.preventDefault();
			window.alert("Slow down and click the button!")
		}
	})
}