import { Notify } from 'notiflix/build/notiflix-notify-aio';





const refs = {
    form: document.querySelector('.form'),
    btn: document.querySelector('button'),
    delay: document.querySelector('input[name=delay]'),
    step: document.querySelector('input[name=step]'),
    amount: document.querySelector('input[name=amount]'),
}
console.log(refs.delay);

const { delay, step, amount } = formElem;

// let DELAY = 1000;
refs.btn.addEventListener('submit', createPromise);

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

createPromise(delay, step, amount)
    .then(({ position, delay }) => {
        return Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
        return Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });