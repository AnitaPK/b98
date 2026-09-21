// Functions ===> Reusable block of code 

function makeJuice(){
    console.log("Juice Ready")
}
makeJuice()
makeJuice()
makeJuice()
makeJuice()


function makeJuiceFruit(fruit){
    console.log("Juice of ", fruit)
}
makeJuiceFruit("Banana") 
makeJuiceFruit("Apple")
makeJuiceFruit("Banana")
makeJuiceFruit("Mango")

function addition(n1,n2){
    console.log(n1+n2)

}
addition(10,20)
addition(11,98)
addition(67,87)

function division(n1,n2){
    if(n2 == 0){
        return "Cant divide by ZERO"
    }
    divRes = n1/n2
    return divRes
}
console.log(division(100,10))


function cartTotal(dis=20, p1){
    cartAmount =p1 -  (p1  * dis/100)
    return cartAmount
}
ct=cartTotal(50,500)
ct1=cartTotal(1000)

// ARROW function   => 

const multiplication = (n1,n2) => {
    return n1*n2
}
mul = multiplication(20,10)
console.log("multiplication",mul)

const subtraction = (n1,n2) => n1-n2
console.log(subtraction(20,10),"subtraction")
const greet = () => console.log("Welcome to JS")
greet()

// anonymous function 

// function (){}
// ()=>{}

// self invoked anonymous function
(()=>{console.log("I am Magic")})()