const timerEl = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const timerStatus = document.getElementById('timerStatus');

let remaining = 90;
let intervalId = null;

function render() {
  const minutes = Math.floor(remaining / 60);
  const seconds = String(remaining % 60).padStart(2, '0');
  timerEl.textContent = `${minutes}:${seconds}`;
}

function stopTimer() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

startButton.addEventListener('click', () => {
  if (intervalId) {
    stopTimer();
    startButton.textContent = 'Resume test';
    timerStatus.textContent = 'Paused. Keep it easy. Resume when ready.';
    return;
  }

  if (remaining === 0) remaining = 90;
  startButton.textContent = 'Pause';
  timerStatus.textContent = 'Mouth open like a vent. Nose breathing easy. Soften the valves.';

  intervalId = setInterval(() => {
    remaining -= 1;
    if (remaining <= 0) {
      remaining = 0;
      stopTimer();
      startButton.textContent = 'Start again';
      timerStatus.textContent = 'Done. Scroll to the three questions and record what changed.';
    }
    render();
  }, 1000);
});

resetButton.addEventListener('click', () => {
  stopTimer();
  remaining = 90;
  startButton.textContent = 'Start test';
  timerStatus.textContent = 'When the timer ends, answer the three questions below.';
  render();
});

render();
