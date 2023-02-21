const { log } = console;
document.body.style.backgroundColor = 'gray';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
log(boxes);
const size = 30;
const boxCount = 0;

const input = document.querySelector('input')

  input.addEventListener("input", () => {
    const value = input.value;
    create.addEventListener('click', () => {
        const box = document.createElement('div');
        box.style.backgroundColor = getRandomHexColor();
        boxes.append(box)
        box.style.width = (size + 10 * (value - 1)) + "px"
        box.style.height = (size + 10 * (value - 1)) + "px"
    })
    })

destroy.addEventListener('click', () => {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
})