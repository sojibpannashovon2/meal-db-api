// console.log('working');
const loadData = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
        .then(res => res.json())
        .then(data => displayData(data.meals))
}
const displayData = info => {
    info.forEach(element => {
        console.log(element)
        const mealContainer = document.getElementById('meal-container');
        // mealContainer.innerText = '';
        mealContainer.innerText = '';
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('card')
        mealDiv.innerHTML = `
                <div class="mx-4 mt-4 translate-y-0 ">
                            <a href="#" blur-shadow-image="true">
                                <img class="w-auto rounded-lg"
                                    src="${element.strMealThumb}"
                                    alt="card image" />
                            </a>
                        </div>
                        <div class="text-secondary flex-1 p-6">
                            <span class="text-sm font-bold uppercase text-orange-500">${element.strMeal}</span>
                            <a href="#">
                                <h5 class="mt-2 font-medium text-blue-300">Dice-catagory: ${element.strCategory}</h5>
                            </a>
                            <p class="mb-3">
                               ${element.strInstructions}
                            </p>
                          
                            
                        </div>
                        
        `
        mealContainer.appendChild(mealDiv);
    });
}

const searchMeal = () => {

    const searchFieldString = document.getElementById('search-field');
    const searchField = searchFieldString.value;
    console.log(searchField);
    loadData(searchField);
    searchFieldString.value = '';
}
loadData('rice');