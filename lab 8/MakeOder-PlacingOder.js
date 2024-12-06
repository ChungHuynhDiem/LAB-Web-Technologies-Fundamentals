// Order function


function addClickListeners() {
    const blockFoods = document.querySelectorAll('.block-food');  // Phần tử cha chứa tất cả các món ăn
    blockFoods.forEach(block => {
        block.addEventListener('click', (event) => {
            // Kiểm tra xem phần tử con nào đã được nhấn
            const item = event.target.closest('.food');  // Tìm phần tử .food mà người dùng nhấn vào
            if (item) {
                const dishName = item.querySelector('.name-food').textContent;
                const dishPrice = item.querySelector('.price').textContent;
                const dataDish = item.getAttribute('data-dish');
                const dataId = item.getAttribute('data-id');
                updateOrderSection(dataDish, dishName, dishPrice, dataId);
            }
        });
    });
        // console.log(ArraySaveFood);
        
}




// Update order section every time the button is pressed
function updateOrderSection(dataDish, name, price, dataId) {
    if (soups.some(d => d.keyword === dataDish)) {
        SaveSoup = null;
        localStorage.removeItem('id-soup');
    } else if (mainDishes.some(d => d.keyword === dataDish)) {
        SaveMainDish = null;
        localStorage.removeItem('id-dish');
    } else if (drinks.some(d => d.keyword === dataDish)) {
        SaveDrink = null;
        localStorage.removeItem('id-drink');
    } else if (SaladStarter.some(d => d.keyword === dataDish)) {
        SaveSaladstarter = null;
        localStorage.removeItem('id-saladstarter');
    } else if (Dessert.some(d => d.keyword === dataDish)) {
        SaveDessert = null;
        localStorage.removeItem('id-dessert');
    }

    // console.log('button remove');
    UpdateArray();
    console.log(ArraySaveFood);
    displayAllFood();
    renderOrder();
}

function updateHiddenFields() {
    document.getElementById('hidden-soup').value = SaveSoup ? SaveSoup.name : "";
    document.getElementById('hidden-main-dish').value = SaveMainDish ? SaveMainDish.name : "";
    document.getElementById('hidden-drink').value = SaveDrink ? SaveDrink.name : "";
    document.getElementById('hidden-saladstarter').value = SaveSaladstarter ? SaveSaladstarter.name : "";
    document.getElementById('hidden-dessert').value = SaveDessert ? SaveDessert.name : "";
}



// Render order information
function renderOrder() {
    const soupSection = document.querySelector('#soup-order');
    const mainDishSection = document.querySelector('#main-dish-order');
    const drinkSection = document.querySelector('#drink-order');
    const saladstarterSection = document.querySelector('#saladstarter-order');
    const dessertSection = document.querySelector('#dessert-order');
    const totalSection = document.querySelector('#total-order');
    const SectionOrder = document.querySelector('#order-section');
    const TableChoose = document.querySelector('#table-choose');

    /// Update information for each section
    if (SaveSoup || SaveMainDish  || SaveDrink || SaveSaladstarter  || SaveDessert ) {
        SectionOrder.style.display = 'none';
        TableChoose.style.display = 'block';

        soupSection.innerHTML = SaveSoup
            ? `${SaveSoup.name} - ${SaveSoup.price}₽` : "Блюдо не выбрано";

        mainDishSection.innerHTML = SaveMainDish
            ? `${SaveMainDish.name} - ${SaveMainDish.price}₽` : "Блюдо не выбрано";

        drinkSection.innerHTML = SaveDrink
            ? `${SaveDrink.name} - ${SaveDrink.price}₽` : "Блюдо не выбрано";

        saladstarterSection.innerHTML = SaveSaladstarter
            ? `${SaveSaladstarter.name} - ${SaveSaladstarter.price}₽` : "Блюдо не выбрано";

        dessertSection.innerHTML = SaveDessert
            ? `${SaveDessert.name} - ${SaveDessert.price}₽` : "Блюдо не выбрано";
    }
    else{
        SectionOrder.style.display = 'block';
        TableChoose.style.display = 'none';
    }


    // Calculate the total cost
    let totalPrice = 0;
    if (SaveSoup) totalPrice += parseInt(SaveSoup.price);
    if (SaveMainDish) totalPrice += parseInt(SaveMainDish.price);
    if (SaveDrink) totalPrice += parseInt(SaveDrink.price);
    if (SaveSaladstarter) totalPrice += parseInt(SaveSaladstarter.price);
    if (SaveDessert) totalPrice += parseInt(SaveDessert.price);

    // Display the total cost
    if (totalPrice >= 0) {
        totalSection.innerHTML = `${totalPrice}₽`;
        document.getElementById('hidden-total').value = `${totalPrice}₽`;
    }
    // console.log('check2');
    updateHiddenFields();  // Update hidden inputs every time the order changes

}



// localStorage.clear();





const AwaitAddClickListeners = async () => {
    await DataFood();
    renderOrder();
    addClickListeners();
    
}

AwaitAddClickListeners();
