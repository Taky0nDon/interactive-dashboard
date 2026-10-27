// Create empty array to hold task objects
let myTasks = [];

// SVG data for task icons
const completeTaskSVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 36" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#77B255" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"/><path fill="#FFF" d="M29.28 6.362a2.502 2.502 0 0 0-3.458.736L14.936 23.877l-5.029-4.65a2.5 2.5 0 1 0-3.394 3.671l7.209 6.666c.48.445 1.09.665 1.696.665c.673 0 1.534-.282 2.099-1.139c.332-.506 12.5-19.27 12.5-19.27a2.5 2.5 0 0 0-.737-3.458z"/></svg>`;
const editTaskSVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g> </g> </svg>`
const removeTaskSVG = `<svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <desc>Created with Sketch.</desc> <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1"> <stop stop-color="#FC4343" offset="0%"> </stop> <stop stop-color="#F82020" offset="100%"> </stop> </linearGradient> </defs> <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-868.000000, -1910.000000)" fill="url(#linearGradient-1)" fill-rule="nonzero"> <g id="4" transform="translate(50.000000, 1871.000000)"> <path d="M821.426657,39.5856848 L830.000001,48.1592624 L838.573343,39.5856848 C839.288374,38.8706535 840.421422,38.8040611 841.267835,39.4653242 L841.414315,39.5987208 C842.195228,40.3796338 842.195228,41.645744 841.414306,42.4266667 L832.840738,51 L841.414315,59.5733429 C842.129347,60.2883742 842.195939,61.4214224 841.534676,62.2678347 L841.401279,62.4143152 C840.620366,63.1952283 839.354256,63.1952283 838.573333,62.4143055 L830.000001,53.8407376 L821.426657,62.4143152 C820.711626,63.1293465 819.578578,63.1959389 818.732165,62.5346758 L818.585685,62.4012792 C817.804772,61.6203662 817.804772,60.354256 818.585694,59.5733333 L827.159262,51 L818.585685,42.4266571 C817.870653,41.7116258 817.804061,40.5785776 818.465324,39.7321653 L818.598721,39.5856848 C819.379634,38.8047717 820.645744,38.8047717 821.426657,39.5856848 Z M820.028674,61.999873 C820.023346,61.9999577 820.018018,62 820.012689,62 Z M820.161408,61.9889406 L820.117602,61.9945129 L820.117602,61.9945129 C820.132128,61.9929912 820.146788,61.9911282 820.161408,61.9889406 Z M819.865274,61.9891349 L819.883098,61.9916147 C819.877051,61.9908286 819.87101,61.9899872 819.864975,61.9890905 L819.865274,61.9891349 Z M819.739652,61.9621771 L819.755271,61.9664589 C819.749879,61.9650278 819.744498,61.9635509 819.739126,61.9620283 L819.739652,61.9621771 Z M820.288411,61.9614133 L820.234515,61.9752112 L820.234515,61.9752112 C820.252527,61.971132 820.270527,61.9665268 820.288411,61.9614133 Z M820.401572,61.921544 L820.359957,61.9380009 L820.359957,61.9380009 C820.373809,61.9328834 820.387743,61.9273763 820.401572,61.921544 Z M819.623655,61.9214803 C819.628579,61.923546 819.626191,61.9225499 819.623806,61.921544 L819.623655,61.9214803 Z M819.506361,61.8625673 L819.400002,61.7903682 C819.444408,61.8248958 819.491056,61.8551582 819.539393,61.8811554 L819.506361,61.8625673 L819.506361,61.8625673 Z M820.51858,61.8628242 L820.486378,61.8809439 L820.486378,61.8809439 C820.496939,61.8752641 820.507806,61.8691536 820.51858,61.8628242 Z M840.881155,61.4606074 L840.862567,61.4936392 L840.862567,61.4936392 L840.790368,61.5999978 C840.824896,61.555592 840.855158,61.5089438 840.881155,61.4606074 Z M840.936494,61.3386283 L840.92148,61.3763453 L840.92148,61.3763453 C840.926791,61.3637541 840.931774,61.3512293 840.936494,61.3386283 Z M840.974777,61.2110466 L840.962177,61.2603479 L840.962177,61.2603479 C840.966711,61.2443555 840.97096,61.2277405 840.974777,61.2110466 Z M840.994445,61.0928727 L840.989135,61.1347261 L840.989135,61.1347261 C840.991174,61.1210064 840.992958,61.1069523 840.994445,61.0928727 Z M839.987311,40.9996529 L830,50.9872374 L820.012689,40.9996529 L819.999653,41.0126889 L829.987237,51 L819.999653,60.9873111 L820.012689,61.0003471 L830,51.0127626 L839.987311,61.0003471 L840.000347,60.9873111 L830.012763,51 L840.000347,41.0126889 L839.987311,40.9996529 Z M840.999873,60.9713258 L840.999916,61.0003193 L840.999916,61.0003193 C841.000041,60.9907089 841.000027,60.9810165 840.999873,60.9713258 Z M840.988941,60.8385918 L840.994513,60.8823981 L840.994513,60.8823981 C840.992991,60.8678719 840.991128,60.8532122 840.988941,60.8385918 Z M840.961413,60.7115886 L840.975211,60.7654853 L840.975211,60.7654853 C840.971132,60.7474727 840.966527,60.7294733 840.961413,60.7115886 Z M840.921544,60.5984278 L840.938001,60.6400431 L840.938001,60.6400431 C840.932883,60.6261908 840.927376,60.612257 840.921544,60.5984278 Z M840.862824,60.4814199 L840.880944,60.5136217 L840.880944,60.5136217 C840.875264,60.503061 840.869154,60.4921939 840.862824,60.4814199 Z M819.119056,41.4863783 L819.134164,41.5134185 C819.128903,41.5043379 819.123796,41.4951922 819.118845,41.4859852 L819.119056,41.4863783 Z M819.061999,41.3599569 L819.075467,41.3944079 C819.070734,41.3829341 819.066223,41.3713901 819.061935,41.3597825 L819.061999,41.3599569 Z M819.024789,41.2345147 L819.033541,41.2701072 C819.030397,41.2582611 819.027473,41.2463686 819.024771,41.234436 L819.024789,41.2345147 Z M819.005077,41.1136164 L819.008385,41.1422797 C819.007138,41.1326872 819.00603,41.12308 819.005061,41.1134615 L819.005077,41.1136164 Z M819.000419,40.9836733 L819,41.0126889 C819,41.002956 819.000141,40.993223 819.000424,40.9834934 L819.000419,40.9836733 Z M819.010865,40.8652739 L819.008385,40.8830981 C819.009171,40.8770511 819.010013,40.8710099 819.010909,40.8649753 L819.010865,40.8652739 Z M819.037823,40.7396521 L819.033541,40.7552707 C819.034972,40.7498794 819.036449,40.7444978 819.037972,40.7391264 L819.037823,40.7396521 Z M819.07852,40.6236547 C819.076454,40.6285788 819.07745,40.6261907 819.078456,40.6238057 L819.07852,40.6236547 Z M819.137433,40.5063608 L819.209632,40.4000022 C819.175104,40.444408 819.144842,40.4910562 819.118845,40.5393926 L819.137433,40.5063608 L819.137433,40.5063608 Z M820.485985,40.1188446 L820.519017,40.1374327 L820.519017,40.1374327 L820.625376,40.2096318 C820.58097,40.1751042 820.534322,40.1448418 820.485985,40.1188446 Z M839.513622,40.1190561 L839.486582,40.1341644 C839.495662,40.128903 839.504808,40.1237964 839.514015,40.1188446 L839.513622,40.1190561 Z M819.539,40.1190561 L819.511959,40.1341644 C819.52104,40.128903 819.530186,40.1237964 819.539393,40.1188446 L819.539,40.1190561 Z M840.460607,40.1188446 L840.493639,40.1374327 L840.493639,40.1374327 L840.599998,40.2096318 C840.555592,40.1751042 840.508944,40.1448418 840.460607,40.1188446 Z M819.661418,40.0634885 L819.63097,40.0754675 C819.641051,40.0713084 819.651187,40.0673212 819.661372,40.0635059 L819.661418,40.0634885 Z M820.359783,40.0619346 L820.401723,40.0785197 L820.401723,40.0785197 C820.387743,40.0726237 820.373809,40.0671166 820.359783,40.0619346 Z M839.640043,40.0619991 L839.605592,40.0754675 C839.617066,40.0707338 839.62861,40.0662229 839.640217,40.0619346 L839.640043,40.0619991 Z M840.338628,40.0635059 L840.376345,40.0785197 L840.376345,40.0785197 C840.363754,40.0732095 840.351229,40.0682261 840.338628,40.0635059 Z M819.789259,40.0251536 L819.755271,40.0335411 C819.766459,40.0305713 819.777688,40.0277987 819.788953,40.0252234 L819.789259,40.0251536 Z M820.234436,40.0247709 L820.288548,40.0386257 L820.288548,40.0386257 C820.270527,40.0334732 820.252527,40.028868 820.234436,40.0247709 Z M839.765485,40.0247888 L839.729893,40.0335411 C839.741739,40.0303966 839.753631,40.0274732 839.765564,40.0247709 L839.765485,40.0247888 Z M840.211047,40.0252234 L840.260348,40.0378229 L840.260348,40.0378229 C840.244356,40.0332892 840.227741,40.0290398 840.211047,40.0252234 Z M819.911404,40.0051132 L819.883098,40.0083853 C819.892432,40.0071719 819.901779,40.0060902 819.911137,40.0051402 L819.911404,40.0051132 Z M820.113462,40.0050614 L820.161342,40.0110494 L820.161342,40.0110494 C820.145468,40.0086743 820.12948,40.006675 820.113462,40.0050614 Z M839.886384,40.005077 L839.85772,40.0083853 C839.867313,40.0071382 839.87692,40.0060303 839.886538,40.0050614 L839.886384,40.005077 Z M840.088863,40.0051402 L840.134726,40.0108651 L840.134726,40.0108651 C840.119676,40.0086288 840.104284,40.0067057 840.088863,40.0051402 Z M839.95834,40.0004173 L840.016507,40.0004238 C839.997122,39.9998609 839.977725,39.9998588 839.95834,40.0004173 Z M819.983493,40.0004238 L820.04166,40.0004173 C820.022275,39.9998588 820.002878,39.9998609 819.983493,40.0004238 Z" id="cancel"> </path> </g> </g> </g> </g></svg>`;

