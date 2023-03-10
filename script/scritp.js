
function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10);
  document.getElementById("startBtn").disabled = true;
}

function updateTimer() {
  const elapsedTimeMillis = Date.now() - startTime;
  const minutes = Math.floor((elapsedTimeMillis / 1000 / 60) % 60);
  const seconds = Math.floor((elapsedTimeMillis / 1000) % 60);
  const millis = Math.floor(elapsedTimeMillis % 1000 / 10);
  timer.innerHTML = `${padZero(minutes)}:${padZero(seconds)}:${padZero(millis)}`;
}

function padZero(num) {
  return num.toString().padStart(2, '0');
}

function pauseTimer() {
  clearInterval(timerInterval);
  elapsedTime = Date.now() - startTime;
  document.getElementById("startBtn").disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  timer.innerHTML = "00:00:00";
  document.getElementById("startBtn").disabled = false;
}

let timerInterval = document.getElementById('startBtn');
let startTime = document.getElementById('pauseBtn');
let elapsedTime = 0;
let timer = document.getElementById('timer');
let resetBtn = document.getElementById('resetTimer');

function clickBtn() {

  let startTime = document.querySelector("#startBtn").value;

}