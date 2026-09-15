function checkNumber(){
    n1 = document.getElementById("num1").value 
    if(n1 > 0){
        console.log("Positive number")
    }else if(n1 < 0){
        console.log("Negetive number")
    }else{
        console.log("ZERO")
    }
}

function creatTable(){
    n2 = document.getElementById("num2").value 
    for(i= 1; i<=10; i++){
        console.log(n2, " * ", i, "= ",n2 * i)
    }
}