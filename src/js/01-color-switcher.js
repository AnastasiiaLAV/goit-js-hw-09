const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]')
}

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
    refs.stop.disabled = true;
    refs.start.disabled = false;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}