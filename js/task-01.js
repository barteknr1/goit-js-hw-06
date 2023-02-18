const { log } = console;
const categories = document.querySelectorAll('.item');
log('Number of categories:', categories.length);

categories.forEach(el => {
    log('Category:', el.firstElementChild.textContent)
    log('Elements:', el.lastElementChild.children.length)
})