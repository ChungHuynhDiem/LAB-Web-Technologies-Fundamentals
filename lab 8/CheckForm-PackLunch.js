//function to check the submitted form data

const Lick = document.querySelector('.disabled');

Lick.addEventListener('click', (event) => {

    const ValueSoup = localStorage.getItem('id-soup');
    const ValueMainDish = localStorage.getItem('id-dish');
    const ValueDrink = localStorage.getItem('id-drink');
    const ValueSalad = localStorage.getItem('id-saladstarter');
    const ValueDerrest = localStorage.getItem('id-dessert');

    // if soup is selected

    if (ValueSoup) {
        if (ValueMainDish)//if maindish is selected
        {
            if (ValueDrink)//if drink is selected
            {
                SuccessMessage(event);
            }
            else// if drink is not selected
            {
                ErrorMessage(2, event);
            }
        }
        else//if maindish is not selected
        {
            if (ValueSalad)//if salad is not selected
            {
                if (ValueDrink)// if drink is selected
                {
                    SuccessMessage(event);
                }
                else//if drinks is not selected
                {
                    ErrorMessage(2, event);
                }
            }
            else // if salad is not selected
            {
                ErrorMessage(3, event);
            }
        }
    }
    else // if soup is not selected
    {
        if (ValueMainDish)// if maindish is selected
        {
            if (ValueDrink)// if drink is selected
            {
                SuccessMessage(event);
            }
            else// if drink is not selected
            {
                ErrorMessage(2, event);
            }
        }
        else// if maindish is not selected
        {
            if (ValueSalad)// if salab is selected
            {
                ErrorMessage(4, event);
            }
            else// if salad is not selected
            {
                if (ValueDrink)//if drink is selected
                {
                    ErrorMessage(5, event);
                }
                else// if drink is not selected
                {
                    if (ValueDerrest) {
                        ErrorMessage(6, event);//if only choose dessert
                    }
                    else {
                        ErrorMessage(1, event);//if nothing is selected
                    }
                }
            }
        }
    }
}

    //}
)

const BoxMessage = document.querySelector('#message-text');

const ErrorMessage = (TypeError, event) => {
    event.preventDefault(); // Prevent form submission
    document.querySelector('.messange-box').style.display = 'flex';
    switch (TypeError) {
        case 1:
            BoxMessage.innerHTML = `Ничего не выбрано. Выберите блюда для заказа `;
            break;
        case 2:
            BoxMessage.innerHTML = 'Выберите напиток ';
            break;
        case 3:
            BoxMessage.innerHTML = 'Выберите главное блюдо/салат/стартер';
            break;
        case 4:
            BoxMessage.innerHTML = 'Выберите суп или главное блюдо ';
            break;
        case 5:
            BoxMessage.innerHTML = 'Выберите главное блюдо ';
            break;
        case 6:
            BoxMessage.innerHTML = 'Выберите ланч ';
            break;
    }
}

const SuccessMessage = (event) => {
    event.preventDefault();
    document.querySelector('.messange-box').style.display = 'flex';
    BoxMessage.innerHTML = 'Перейти к оформлению';
    // Sau 3 giây, tái kích sự kiện 
    setTimeout(() => {
        window.location.href = 'PlacingOder.html'; // Ví dụ chuyển hướng sau 3 giây
    }, 3000);  // Chờ 3000ms (3 giây)

}



document.querySelector('#button-messange').addEventListener('click', () => {
    document.querySelector('.messange-box').style.display = 'none';
})
