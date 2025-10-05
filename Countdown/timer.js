let minutesInput = document.getElementById("minutes");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");
let timeDisplay = document.getElementById("timeDisplay");

let countdown;  // variable to store setInterval

function updateDisplay(totalSeconds) {
    let mins = Math.floor(totalSeconds / 60);
    let secs = totalSeconds % 60;
    // Add leading zero
    timeDisplay.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

startBtn.onclick = function() {
    let totalSeconds = Number(minutesInput.value) * 60;
    if (isNaN(totalSeconds) || totalSeconds <= 0) return;

    clearInterval(countdown);  // clear previous timer
    updateDisplay(totalSeconds);

    countdown = setInterval(() => {
        totalSeconds--;
        updateDisplay(totalSeconds);

        if (totalSeconds <= 0) {
            clearInterval(countdown);
            alert("⏰ Time's up!");
        }
    }, 1000);
};

resetBtn.onclick = function() {
    clearInterval(countdown);
    timeDisplay.textContent = "00:00";
    minutesInput.value = "";
};
