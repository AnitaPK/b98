stud1 = "Rahul"
stud2 = "Amar"
stud3 = "Rohan"


friut1 = "Apple"
fruit2 = 'Banana' 

// array  to store multiple elements 

students = []
console.log(typeof(students))
fruits = new Array()
console.log(typeof(fruits))

numbersArray = [2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

//push() , unshift()  //for add element
//pop() , shift()  // for remove element

students.push("Rahul")
console.log(students)
students.push("Amar")
students.push("Rohan")
console.log(students)

students.unshift("Pooja")
console.log(students)

console.log(students.length)
len = students.length

for(i=0; i<len;i++){
    console.log(students[i])
}

console.log(students)
// students[10] = "Gaurav"
students[len] = "Gaurav"
console.log(students)

// emp = [ 1001, "Kareena", "HR", 100000, ["HR", "Finance"]] 

students.pop()
console.log(students)
students.shift()
console.log(students)

for(i=0;i<students.length;i++){
    console.log(students[i].toUpperCase())
}

for(i=0;i<numbersArray.length;i++){
   console.log("square of ", numbersArray[i], " is ", (numbersArray[i])**2)
}

// for even numbers 
for(i=0;i<numbersArray.length;i++){
    if(numbersArray[i] % 2 == 0){
        console.log(numbersArray[i])
    }
}
//for find odd numbers from given array
for(i=0;i<numbersArray.length;i++){
    if(numbersArray[i] % 2 != 0){
        console.log(numbersArray[i])
    }
}

fruits[0] = "Apple"
fruits[1] = "Banana"
console.log(fruits)
fruits[1] = "Watermelon"
console.log(fruits)
fruits[2] = "Banana"
fruits[3] = "Chickoo"
fruits[4] = "Guava"
fruits[5] = "Strawberry"
fruits[6] = "Pineapple"

console.log("------------------")
// for of    for in 
for(elmt of students){
    console.log(elmt)
}
for (inde in students){
    console.log(inde)
    console.log(students[inde])
}

console.log("********************")
// indexOf , includes, Slice, Splice 
console.log(fruits)
indexOfPeru = fruits.indexOf("Guava")
console.log(indexOfPeru)
indexOfKiwi = fruits.indexOf("Kiwi")
console.log(indexOfKiwi)

Peru = fruits.includes("Guava")
console.log(Peru)
Kiwi = fruits.includes("Kiwi")
console.log(Kiwi)

sliceFruit = fruits.slice(2,4)
console.log(sliceFruit)
console.log(fruits)
// fruits.splice(1, 2)
// console.log(fruits)

fruits.splice(3, 3, "Kiwi","BlueBerry")
console.log("After add kiwi")
console.log(fruits)

// Calculate the Sum of Array Elements

let numbers = [10, 20, 30];
let sum = 0;

//  Find the Maximum Element in an Array

let numbers = [5, 12, 8, 20, 1];
let max = numbers[0];
