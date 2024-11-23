// food filter function

function FilterFood() {
    const allSetionFood = document.querySelectorAll('.FilterProcess');
    allSetionFood.forEach(SectionFood => {
        const AllFilter = SectionFood.querySelectorAll('.filter');
        const BlockFood = SectionFood.querySelector('.block-food');
        AllFilter.forEach(Filter => {
            const allButtons = Filter.querySelectorAll('.button-filter input'); // Select the input buttons inside
            allButtons.forEach(button => {
                button.addEventListener('click', (even) => {
                    const Kind = even.target.getAttribute('data-kind');

                    const isActive = button.classList.toggle('active');// Check if the button has the active class
                    if (isActive)// If the button is becoming active, remove active from other buttons
                    {
                        allButtons.forEach(ItemButton => {
                            if (ItemButton !== button)
                                ItemButton.classList.remove('active');
                        })
                    }

                    ChooseArray(Kind, BlockFood);
                })
            })
        })
    })
}

FilterFood();

const previousFilter = {
    soup: null,
    maindish: null,
    saladstarter: null,
    drink: null,
    dessert: null,
}//save previous filter value

function ChooseArray(Kind, BlockFood) {//Select the array type to process the filter
    const DataArray = BlockFood.getAttribute('data-array');
    // console.log(DataArray);
    if (DataArray === 'array-soups') {
        PerformFilter('soup', soups, BlockFood, Kind);
    }
    else if (DataArray === 'array-maindishes') {
        PerformFilter('maindish', mainDishes, BlockFood, Kind);
    }
    else if (DataArray === 'array-drinks') {
        PerformFilter('drink', drinks, BlockFood, Kind);
    }
    else if (DataArray === 'array-saladstarters') {
        PerformFilter('saladstarter', SaladStarter, BlockFood, Kind);
    }
    else if (DataArray === 'array-desserts') {
        PerformFilter('dessert', Dessert, BlockFood, Kind);
    }
}


const PerformFilter = (valuefiletr, array, blockfood, Kind) => {  //valuefiletr: index of previousFilter, array: array to process, blockfood: where class='food' are stored, Kind:type of food to filter
    const AllFood = blockfood.querySelectorAll('.food');
    // console.log(DataArray);
    if (previousFilter[valuefiletr] === null) {
        AllFood.forEach(Food => {
            const DataDish = Food.getAttribute('data-dish');
            array.forEach(item => {
                if (DataDish === item.keyword && Kind !== item.kind) {
                    Food.style.display = 'none';
                }
            })
        })
        previousFilter[valuefiletr] = Kind;
    }
    else if (previousFilter[valuefiletr] === Kind) {
        AllFood.forEach(Food => {
            Food.style.display = 'flex';
        })
        previousFilter[valuefiletr] = null;
    }
    else {
        AllFood.forEach(Food => {
            const DataDish = Food.getAttribute('data-dish');
            array.forEach(item => {
                if (DataDish === item.keyword && Kind !== item.kind) {
                    Food.style.display = 'none';
                }
                else if (DataDish === item.keyword && Kind === item.kind) {
                    Food.style.display = 'flex';
                }
            })
        })
        previousFilter[valuefiletr] = Kind;
    }
}