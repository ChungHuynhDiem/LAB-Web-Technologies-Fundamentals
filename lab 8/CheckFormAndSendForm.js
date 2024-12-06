//function to check the submitted form data

const sendform = document.getElementById('submit-order')

sendform.addEventListener('click',(event) => {
    event.preventDefault(); 
    const ValueSoup = document.getElementById('hidden-soup').value;
    const ValueMainDish = document.getElementById('hidden-main-dish').value;
    const ValueDrink = document.getElementById('hidden-drink').value;
    const ValueSalad = document.getElementById('hidden-saladstarter').value;
    const ValueDerrest = document.getElementById('hidden-dessert').value;

    // if soup is selected

    if (ValueSoup) {
        if (ValueMainDish)//if maindish is selected
        {
            if (ValueDrink)//if drink is selected
            {
                // SuccessMessage(event);
                sendOrder();
                
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
                    // SuccessMessage(event);
                    sendOrder();
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
                // SuccessMessage(event);
                sendOrder();
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
} )


const BoxMessage = document.querySelector('#message-text');

const ErrorMessage = (TypeError, event) => {
    event.preventDefault(); // Prevent form submission
    document.querySelector('.messange-box').style.display = 'flex';
    document.getElementById('button-messange-failure').style.display = 'block'
    document.getElementById('button-messange-success').style.display = 'none';
    switch (TypeError) {
        case 1:
            BoxMessage.innerHTML = `Ничего не выбрано. Выберите блюда для заказа (нажмите кнопку Окей, чтобы вернуться на страницу <a href="pack-lunch.html">"Собрать ланч"</a>)`;
            break;
        case 2:
            BoxMessage.innerHTML = 'Выберите напиток (нажмите кнопку Окей, чтобы вернуться на страницу "Собрать ланч")';
            break;
        case 3:
            BoxMessage.innerHTML = 'Выберите главное блюдо/салат/стартер (нажмите кнопку Окей, чтобы вернуться на страницу "Собрать ланч")';
            break;
        case 4:
            BoxMessage.innerHTML = 'Выберите суп или главное блюдо (нажмите кнопку Окей, чтобы вернуться на страницу "Собрать ланч")';
            break;
        case 5:
            BoxMessage.innerHTML = 'Выберите главное блюдо (нажмите кнопку Окей, чтобы вернуться на страницу "Собрать ланч")';
            break;
        case 6:
            BoxMessage.innerHTML = 'Выберите ланч (нажмите кнопку Окей, чтобы вернуться на страницу "Собрать ланч")';
            break;
    }
}

const SuccessMessage = () => {
    document.querySelector('.messange-box').style.display = 'flex';
    BoxMessage.innerHTML = 'Вы успешно оформили заказ.';
    document.getElementById('button-messange-failure').style.display = 'none';
    document.getElementById('button-messange-success').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.messange-box').style.display = 'none'; // Hide message box after success
        localStorage.clear();
        ResetArrayFood();
        displayAllFood();
        renderOrder();
    }, 3000);
    
    
}


const EventCatch = () => {
    document.querySelector('.messange-box').style.display = 'flex';
    BoxMessage.innerHTML = 'Произошла ошибка при отправке данных. Пожалуйста, попробуйте позже.';
    document.getElementById('button-messange-failure').style.display = 'none';
    document.getElementById('button-messange-success').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.messange-box').style.display = 'none'; // Hide message box after success
    }, 3000);
}


document.querySelector('#button-messange-success').addEventListener('click', () => {
    document.querySelector('.messange-box').style.display = 'none';
})
