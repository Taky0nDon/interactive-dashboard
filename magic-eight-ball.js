function displayAnswer(answersArray) {
    let index = Math.floor(Math.random() * answers.length);
    let circleDiv = document.getElementById("circle");
    // Adjust display of circleDiv to show the answer and center the text
    circleDiv.style.display = "flex";
    circleDiv.style.alignItems = "center";
    circleDiv.style.justifyContent = "center";
    // Display answer
    circleDiv.innerHTML = "<p style='margin-left: 5%; margin-right: 5%;'>" + answersArray[index] + "</p>";
}

let answers = [
    "Never",
    "Maybe",
    "Yes",
    "No",
    "Ask again later",
    "Outlook uncertain",
    "Um I don't know did you ask ChatGPT?"
]

let ballElement = document.getElementById("ball");
let resetElement = document.getElementById("reset");

ballElement.addEventListener("mousedown", function(event) {
    event.preventDefault();
    let questionElement = document.getElementById("question");
    // Check that the user has entered a question before displaying an answer
    if (questionElement.value.length === 0) {
        alert("Please enter a question!");
    }
    else {
        displayAnswer(answers);
    }
});

resetElement.addEventListener("click", function() {
    // Reset the question input field and hide the answer circle
    document.getElementById("circle").style.display = "none";
});