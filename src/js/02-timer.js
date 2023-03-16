// flatpickr
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

// querySelectors
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
const startButton = document.querySelector('button[data-start]');

startButton.addEventListener('click', onStartButtonClick);

startButton.disabled = true;

let selectedDate = null;

// flatpickr options
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const checkDate = new Date();

    selectedDate = selectedDates[0];

    if (selectedDate < checkDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startButton.disabled = false;
      return selectedDate;
    }
  },
};

const calendar = flatpickr('#datetime-picker', options);

function onStartButtonClick() {
  startButton.disabled = true;

  const intervalId = setInterval(() => {
    const distance = getDistance();

    if (distance < 0) {
      clearInterval(intervalId);
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(distance);

    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
  }, 1000);
}

// getDistance
function getDistance() {
  const currentDate = new Date();
  return selectedDate - currentDate;
}

// convertMs
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

//  padStart
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
