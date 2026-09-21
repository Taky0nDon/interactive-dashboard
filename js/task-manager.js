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

