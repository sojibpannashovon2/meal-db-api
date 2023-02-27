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
        // mealContainer.innerText = '';
        const mealDiv = document.createElement('div');
        // mealDiv.classList.add('card')
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
            <div class="card p-3  object-fit-contain  ">
                <img src="${element.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body ">
                    <h5 class="card-title">${element.strMeal}</h5>
                    <p class="card-text  ">${element.strTags ? element.strTags : "Not Found !!!"} We are dedicated to addressing food insecurity for homebound seniors. We provide food & pantry items to those in need, including thousands of nutritious meals. Help Seniors Today. Children are in Need. </p>
                </div>
                <!-- Button trigger modal -->
                <button onClick = "singleMealDataload2(${element.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                   Meal-Details
                </button>
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

const singleMealDataload = idMeal => {
    // console.log("working", idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`

    fetch(url)
        .then(res => res.json())
        .then(dot => singleMealDetails(dot.meals[0]))
        .catch(error => {
            console.log(error)
        });
}
const singleMealDataload2 = async (idMeal) => {
    const url2 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    try {
        const res = await fetch(url2);
        const details = await res.json();
        singleMealDetails(details.meals[0]);
    }
    catch (error) {
        console.log(error);
        console.log("Its not working babe");
    }
}




const singleMealDetails = id => {
    console.log(id)
    document.getElementById('exampleModalLabel').innerText = id.strMeal;

    const modalBody = document.getElementById('modal-body')
    modalBody.innerHTML = `
                    <img class="img-fluid"  src="${id.strMealThumb}">
                   
                 
                    `

}
loadData('rice');