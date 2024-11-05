//function to check the submitted form data

const MyForm = document.querySelector('.form-order');

MyForm.addEventListener('submit', (event) => {

    const ValueSoup = document.getElementById('hidden-soup').value;
    const ValueMainDish = document.getElementById('hidden-main-dish').value;
    const ValueDrink = document.getElementById('hidden-drink').value;
    const ValueSalad = document.getElementById('hidden-saladstarter').value;
    const ValueDerrest = document.getElementById('hidden-dessert').value;

        // neu sup duoc chon
        
        if(ValueSoup)
        {
            if(ValueMainDish)//neu maindish duoc chon
            {
                if(ValueDrink)//neu nuoc duoc chon
                {
                    SuccessMessage(event);
                }
                else// neu nuoc khong duoc chon
                {
                    ErrorMessage(2,event);
                }
            }
            else//neu maindish khong duoc chon
            {
                if(ValueSalad)// neu salad duoc chon
                {
                    if(ValueDrink)// neu nuoc duoc chon
                        {
                            SuccessMessage(event);
                        }
                    else// neu nuoc khong duoc chon
                        {
                            ErrorMessage(2,event);
                        } 
                }
                else // neu salad khong duoc chon
                {
                    ErrorMessage(3,event);
                }
            }
        }
        else // neu soup khong duoc chon
        {
            if(ValueMainDish)// neu maindish duoc chon
            {
                if(ValueDrink)// neu nuoc duoc chon
                {
                    SuccessMessage(event);
                }
            else// neu nuoc khong duoc chon
                {
                    ErrorMessage(2,event);
                } 
            }
            else// neu main dish khong duoc chon
            {
                if(ValueSalad)// neu salab duoc chon
                {
                    ErrorMessage(4, event);
                }
                else// neu salab khong duoc chon
                {
                    if(ValueDrink)//neu nuoc duoc chon
                    {
                        ErrorMessage(5, event);
                    }
                    else// neu nuoc khong duoc chon
                    {
                        if(ValueDerrest)
                        {
                            ErrorMessage(6,event);
                        }
                        else
                        {
                            ErrorMessage(1,event);
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
    document.querySelector('.messange-box').style.display='flex';
    switch (TypeError)
    {
        case 1:
            BoxMessage.innerHTML = 'Ничего не выбрано. Выберите блюда для заказа';
            break;
        case 2:
            BoxMessage.innerHTML = 'Выберите напиток';
            break;
        case 3:
            BoxMessage.innerHTML = 'Выберите главное блюдо/салат/стартер';
            break;
        case 4:
            BoxMessage.innerHTML = 'Выберите суп или главное блюдо';
            break;
        case 5:
            BoxMessage.innerHTML = 'Выберите главное блюдо';
            break;
        case 6:
            BoxMessage.innerHTML = 'Выберите ланч';
            break;
    }
}

const SuccessMessage = (event) => {
    event.preventDefault();
    document.querySelector('.messange-box').style.display='flex';
    BoxMessage.innerHTML = 'Вы успешно оформили заказ.';
    setTimeout(()=>{
        MyForm.submit();
    },3000);
}



document.querySelector('#button-messange').addEventListener('click', () => {
    document.querySelector('.messange-box').style.display='none';
})

