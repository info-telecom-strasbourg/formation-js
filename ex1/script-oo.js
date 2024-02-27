class Timer {
  constructor(timerElement) {
    this.value = 0;
    this.element = timerElement;
    this.isPlaying = false;
    this.interval = null;
  }

  start() {
    if (this.isPlaying) return;

    this.isPlaying = true;
    this.interval = setInterval(() => {
      this.update();
    }, 1000);
    this.updateButtons();
  }

  pause() {
    if (!this.isPlaying) return;

    this.isPlaying = false;
    clearInterval(this.interval);
    this.updateButtons();
  }

  reset() {
    this.setTimerValue(0);
    this.pause();
  }

  setTimerValue(value) {
    this.value = value;
    this.element.textContent = formatTimer(value);
  }

  update() {
    if (this.isPlaying) this.setTimerValue(this.value + 1);
  }

  updateButtons() {
    playButton.disabled = this.isPlaying;
    pauseButton.disabled = !this.isPlaying;
  }
}

const formatTimer = (timerValue) => {
  const minutes = Math.floor(timerValue / 60);
  const seconds = timerValue % 60;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${formattedMinutes}:${formattedSeconds}`;
};

// Récupération des éléments du DOM
const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const resetButton = document.querySelector("#reset");
const timer = document.querySelector("#timer");

// Création de l'objet Timer
const timerObject = new Timer(timer);

// Gestion des événements
playButton.addEventListener("click", timerObject.start);
pauseButton.addEventListener("click", timerObject.pause);
resetButton.addEventListener("click", timerObject.reset);
