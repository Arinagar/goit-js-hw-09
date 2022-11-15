const buttonStartEl = document.querySelector('button[data-start]');
const buttonStopEl = document.querySelector('button[data-stop]');
let colorChange = null;
buttonStopEl.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonStartClick(event) {
  colorChange = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonStopEl.disabled = false;
  event.target.disabled = !buttonStopEl.disabled;
}

function onButtonStopClick(event) {
  clearInterval(colorChange);
  buttonStartEl.disabled = false;
  buttonStopEl.disabled = true;
}

buttonStartEl.addEventListener('click', onButtonStartClick);
buttonStopEl.addEventListener('click', onButtonStopClick);
