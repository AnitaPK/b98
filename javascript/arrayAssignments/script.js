const inputTaskElmt = document.getElementById("inputTask")
const addNewTaskBtnElmt = document.getElementById("addNewTaskBtn")
const clearAllBtnElmt = document.getElementById("clearAllBtn")
const toDosElmt = document.getElementById("toDos")

let toDos = []

function addNewTask(){
    toDo = inputTaskElmt.value 
    toDos.push(toDo) 
    inputTaskElmt.value = ''
    console.log(toDos)
    renderToDos()
}

addNewTaskBtnElmt.addEventListener('click', addNewTask)

function renderToDos(){
    toDosElmt.innerHTML = toDos.map((td,i)=>`
                            <p>${td} <button class="btn btn-danger" onclick="deleteToDo(${i})">Delete</button></p>
    `).join("")
}


function deleteToDo(index){
    toDos.splice(index, 1)
    renderToDos()
}


clearAllBtnElmt.addEventListener("click", ()=>{
    toDos = []
    renderToDos()
})