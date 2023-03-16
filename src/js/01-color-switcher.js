function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.body;

startButton.style.width = '75px';
startButton.style.height = '35px';
startButton.style.textTransform = 'uppercase';
stopButton.style.width = '75px';
stopButton.style.height = '35px';
stopButton.style.textTransform = 'uppercase';

let intervalId = null;

const bodyColorChange = () => {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  return intervalId;
};

const onStartButtonClick = () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  bodyColorChange();
};

const onStopButtonClick = () => {
  startButton.disabled = false;
  stopButton.disabled = true;
  clearInterval(intervalId);
};

startButton.addEventListener('click', onStartButtonClick);
stopButton.addEventListener('click', onStopButtonClick);
