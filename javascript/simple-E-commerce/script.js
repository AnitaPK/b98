let products = [
    { id: 1, name: "Laptop", price: 1000, category: "Electronics", stock: 5 },
    { id: 2, name: "Headphones", price: 200, category: "Electronics", stock: 15 },
    { id: 3, name: "T-shirt", price: 20, category: "Apparel", stock: 50 },
];
const productListElmt = document.querySelector("#productList")
const NameElmt = document.querySelector("#Name")
const CategoryElmt = document.querySelector("#Category")
const PriceElmt = document.querySelector("#Price")
const StockElmt = document.querySelector("#Stock")
const addNewBtnElmt = document.querySelector("#addNewBtn")

function saveToLocal(p) {
    localStorage.setItem("B98", JSON.stringify(p))
}
function getFromLocal() {
    return JSON.parse(localStorage.getItem("B98"))
}

function renderProducts(prod) {
    productListElmt.innerHTML = prod.map((product, i) => `
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card text-bg-info " style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${product.category}</h6>
    <p>Price : $ ${product.price}</p>
    <p>Stock : ${product.stock} </p>
    <button class="btn btn-primary">Edit</button>
    <button class="btn btn-primary" onclick=deleteProd(${product.id})>Delete</button>
  </div>
</div>  
            </div>
`).join('')
}
function AddNewProduct() {
    newProductObj = {
        id: Date.now(),
        name: NameElmt.value,
        category: CategoryElmt.value,
        price: PriceElmt.value,
        stock: StockElmt.value
    }
    prodsFromLocal = getFromLocal()
    prodsFromLocal.push(newProductObj)
    renderProducts(prodsFromLocal)
    saveToLocal(prodsFromLocal)
    NameElmt.value = ''
    CategoryElmt.value = ''
    PriceElmt.value = ''
    StockElmt.value = ''
}
addNewBtnElmt.addEventListener("click", AddNewProduct)

function deleteProd(ID) {
    productFromLocal = getFromLocal()
    IndexProd = productFromLocal.findIndex((p) => p.id == ID)
    if (IndexProd == -1) {
        alert("Product not found")
    } else {
        productFromLocal.splice(IndexProd, 1)
        saveToLocal(productFromLocal)
        renderProducts(productFromLocal)
    }
}

window.addEventListener('load', () => {
    savedToLocal = JSON.parse(localStorage.getItem("B98"))
    if (savedToLocal.length > 0) {
        renderProducts(savedToLocal)
    } else {
        localStorage.setItem("B98", JSON.stringify(products))
        renderProducts(products)
    }
})



// quote = "Dont be busy. Be productive"
// localStorage.setItem("b98",quote)

// returnFromLocal = localStorage.getItem("b98")
// console.log(returnFromLocal)

// numArray = [1,2,3,4,5,6]
// console.log(typeof(numArray))
// localStorage.setItem("b98Num", JSON.stringify(numArray))
// numArrayReturn = JSON.parse(localStorage.getItem("b98Num"))
// console.log(numArrayReturn)
// console.log(typeof(numArrayReturn))


