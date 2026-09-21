// function to convert units of distance
function convert(initial_value, initial_unit, final_unit) {
    let meters;
    let final_value;
    // step one: convert initial value to meters
    switch (initial_unit) {
        case "in": meters = initial_value * 2.54 * 0.01; break;
        case "ft": meters = initial_value * 30.48 * 0.01; break;
        case "yd": meters = initial_value * 0.91; break;
        case "mi": meters = initial_value * 1.61 * 1000; break;
        case "cm": meters = initial_value * 0.01; break;
        case "m": meters = initial_value; break;
        case "km": meters = initial_value * 1000; break;
    }
    // step two: convert meters to final unit
    switch (final_unit) {
        case "in": final_value = meters * 100 * 0.39; break;
        case "ft": final_value = meters * 100 * 0.0328; break;
        case "yd": final_value = meters * 1.09; break;
        case "mi": final_value = meters * 0.001 * 0.62; break;
        case "cm": final_value = meters * 100; break;
        case "m": final_value = meters; break;
        case "km": final_value = meters * 0.001; break;
    }
	// Round just enough that smallest possible conversion (cm to mi) is not zero.
    final_value = Math.round(final_value * 100000) / 100000;
	// Check whether we are converting from one unit to the same unit. If so, set final value to initial value.
	if (final_unit === initial_unit) {
		final_value = initial_value;
	}
    let message = initial_value + initial_unit + " is " + final_value + final_unit;
	return message
}
// Add event listener to conversion button to display result
document.getElementById("convert-btn").addEventListener(
	"click",
	function(event) {
		event.preventDefault();
	    let initial_value = parseFloat(document.getElementById("initial_value").value);
		let initial_unit_element = document.getElementById("initial_unit");
  		let final_unit_element = document.getElementById("final_unit");
		let initial_unit_index = initial_unit_element.selectedIndex;
  		let final_unit_index = final_unit_element.selectedIndex;
		let initial_unit = initial_unit_element.getElementsByTagName("option")[initial_unit_index].value;
		let final_unit = final_unit_element.getElementsByTagName("option")[final_unit_index].value;
  		let message = convert(initial_value, initial_unit, final_unit);
		document.getElementById("conversion-result").innerHTML = message;
});
