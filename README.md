# Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 at Wake Tech. It is meant to demonstrate interactive JavaScript features.

## TODO: Future Enhancements

- [ ] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
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
