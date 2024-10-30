// displaying dishes on the page using JavaScript
function displayDishes(dishes, sectionSelector) {
    const section = document.querySelector(sectionSelector);
    const blockFood = section.querySelector('.block-food');
    blockFood.innerHTML = '';

    dishes.forEach(dish => {
        const foodDiv = document.createElement('div');
        foodDiv.classList.add('food');
        foodDiv.setAttribute('data-dish', dish.keyword);
        foodDiv.innerHTML = `
            <div class="photo"><img src="${dish.image}" alt="${dish.name}" class="photo-food"></div>
            <p class="price">${dish.price}</p>
            <p class="name-food">${dish.name}</p>
            <p class="weight-volume">${dish.count}</p>
            <div class="button">
                <input type="submit" value="Добавить">
            </div>
        `;
        blockFood.appendChild(foodDiv);
    });
}
// Use the sort() method before displaying the dishes on the page. The dishes should be sorted alphabetically.
soups.sort((a, b) => a.name.localeCompare(b.name));
mainDishes.sort((a, b) => a.name.localeCompare(b.name));
drinks.sort((a, b) => a.name.localeCompare(b.name));


displayDishes(soups, '.soup-food');
displayDishes(mainDishes, '.main-food');
displayDishes(drinks, '.drink');


