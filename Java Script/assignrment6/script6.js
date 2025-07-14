let count = 10;
const timerElement = document.getElementById("timer");

const countdown = setInterval(() => {
  count--;
  timerElement.textContent = count;

  if (count <= 0) {
    clearInterval(countdown);
    timerElement.textContent = "Time's up!";
  }
}, 1000);
