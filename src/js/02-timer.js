import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
require("flatpickr/dist/themes/material_red.css");


const refs = {
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
    wrap: document.querySelector('.timer')
}
const date = new Date();
// let intervalId = null;
const options = {
    enableTime: true,
    dateFormat: "F j, Y H:i",
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < options.defaultDate) {
            refs.startBtn.disabled = true;
            Notify.failure('Please choose a date in the future');
            return
        }
        refs.startBtn.disabled = false;
        Notify.success('Correct date =)');
        console.log(selectedDates[0]);
    },
}

const fp = flatpickr("#datetime-picker", options);

refs.startBtn.addEventListener("click", start)

function start() {
    const selectedDates = fp.selectedDates[0].getTime();
    const intervalId = setInterval(() => {
        const deltaTime = selectedDates - Date.now();
        console.log(deltaTime);
        const convertDeltaTime = convertMs(deltaTime);
        console.log(convertDeltaTime);
        if (deltaTime <= 0) {
            clearInterval(intervalId);
            return
        }
        updateClockFace(convertDeltaTime);
    }, 1000);
}

function updateClockFace({ days, hours, minute, second }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minute;
    refs.seconds.textContent = second;
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}