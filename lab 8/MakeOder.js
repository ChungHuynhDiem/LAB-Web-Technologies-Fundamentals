// Order function

function addClickListeners() { //listen button
    const allFoodItems = document.querySelectorAll('.food');
    allFoodItems.forEach(item => {
        item.addEventListener('click', () => { //get data of food clicked
            const dishName = item.querySelector('.name-food').textContent;
            const dishPrice = item.querySelector('.price').textContent;
            const dataDish = item.getAttribute('data-dish');
            const dataId = item.getAttribute('data-id');
            updateOrderSection(dataDish, dishName, dishPrice, dataId);
        });
    });
    // console.log('button add');
}

const order = {//create objects to store selected dishes
    soup: null,
    mainDish: null,
    drink: null,
    saladstarter: null,
    dessert: null,
};


// Update order section every time the button is pressed
function updateOrderSection(dataDish, name, price, dataId) {
    if (soups.some(d => d.keyword === dataDish)) {
        order.soup = { name, price };
        localStorage.setItem('id-soup', dataId);
    } else if (mainDishes.some(d => d.keyword === dataDish)) {
        order.mainDish = { name, price };
        localStorage.setItem('id-dish', dataId);
    } else if (drinks.some(d => d.keyword === dataDish)) {
        order.drink = { name, price };
        localStorage.setItem('id-drink', dataId);
    } else if (SaladStarter.some(d => d.keyword === dataDish)) {
        order.saladstarter = { name, price };
        localStorage.setItem('id-saladstarter', dataId);
    } else if (Dessert.some(d => d.keyword === dataDish)) {
        order.dessert = { name, price };
        localStorage.setItem('id-dessert', dataId);
    }

    renderOrder();
}

// function updateHiddenFields() {
//     document.getElementById('hidden-soup').value = order.soup ? order.soup.name : "";
//     document.getElementById('hidden-main-dish').value = order.mainDish ? order.mainDish.name : "";
//     document.getElementById('hidden-drink').value = order.drink ? order.drink.name : "";
//     document.getElementById('hidden-saladstarter').value = order.saladstarter ? order.saladstarter.name : "";
//     document.getElementById('hidden-dessert').value = order.dessert ? order.dessert.name : "";
// }



// Render order information
function renderOrder() {
    // const soupSection = document.querySelector('#soup-order');
    // const mainDishSection = document.querySelector('#main-dish-order');
    // const drinkSection = document.querySelector('#drink-order');
    // const saladstarterSection = document.querySelector('#saladstarter-order');
    // const dessertSection = document.querySelector('#dessert-order');
    const totalSection = document.querySelector('#money');
    // const SectionOrder = document.querySelector('#order-section');
    // const TableChoose = document.querySelector('#table-choose');





    /// Update information for each section
    // if (order.soup !== null || order.mainDish !== null || order.drink !== null || order.saladstarter !== null || order.dessert !== null) {
    //     SectionOrder.style.display = 'none';
    //     TableChoose.style.display = 'block';

    //     soupSection.innerHTML = order.soup
    //         ? `${order.soup.name} - ${order.soup.price}₽` : "Блюдо не выбрано";

    //     mainDishSection.innerHTML = order.mainDish
    //         ? `${order.mainDish.name} - ${order.mainDish.price}₽` : "Блюдо не выбрано";

    //     drinkSection.innerHTML = order.drink
    //         ? `${order.drink.name} - ${order.drink.price}₽` : "Блюдо не выбрано";

    //     saladstarterSection.innerHTML = order.saladstarter
    //         ? `${order.saladstarter.name} - ${order.saladstarter.price}₽` : "Блюдо не выбрано";

    //     dessertSection.innerHTML = order.dessert
    //         ? `${order.dessert.name} - ${order.dessert.price}₽` : "Блюдо не выбрано";
    // }


    // Calculate the total cost
    let totalPrice = 0;
    if (localStorage.getItem('id-soup')) {
        const pricesoup = soups.find(item => item.id.toString() === localStorage.getItem('id-soup'));
        if (pricesoup) {
            totalPrice += pricesoup.price;
        }
    }
    if (localStorage.getItem('id-dish')) {
        const pricemaindish = mainDishes.find(item => item.id.toString() === localStorage.getItem('id-dish'));
        if (pricemaindish) {
            totalPrice += pricemaindish.price;
        }
    }
    if (localStorage.getItem('id-drink')) {
        const pricedrink = drinks.find(item => item.id.toString() === localStorage.getItem('id-drink'));
        if (pricedrink) {
            totalPrice += pricedrink.price;
        }
    }
    if (localStorage.getItem('id-saladstarter')) {
        const pricesalab = SaladStarter.find(item => item.id.toString() === localStorage.getItem('id-saladstarter'));
        if (pricesalab) {
            totalPrice += pricesalab.price;
        }
    }
    if (localStorage.getItem('id-dessert')) {
        const pricedessert = Dessert.find(item => item.id.toString() === localStorage.getItem('id-dessert'));
        if (pricedessert) {
            totalPrice += pricedessert.price;
        }
    }
    
    console.log('check:', totalPrice);
    // Display the total cost
    if (totalPrice === 0) {
        const totalOrderElements = document.getElementsByClassName('totalorder');
    
        // Lặp qua tất cả các phần tử có lớp 'totalorder'
        for (let i = 0; i < totalOrderElements.length; i++) {
            totalOrderElements[i].style.display = 'none';
        }
    } else {

        const totalOrderElements = document.getElementsByClassName('totalorder');
    
        // Lặp qua tất cả các phần tử có lớp 'totalorder'
        for (let i = 0; i < totalOrderElements.length; i++) {
            totalOrderElements[i].style.display = 'block';
        }
        totalSection.innerHTML = `${totalPrice}`;
        // document.getElementById('hidden-total').value = `${totalPrice}₽`;
    }
    console.log('check: ', totalPrice)
    // updateHiddenFields();  // Update hidden inputs every time the order changes




}


const SaveValue = () => {
    Savesoup = localStorage.getItem('id-soup');
    SavemainDish = localStorage.getItem('id-dish');
    Savedrink = localStorage.getItem('id-drink');
    Savesaladstarter = localStorage.getItem('id-saladstarter');
    Savedessert = localStorage.getItem('id-dessert');
    console.log(Savesoup);
    console.log(SavemainDish);
    console.log(Savedrink);
    console.log(Savesaladstarter);
    console.log(Savedessert);
}
SaveValue();

// Xóa tất cả dữ liệu
// localStorage.clear();





const AwaitAddClickListeners = async () => {
    await DataFood();
    renderOrder();
    addClickListeners();
}

AwaitAddClickListeners();