// Create Task constructor function
function Task(name, priority, isImportant) {
	// give task ID of 1 if it's the first, otherwise give it an ID 1 higher than the ID of the last task in the list
	this.id = myTasks.length < 1 ? 1 : myTasks[myTasks.length - 1].id + 1;
	this.name = name;
	this.priority = priority;
	this.isImportant = isImportant;
	// Tasks are always incomplete when created, so isCompleted is set to false
	this.isCompleted = false;
	// Create the div element that will hold the task
	this.domNode = document.createElement("div");
	// Insert text node containing task name
	this.domNode.appendChild(document.createTextNode(this.name));
	// Apply styling based on importance and priority
	this.decorateTask();
	// Add task to myTasks array
	myTasks.push(this);
}

// Add methods to Task prototype
Task.prototype.completeTask = function() {
	this.isCompleted = true;
	console.log(JSON.stringify(myTasks));
}

Task.prototype.decorateTask = function() {
	// Apply styles based on importance / priority
	if (this.isImportant) {
		this.domNode.style.fontWeight = "bold";
		this.domNode.style.color = "red";
	}
	switch (this.priority) {
		case "high":
			this.domNode.style.textDecoration = "underline";
			break;
		case "medium":
			this.domNode.style.fontStyle = "italic";
	}
}

