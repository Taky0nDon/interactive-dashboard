# Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 at Wake Tech. It is meant to demonstrate interactive JavaScript features.

## TODO: Future Enhancements

- [x] Add a metric conversion tool.
- [x] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [X] Add a weekly task goal calculator.

## Weekly Task Goals

The user supplies a daily task goal as well as a weekly bonus. The total weekly tasks are calculated by adding the weekly bonus to the result of multiplying the daily tasks by 5. Then the results are displayed beneath the submit button after the user cicks it.

## Imperial/Metric Converter

This simple tools allow you to convert inches, feet, yards, miles, centimeters, meters, and kilometers. Any combination of units is supported. 

### Logic and Pseudocode

```
BEGIN Metric Conversion
	INPUT initial_value
	INPUT initial_unit
	INPUT final_unit
	// STEP ONE: convert initial value to meters
	IF initial_unit is "in"
		SET meters to (initial_value * 2.54 * 0.01)
	IF initial_unit is "ft"
		SET meters to (initial_value * 30.48 * 0.01)
	IF initial_unit is "yd"
		SET meters to (initial_value * 0.91)
	IF initial_unit is "mi"
		SET meters to (initial_value * 1.61 * 1000)
	IF initial_unit is "cm"
		SET meters to (initial_value * 0.01)
	IF initial_unit is "m"
		SET meters to initial_value
	IF initial_unit is "km"
		SET meters to (initial_value * 1000)
	// STEP TWO: Convert meters to final unit
	IF final_unit is "in"
		SET final_value to (meters * 100 * 0.39)
	IF final_unit is "ft"
		SET final_value to (meters * 100 * 0.0328)
	IF final_unit is "yd"
		SET final_value to (meters * 1.09)
	IF final_unit is "mi"
		SET final_value to (meters * 0.001 * 0.62)
	IF final_unit is "cm"
		SET final_value to (meters * 100)
	IF final_unit is "m"
		SET final_value to meters
	IF final_unit is "km"
		SET final_value to (meters * 0.001)
	SET message to initial_value + " " + initial_unit + " is " + final_value + " " + final_unit
	OUTPUT message
END
```

## Magic Eight Ball

Are you tired of having to think? Don't reinvent the wheel with a large language model. Instead, give this classic a try. Ask your question, and hold the mouse button down on the 8 ball. You'll know it's working when you see the ball begin to shake. When your ready, release the mouse button and your answer will appear. If you don't like the answer you get, just click "Ask another question" and try again.

### Implementation Details

Answers are randomly chosen from an array of strings. Requests for answers to add to the pool can be sent to `magic8ballrequests@proton.me`.

## Task List

Created field for user to create a list of weekly tasks. User submitted tasks are appended to an unordered list and stored in an array.

## Updated Task List (object based)

User tasks are now stored in an array of objects containing the following properties:
1. id (integer)
2. name (string)
3. priority (string) ("low", "medium", "high")
4. isImportant (bool)
5. isCompleted (bool)
6. domNode (references the node containing the task in the DOM)

Tasks are still arranged as elements of an unordered list. Each task has 3 buttons: remove, edit, and complete.
Task objects are stored in the `myTasks` array.

### Task priority

Important tasks are <span style="color: red">red</span>.
High priority tasks are <u>underlined</u>.
Medium priority tasks are *italicized*.

### Adding tasks

Enter your task. Choose priority and mark if task is importance. Click add task to add it to the list. Adding tasks will print the contents of the `myTasks` array to the console.

### Completing tasks

Tasks can be toggled complete by clicking the check button. Completed tasks are indicated via strike-through text. Clicking the check button again on a ~~completed~~ task will remove the strike-through. Completing a task will cause the contents of the `myTasks` array to be printed to the console.

### Removing tasks

Individual tasks can be removed from the list by clicking the X to the right of the task. Removing a task will cause the contents of the `myTasks` array to be printed to the console.

### Editing tasks

Clicking the pencil icon will cause a prompt to appear. Enter the new task into the prompt to update it. Completed tasks cannot be updated. Editing a task will cause the contents of the `myTasks` array to be printed to the console.

### Clearing all tasks

Clicking the "Clear Tasks" button will remove all tasks from the DOM and empty the myTasks array. Clearing tasks will cause the contents of the `myTasks` array to be printed to the console.