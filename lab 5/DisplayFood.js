// displaying dishes on the page using JavaScript
function displayDishes(dishes, sectionSelector) {
    const section = document.querySelector(sectionSelector);
    const blockFood = section.querySelector('.block-food');
    blockFood.innerHTML = ''; // Delete previous elements

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
// Используйте метод sort() перед отображением блюд на страницу. More often than not.
soups.sort((a, b) => a.name.localeCompare(b.name));
mainDishes.sort((a, b) => a.name.localeCompare(b.name));
drinks.sort((a, b) => a.name.localeCompare(b.name));

// call function to display dishes
displayDishes(soups, '.soup-food');
displayDishes(mainDishes, '.main-food');
displayDishes(drinks, '.drink');
displayDishes(SaladStarter, '.salad-starter');
displayDishes(Dessert, '.desserts');


