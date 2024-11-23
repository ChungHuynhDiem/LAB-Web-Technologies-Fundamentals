let soups = [], mainDishes = [], drinks = [], SaladStarter = [], Dessert = [];

FilterCategory = (TypeCategory, data) => {
    let Newcategory = data.filter(item => item.category === TypeCategory);
    return Newcategory;
}

const DataFood = async () => {
    try{
        let response = await fetch('https://edu.std-900.ist.mospolytech.ru/labs/api/dishes')
        let data = await response.json();
        soups = FilterCategory('soup', data);
        mainDishes = FilterCategory('main-course', data);
        drinks = FilterCategory('drink', data);
        SaladStarter = FilterCategory('salad', data);
        Dessert = FilterCategory('dessert', data);
        return data
    }
    catch(error){
        console.log('Error fetching data:', error);
    }
}




