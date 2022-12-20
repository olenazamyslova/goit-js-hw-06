const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsListEl = document.querySelector('#ingredients');

const createEl = ingredients.map(el => {
  const ingredientsListEl = document.createElement('li');
  ingredientsListEl.classList.add('ingredients-item');
  ingredientsListEl.textContent = el;
  return ingredientsListEl;
});
  

ingredientsListEl.append(...createEl);

