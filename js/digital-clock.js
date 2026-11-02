
function formatTime(t) {
    // Add leading 0s to any time field less than 10.
    let formatted;
    formatted = t.toString().length < 2 ? `0${t}` : t;
    return formatted;
}

function updateClock(clockEl, calEl) {
    // Get current date and time
    const now = new Date();
    // Get seconds, minutes, hours
    const sec = formatTime(now.getSeconds());
    const min = formatTime(now.getMinutes());
    const hour = formatTime(now.getHours());
    // Get calendar date with formatting
    const calDate = now.toLocaleDateString(
        "en-us",
        { day: "2-digit", month: "long", year: "numeric" }
    );
    // Determine AM or PM
    const session = hour >= 12 ? "PM" : "AM";
    currentSession.session = session;

    // Set the innerHTML of the clock-face element
    clockEl.innerHTML = `
        <div id="time">
            ${hour}:${min}:${sec}
        </div>
        `;

    // Change the background of the clock-face depending on the session.
    if (currentSession.session === "PM") {
        clock.style.backgroundColor = "purple";
    } else clock.style.backgroundColor = "none";

    // Set inner text of calendar-date element
    calEl.innerText = calDate;
}

const clock = document.getElementById("clock-face");
const calendar = document.getElementById("calendar-date");
const currentSession = {}
setInterval(updateClock, 1000, clock, calendar);