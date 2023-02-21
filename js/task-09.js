const { log } = console;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const changeColorButton = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

changeColorButton.addEventListener('click', () => { 
  body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = body.style.backgroundColor;
})