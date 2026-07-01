const timerEl = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

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
    startButton.textContent = 'Resume reset';
    return;
  }

  startButton.textContent = 'Pause';
  intervalId = setInterval(() => {
    remaining -= 1;
    if (remaining <= 0) {
      remaining = 0;
      stopTimer();
      startButton.textContent = 'Start again';
    }
    render();
  }, 1000);
});

resetButton.addEventListener('click', () => {
  stopTimer();
  remaining = 90;
  startButton.textContent = 'Start reset';
  render();
});

render();