Task.prototype.markTaskComplete = function (event) {
	this.completeTask();
	// If the text already has a text-decoration rule, append to it. Otherwise, set it to line-through.
	this.domNode.style.textDecoration = this.domNode.style.textDecoration === "undefined" ?
		"line-through" : this.domNode.style.textDecoration + " line-through";
}

Task.prototype.removeTask = function (event) {
	// If there is only 1 task in the list, remove the entire ul element.
	if (myTasks.length < 2) {
		document.getElementById("user-tasks").remove();
	}
	// If there's more than 1 task in the list, remove the correct one
	else {
		this.domNode.parentElement.parentElement.remove()
	}
	// Remove task from myTasks array
	for (i=0; i < myTasks.length; i++) {
		if (this.id === myTasks[i].id) {
			myTasks.splice(i, 1);
			break;
		}
	}
	console.log(JSON.stringify(myTasks));
}

Task.prototype.editTask = function (event) {
	if (this.isCompleted) {
		alert("Completed tasks cannot be edited!");
	}
	else {
		const new_task = prompt("Edit task: ", this.name);
		this.domNode.innerText = new_task;
		console.log(JSON.stringify(myTasks));
	}
}

Task.prototype.uncompleteTask = function (event) {
	// Sets a completed task back to incomplete
	this.isCompleted = false;
	this.domNode.style.textDecoration = this.domNode.style.textDecoration.replace("line-through", "")
	console.log(JSON.stringify(myTasks));
}

