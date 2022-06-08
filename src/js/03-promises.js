import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    form: document.querySelector('.form'),
    btn: document.querySelector('button'),
    delay: document.querySelector('input[name=delay]'),
    step: document.querySelector('input[name=step]'),
    amount: document.querySelector('input[name=amount]'),
}

refs.form.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    const delay = Number(refs.delay.value);
    const step = Number(refs.step.value);
    const amount = Number(refs.amount.value);

    for (let i = 0; i < amount; i += 1) {
        const timeDelay = delay + step * i;
        const position = i + 1;
        createPromise(position, timeDelay)
            .then(({ position, delay }) => {
                return Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
            })
            .catch(({ position, delay }) => {
                return Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
            });
    }

}

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;
        setTimeout(() => {
            if (shouldResolve) {
                resolve({ position, delay })

            } else {
                reject({ position, delay })
            }
        }, delay);
    });
}