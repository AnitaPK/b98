const receipeListElmt = document.querySelector("#receipeList")
const loaderElmt = document.querySelector("#loader");
const errorMessageElmt = document.querySelector("#errorMessage");
const searchKeyElmt = document.querySelector("#searchKey")
let recArray = []
let category = []
const categoryElmt = document.querySelector("#category")

function renderReceipes(receipes) {
    receipeListElmt.innerHTML = receipes.map((rec, i) => `
            <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-2">

                <div class="card h-100 shadow-sm">

                    <img
                        src="${rec.strMealThumb}"
                        class="card-img-top"
                        alt="${rec.strMeal}"
                        loading="lazy"
                    >

                    <div class="card-body d-flex flex-column">

                        <h5 class="card-title">
                            ${rec.strMeal}
                        </h5>

                        <p class="card-text">
                            <span class="badge text-bg-success">
                                ${rec.strCategory || "Meal"}
                            </span>

                            <span class="badge text-bg-info">
                                ${rec.strArea || "International"}
                            </span>
                        </p>

                        <div class="mt-auto">

                            <button
                                class="btn btn-primary btn-sm"
                                onclick="showRecipeDetails('${rec.idMeal}')"
                                 data-bs-toggle="modal" 
                                 data-bs-target="#exampleModal"
                            >
                                More Info
                            </button>

                            <a
                                href="${rec.strYoutube || "#"}"
                                class="btn btn-danger btn-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Video
                            </a>

                        </div>

                    </div>

                </div>

            </div>
            </div>
    `).join('')
}



const recipeModal = new bootstrap.Modal(
    document.querySelector("#recipeModal")
);

const recipeDetails = document.querySelector("#recipeDetails");

async function showRecipeDetails(ID){
 recipeDetails.innerHTML = `
        <div class="text-center py-4">
            <div class="spinner-border text-primary"></div>
            <p class="mt-2">Loading recipe details...</p>
        </div>
    `;

    recipeModal.show();

    response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`)
   
    if(response.ok){
        data = await response.json()
        console.log(data)
        receipe = data.meals[0]
        console.log(receipe)

        recipeDetails.innerHTML = `<div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${receipe.strMeal}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src=${receipe.strMealThumb} alt="" class="CutomIMGMODAL"/>
        <p>${receipe.strInstructions}</p>
         <p class="card-text">
                            <span class="badge text-bg-success">
                                ${receipe.strCategory || "Meal"}
                            </span>

                            <span class="badge text-bg-info">
                                ${receipe.strArea || "International"}
                            </span>
                        </p>

      </div>
      `
    }

}


function searchByName(){
    serachKeyValue = searchKeyElmt.value 
    filterByName = recArray.filter((m=> m.strMeal.toLowerCase().includes(serachKeyValue.toLowerCase())))
    renderReceipes(filterByName)
}




async function fetchData() {
    // Show loader before fetching
    loaderElmt.classList.remove("d-none");

    // Clear previous content and errors
    receipeListElmt.innerHTML = "";
    errorMessageElmt.classList.add("d-none");

    await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            resR = data.meals
            recArray = resR
            console.log(resR)
            category = resR.map(m=> m.strCategory)
            category = [...new Set(category)]
            renderCategory(category)
            console.log(category)
            renderReceipes(resR)
        })
        .catch(err => console.log(err))
    
         // Hide loader after success or failure
        loaderElmt.classList.add("d-none");
}
function renderCategory(cat){
    categoryElmt.innerHTML = cat.map(v=>`
        <option value=${v}>${v}</option>
    `)
}
function filterByCategory(){
        catForFilter = categoryElmt.value
        filterByCat = recArray.filter(m=> m.strCategory == catForFilter)
        renderReceipes(filterByCat)
}


window.addEventListener('load', () => {
    fetchData()

})