function clearTasks(event) {
	// Remove all tasks from DOM and reset myTasks array
	if (myTasks.length > 0) {
		document.getElementById("user-tasks").remove();
		myTasks = [];
	}
	console.log(JSON.stringify(myTasks));
}

function addTask(event) {
	// Adds a new task to the list
	// Create new task object
	const task = new Task(
		document.getElementById("task-name").value,
		document.getElementById("task-priority").value,
		document.getElementById("is-important").checked
	)

	// Access div which will hold the list
	const taskListDiv = document.getElementById("task-list");
	// Create elements to hold task name, task buttons, and li
	const taskContainer = document.createElement("div");
	const newLi = document.createElement("li");
	const taskButtons = createTaskButtons(task);
	// Access ul element
	let unorderedListElement = document.getElementById("user-tasks");

	// Set class for taskContainer to reference it in CSS
	taskContainer.setAttribute("class", "task-li");

	// Create UL element if it does not exist
	if (!unorderedListElement) {
		unorderedListElement = document.createElement("ul");
		unorderedListElement.setAttribute("id", "user-tasks");
	}
	// Append unordered list to task list div
	taskListDiv.appendChild(unorderedListElement);
	// Append task text to newly created task container div
	taskContainer.appendChild(task.domNode);
	// Append remove/edit/complete buttons to task container div
	taskContainer.appendChild(taskButtons);
	// Append task container div to new li element
	newLi.appendChild(taskContainer);
	// Append new li to ul
	unorderedListElement.appendChild(newLi);
	// Append add task button to its parent to keep it at the bottom
	// event.currentTarget refers to element that triggered the event (add task button)
	unorderedListElement.parentElement.appendChild(event.currentTarget);
	console.log(JSON.stringify(myTasks));
}

function createTaskButtons(task) {
	// Create the remove, edit, and complete buttons and add their event listeners.
	const completeButton = document.createElement("div");
	const editButton = document.createElement("div");
	const removeButton = document.createElement("div")
	const taskButtonsContainer = document.createElement("div")

	taskButtonsContainer.setAttribute("id", "buttons-task-" + task.id);
	taskButtonsContainer.setAttribute("class", "task-buttons");

	completeButton.setAttribute("id", "complete-task-" + task.id);
	completeButton.setAttribute("title", "Click to mark task as complete");

	editButton.setAttribute("id", "edit-task-" + task.id);
	editButton.setAttribute("title", "Click to edit task");
	
	removeButton.setAttribute("id", "remove-task-" + task.id);
	removeButton.setAttribute("title", "Cick to delete task")

	removeButton.innerHTML = removeTaskSVG;
	editButton.innerHTML = editTaskSVG;
	completeButton.innerHTML = completeTaskSVG;

	taskButtonsContainer.appendChild(removeButton);
	taskButtonsContainer.appendChild(editButton);
	taskButtonsContainer.appendChild(completeButton);

	removeButton.addEventListener("click", function(event) {
		task.removeTask(event);
		}
	)

	editButton.addEventListener("click", function (event) {
		task.editTask(event);
		}
	)

	completeButton.addEventListener("click", function(event) {
		if (task.isCompleted) {
			task.uncompleteTask();
		}
		else {
			task.markTaskComplete(event);
		}
	})
	return taskButtonsContainer;
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
		// Get elements to be manipulated
		addTask(event);
		// Clear text from input field once captured
		document.getElementById("task-name").value = "";
	}
)

// Create event handler for clearing tasks
document.getElementById("clear-tasks").addEventListener("click", function (event) {
	event.preventDefault();
	clearTasks();
})

// Prevent enter key from submitting form
const inputFields = document.getElementsByTagName("input")
for (field of inputFields) {
	field.addEventListener("keydown", function(event) {
		if (event.key === "Enter") {
			event.preventDefault();
			window.alert("Slow down and click the button!")
		}
	})
}

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
