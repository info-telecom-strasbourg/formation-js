class Timer {
  constructor(HTMLElement) {
    this.element = HTMLElement;
    this.time = 0;
    this.isPlaying = false;
    this.interval = null;
  }

  get time() {
    return this._time;
  }

  set time(value) {
    this._time = value;
    this.element.textContent = this.formatTimer(this.value);
  }

  get isPlaying() {
    return this._isPlaying;
  }

  set isPlaying(value) {
    this._isPlaying = value;
    playButton.disabled = value;
    pauseButton.disabled = !value;
  }

  formatTimer() {
    const minutes = Math.floor(this.time / 60);
    const seconds = this._time % 60;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedMinutes}:${formattedSeconds}`;
  }
}

const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const timerDisplay = document.getElementById("timer");

const timer = new Timer(timerDisplay);

playButton.addEventListener("click", () => {
  if (timer.isPlaying) return;
  timer.isPlaying = true;
  timer.interval = setInterval(() => {
    timer.time++;
  }, 1000);
});

pauseButton.addEventListener("click", () => {
  timer.isPlaying = false;
  clearInterval(timer.interval);
});

resetButton.addEventListener("click", () => {
  timer.time = 0;
  timer.isPlaying = false;
  clearInterval(timer.interval);
});
