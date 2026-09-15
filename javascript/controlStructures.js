name = "Rahul"
// var old 
// let 
// const

let age = 20
age =21
const rahulFullName = "Rahul Sharma"
// conditions 

// if , else if , else 

// isLoggedIn = true 
// num % 2 == 0
// marks >= 35

// if(isLoggedIn){
//     console.log("Welcome to website")
// }else{
//     console.log("Please logged in")
// }
// if(marks >= 35){
//     console.log("Welcome to next year")
// }else{
//     console.log("Better luck next time")
// }
marks = -50  

if(marks >= 0 && marks<=100){
    if(marks <35){
        console.log("Fail Grade D")
    }else if(marks >= 35 && marks<60){
        console.log("Pass with Grade C")
    }else if(marks >=60 && marks <75){
        console.log("Pass with Grade B")
    }else{
        console.log("Pass with Grade A")
    }
}else{
    console.log("Please enter valid marks")
}

// check given number is odd or even 
num = 8 
if(num % 2 == 0){
    console.log(num," number is even")
}else{
    console.log(num, "Number is odd")
}

// switch 
today = new Date()
day = today.getDay()
// day = 15
console.log("day", day)
switch (day){
    case 0:
        console.log("Its sunday")
        break
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    default:
        console.log("No such day")
}



// loops 

// for()
// 10 t5mes 
// 7 table 
// 7 * 1 = 7 
// 7 * 2 = 14 
// 7 * 3 = 21
// 7 * 4 = 28
// 7 * 5 = 35
// 7 * 6 = 42
// 7 * 7 = 49
// 7 * 8 = 56
// 7 * 9 = 63
// 7 * 10 = 70 

for(i = 1 ; i<=10 ; i++){
 console.log(7 * i) 
}

console.log("-------------------")
j = 1
// while()

while(j<=10){
    console.log(7*j)
    j++
}

console.log("-------------------")

for(i=0;i<=10; i++){
    if(i == 5){
        break
    }
    console.log(i)

}

console.log("-------------------")

for(i=0;i<=10; i++){
    if(i == 5){
        continue
    }
    console.log(i)

}
console.log("-------------------")

// do{}while()
z =10
do{
    console.log("do while",z)
    z++
}while(z<=5)

while(z<=5){
    console.log("while",z)
    z--
}