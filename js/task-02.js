const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const addIngredients = ingredients.map(el => {
    const list = document.createElement('li');
    list.textContent = el;
    return list;
    
});
ingredientsList.append(...addIngredients);


console.log(ingredientsList);

