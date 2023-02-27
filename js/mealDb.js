console.log('working');
const loadData = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`)
        .then(res => res.json())
        .then(data => displayData(data.meals))
}
const displayData = info => {
    info.forEach(element => {
        console.log(element)
        const mealContainer = document.getElementById('meal-container');
        const mealDiv = document.createElement('section');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
       
                <div class="card">
                    <img src="${element.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
        
        `
        mealContainer.appendChild(mealDiv);
    });
}
loadData()