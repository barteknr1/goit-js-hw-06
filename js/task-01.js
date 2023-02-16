const { log } = console;
const categories = document.querySelectorAll('.item');
log('Number of categories:', categories.length);

const category = document.querySelectorAll('.item > h2');

log('Category:',category[0].textContent);
const animals = category[0].nextElementSibling.children;
log('Elements:',animals.length);

log('Category:',category[1].textContent);
const products = category[1].nextElementSibling.children;
log('Elements:',products.length);

log('Category:',category[2].textContent);
const technologies = category[2].nextElementSibling.children;
log('Elements:',technologies.length);


// category.forEach((ctgr) => log(ctgr));
// const ctgrs = Array.from(category);
// console.log(ctgrs[0]);