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

editProductID = null

function saveToLocal(p) {
    localStorage.setItem("B98", JSON.stringify(p))
}
function getFromLocal() {
    return JSON.parse(localStorage.getItem("B98"))
}

function renderProducts() {
    const prod = getFromLocal()
    productListElmt.innerHTML = prod.map((product, i) => `
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card text-bg-info " style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${product.category}</h6>
    <p>Price : $ ${product.price}</p>
    <p>Stock : ${product.stock} </p>
    <button class="btn btn-primary" onclick=editProduct(${product.id})>Edit</button>
    <button class="btn btn-primary" onclick=deleteProd(${product.id})>Delete</button>
  </div>
</div>  
            </div>
`).join('')
}
function AddNewProduct() {
        prodsFromLocal = getFromLocal()

    if (editProductID == null) {
        newProductObj = {
            id: Date.now(),
            name: NameElmt.value,
            category: CategoryElmt.value,
            price: PriceElmt.value,
            stock: StockElmt.value
        }
        // console.log(newProductObj)
        prodsFromLocal.push(newProductObj)
        // console.log(prodsFromLocal)
       
    } else {
        IndexProd = productFromLocal.findIndex((p) => p.id == editProductID)
        // console.log(IndexProd)
        // console.log(NameElmt.value, CategoryElmt.value, PriceElmt.value, StockElmt.value)

        prodsFromLocal[IndexProd].name = NameElmt.value
        prodsFromLocal[IndexProd].category = CategoryElmt.value
        prodsFromLocal[IndexProd].price = PriceElmt.value
        prodsFromLocal[IndexProd].stock = StockElmt.value

    }
        saveToLocal(prodsFromLocal)
        renderProducts(prodsFromLocal)


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

function editProduct(ID) {
    productFromLocal = getFromLocal()
    IndexProd = productFromLocal.findIndex((p) => p.id == ID)
    if (IndexProd == -1) {
        alert("Product not found")
    } else {

        editProductID = ID
        addNewBtnElmt.textContent = "Update Product"

        prodsFromLocal = getFromLocal()
        productForUpdate = prodsFromLocal.find((p) => p.id == editProductID)

        NameElmt.value = productForUpdate.name
        CategoryElmt.value = productForUpdate.category
        PriceElmt.value = productForUpdate.price
        StockElmt.value = productForUpdate.stock

    }
}

window.addEventListener('load', () => {
    let savedToLocal = getFromLocal()
    if (savedToLocal == null || savedToLocal.length >= 0) {
        renderProducts(savedToLocal)
    } else {
        saveToLocal(products)
        renderProducts(products)
    }
})

// saveToLocal(products)

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


