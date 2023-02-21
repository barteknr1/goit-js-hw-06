const { log } = console;
document.body.style.backgroundColor = 'gray';

const text = document.querySelector("#text");
const inputRange = document.querySelector("#font-size-control");
text.style.fontSize ;
inputRange.addEventListener("input", () => {
    text.style.fontSize = inputRange.value + "px";
})