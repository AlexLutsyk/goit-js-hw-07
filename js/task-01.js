
const categoriesItemEl = document.querySelectorAll('.item');

categoriesItemEl.forEach(el => {
    const category = el.querySelector('h2');
    const categoryItemsEl = el.querySelectorAll('li');
    console.log(`Категория: ${category.textContent}`);
    console.log(`Количество элементов: ${categoryItemsEl.length}`)
});
