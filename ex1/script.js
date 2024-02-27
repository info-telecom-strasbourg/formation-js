const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const resetButton = document.querySelector("#reset");
const timer = document.querySelector("#timer");

let timerValue = 0;
let isPlaying = false;
let interval = null;

const formatTimer = (timerValue) => {
  const minutes = Math.floor(timerValue / 60);
  const seconds = timerValue % 60;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${formattedMinutes}:${formattedSeconds}`;
};

const updateButtons = () => {
  playButton.disabled = isPlaying;
  pauseButton.disabled = !isPlaying;
};

playButton.addEventListener("click", () => {
  if (isPlaying) return;
  isPlaying = true;
  updateButtons();
  interval = setInterval(() => {
    timerValue++;
    timer.textContent = formatTimer(timerValue);
  }, 1000);
});

pauseButton.addEventListener("click", () => {
  isPlaying = false;
  updateButtons();
  clearInterval(interval);
});

resetButton.addEventListener("click", () => {
  timerValue = 0;
  isPlaying = false;
  updateButtons();
  timer.textContent = formatTimer(timerValue);
  clearInterval(interval);
});
