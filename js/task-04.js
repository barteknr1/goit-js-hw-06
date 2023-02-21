const { log } = console;
document.body.style.backgroundColor = 'gray';

const increment = document.querySelector('button[data-action="increment"]')
const decrement = document.querySelector('button[data-action="decrement"]')
const value = document.querySelector('#value');

increment.addEventListener('click', () => {
    value.textContent ++;
})
decrement.addEventListener('click', () => {
    value.textContent --;
})
