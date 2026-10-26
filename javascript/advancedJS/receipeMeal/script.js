const receipeListElmt = document.querySelector("#receipeList")

function renderReceipes(receipes) {
    receipeListElmt.innerHTML = receipes.map((rec, i) => `
            <div class="col mb-2">
                <div class="card" style="width: 18rem;">
                    <img src=${rec.strMealThumb} class="card-img-top" alt=${rec.strMeal}>
                    <div class="card-body">
                    <h5 class="card-title">${rec.strMeal}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
    `).join('')
}









async function fetchData() {
    await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            resR = data.meals
            console.log(resR)
            renderReceipes(resR)
        })
        .catch(err => console.log(err))
}


window.addEventListener('load', () => {
    fetchData()

})