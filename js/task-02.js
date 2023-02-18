const { log } = console;
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');
log(ingredientsList);

[...ingredients].forEach(el => {
  const item = document.createElement('li');
  item.textContent = el;
  item.classList.add('item');
  ingredientsList.append(item);
});