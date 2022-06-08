const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]')
}
refs.stop.setAttribute('disabled', 'disabled');
let intervalId = null;

refs.start.addEventListener("click", () => {
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.stop.disabled = false;
    refs.start.disabled = true;
});

refs.stop.addEventListener("click", () => {
    clearInterval(intervalId);
    refs.start.disabled = false;
    refs.stop.disabled = true;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}