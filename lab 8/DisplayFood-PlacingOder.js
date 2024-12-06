// displaying dishes on the page using JavaScript
let SaveSoup, SaveMainDish, SaveDrink, SaveSaladstarter, SaveDessert, SaveTotal;
let ArraySaveFood = [];

const GetSelectedFood = async () => {
    await DataFood();
    soups.forEach(item => {
        if (item.id.toString() === localStorage.getItem('id-soup')) {
            SaveSoup = item;
        }
    })
    mainDishes.forEach(item => {
        if (item.id.toString() === localStorage.getItem('id-dish')) {
            SaveMainDish = item;
        }
    })
    drinks.forEach(item => {
        if (item.id.toString() === localStorage.getItem('id-drink')) {
            SaveDrink = item;
        }
    })
    SaladStarter.forEach(item => {
        if (item.id.toString() === localStorage.getItem('id-saladstarter')) {
            SaveSaladstarter = item;
        }
    })
    Dessert.forEach(item => {
        if (item.id.toString() === localStorage.getItem('id-dessert')) {
            SaveDessert = item;
        }
    })
    ArraySaveFood =[SaveSoup, SaveMainDish, SaveDrink, SaveSaladstarter, SaveDessert, SaveTotal]


}
GetSelectedFood();


function displayDishes(dishes, sectionSelector) {
    const section = document.querySelector(sectionSelector);
    const blockFood = section.querySelector('.block-food');
    blockFood.innerHTML = ''; // Delete previous elements

    dishes.forEach(dish => {
        if(dish){
            const foodDiv = document.createElement('div');
            foodDiv.classList.add('food');
            foodDiv.setAttribute('data-dish', dish.keyword);
            foodDiv.setAttribute('data-id',dish.id)
            foodDiv.innerHTML = `
                <div class="photo"><img src="${dish.image}" alt="${dish.name}" class="photo-food"></div>
                <p class="price">${dish.price}</p>
                <p class="name-food">${dish.name}</p>
                <p class="weight-volume">${dish.count}</p>
                <div class="button">
                    <input type="submit" value="Удалить">
                </div>
            `;
            blockFood.appendChild(foodDiv);
        }
    });
}

// Используйте метод sort() перед отображением блюд на страницу. More often than not.
// call function to display dishes

const displayAllFood =  () => {
    // console.log('check ArraySaveFood:', ArraySaveFood);
    if (ArraySaveFood) {
        displayDishes(ArraySaveFood, '.soup-food');
    }
    else {
        // Nếu không có món ăn chính, ẩn tất cả phần tử có lớp 'main-food'
        const mainFoodElements = document.getElementsByClassName('soup-food');
        for (let element of mainFoodElements) {
            element.style.display = 'none';
        }
    }

}

const UpdateArray = () => {
    ArraySaveFood =[SaveSoup, SaveMainDish, SaveDrink, SaveSaladstarter, SaveDessert, SaveTotal];
}

const ResetArrayFood = () => {
    SaveSoup=null;
    SaveMainDish= null;
    SaveDrink=null;
    SaveSaladstarter=null;
    SaveDessert= null;
    SaveTotal=null;
    UpdateArray();
}

const AwaitdisplayAllFood = async () => {
    await DataFood();
    displayAllFood();
}

AwaitdisplayAllFood();

