let timerInterval; // variable to hold the interval ID
let startTime; // variable to hold the start time
let elapsedTime = 0; // variable to hold the elapsed time

const timer = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

// function to format the time
function formatTime(milliseconds) {
  const date = new Date(milliseconds);
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  const ms = date.getUTCMilliseconds().toString().padStart(3, "0");
  return `${hours}:${minutes}:${seconds}.${ms}`;
}

// function to update the timer display
function updateTimer() {
  const currentTime = new Date().getTime();
  elapsedTime = currentTime - startTime;
  timer.textContent = formatTime(elapsedTime);
}

startButton.addEventListener("click", function() {
  startTime = new Date().getTime() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10); // update timer every 10 milliseconds
});

stopButton.addEventListener("click", function() {
  clearInterval(timerInterval);
});