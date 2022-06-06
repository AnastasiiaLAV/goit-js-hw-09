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

console.log(date);

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
console.log(fp);

refs.startBtn.addEventListener("click", startTimer)

const timer = (targetData) => {
    setInterval(() => {
        const delta = new Date(targetData) - new Date;
        return delta;
    }, 1000);


}




// function startTimer(e) {
//     console.log(e);
//     // setInterval(() => {
//     //     const delta = new Date(targetData) - new Date;
//     //     return delta;
//     // }, 1000);
// }

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