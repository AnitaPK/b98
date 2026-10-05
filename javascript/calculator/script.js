const calculator = {
    n1:0,
    n2:0,
    add:function(num1,num2){
        n1= num1
        n2=num2
        return this.n1+this.n2
    }
}

// obj1 = new calculator()

calculator.add(4,5)

calculator.subtract = function(){
    num1 = Number(document.getElementById("n1").value)
    num2 = Number(document.getElementById("n2").value)
    console.log(num1,num2)
    this.n1 = num1
    this.n2 = num2
    console.log("first",this.n1 )
    return this.n1-this.n2
}

document.getElementById("subtarctBtn").addEventListener('click',()=>{
    document.getElementById("result").textContent = calculator.subtract()
})

