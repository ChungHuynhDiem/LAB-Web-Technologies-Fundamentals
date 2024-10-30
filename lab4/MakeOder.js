

function addClickListeners() {
    const allFoodItems = document.querySelectorAll('.food');
    allFoodItems.forEach(item => {
        item.addEventListener('click', () => {
            const dishName = item.querySelector('.name-food').textContent;
            const dishPrice = item.querySelector('.price').textContent;
            const dataDish = item.getAttribute('data-dish');
            updateOrderSection(dataDish, dishName, dishPrice);
        });
    });
}

const order = {
    soup: null,
    mainDish: null,
    drink: null,
};

// Update order section
function updateOrderSection(dataDish, name, price) {
    if (soups.some(d => d.keyword === dataDish)) {
        order.soup = { name, price };
    } else if (mainDishes.some(d => d.keyword === dataDish)) {
        order.mainDish = { name, price };
    } else if (drinks.some(d => d.keyword === dataDish)) {
        order.drink = { name, price };
    }

    renderOrder();
}

function updateHiddenFields() {
    document.getElementById('hidden-soup').value = order.soup ? order.soup.name : "";
    document.getElementById('hidden-main-dish').value = order.mainDish ? order.mainDish.name : "";
    document.getElementById('hidden-drink').value = order.drink ? order.drink.name : "";
    
}



// Render order information
function renderOrder() {
    const soupSection = document.querySelector('#soup-order');
    const mainDishSection = document.querySelector('#main-dish-order');
    const drinkSection = document.querySelector('#drink-order');
    const totalSection = document.querySelector('#total-order');
    const SectionOrder = document.querySelector('#order-section');
    const TableChoose = document.querySelector('#table-choose');
// Update information for each section
 
    if(order.soup !== null || order.mainDish !== null || order.drink !== null)
    {
        SectionOrder.style.display='none';
        TableChoose.style.display = 'block';

            soupSection.innerHTML = order.soup 
        ? `${order.soup.name} - ${order.soup.price}₽` 
        : "Блюдо не выбрано";

    mainDishSection.innerHTML = order.mainDish 
        ? `${order.mainDish.name} - ${order.mainDish.price}₽` 
        : "Блюдо не выбрано";

    drinkSection.innerHTML = order.drink 
        ? `${order.drink.name} - ${order.drink.price}₽` 
        : "Блюдо не выбрано";
    }


     // Calculate the total cost       
    let totalPrice = 0;
    if (order.soup) totalPrice += parseInt(order.soup.price);
    if (order.mainDish) totalPrice += parseInt(order.mainDish.price);
    if (order.drink) totalPrice += parseInt(order.drink.price);

    // Display the total cost
    if (totalPrice > 0) {
        totalSection.innerHTML = `${totalPrice}₽`;
        document.getElementById('hidden-total').value = `${totalPrice}₽`;  
    } 
    updateHiddenFields(); // Update hidden inputs every time the order changes
}


addClickListeners();

const form = document.querySelector('.form-order');
form.addEventListener('submit', function(event) {
    const soupValue = document.getElementById('hidden-soup').value;
    const mainDishValue = document.getElementById('hidden-main-dish').value;
    const drinkValue = document.getElementById('hidden-drink').value;

    // Check if the inputs have values
    if (!soupValue || !mainDishValue || !drinkValue) {
        event.preventDefault(); // Prevent form submission
        alert("Пожалуйста, выберите суп, главное блюдо и напиток."); // Notify the user
    }
});
