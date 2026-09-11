student_name = "Rahul"
console.log(student_name)
console.log(typeof(student_name))
student_age = 20
console.log(typeof(student_age))
isStudent = true
console.log(typeof(isStudent))
employee = null
console.log(employee)
console.log(typeof(employee))
numOne = 99878345678945678905678909n
console.log(typeof(numOne))
mayur = Symbol("MAYUR")
console.log(mayur)
mayur1 = Symbol("MAYUR")
console.log(mayur1)
console.log(mayur == mayur1)

students = ["Amar"]
fruitList = ["Apple", "Banana","Orange"]; empList = ["Rahul", "Amar","Rohan"]
numList = [43, 65, 12, 98, 8]
console.log("fruitList", typeof(fruitList), "EmpList" ,typeof(empList))
console.log(typeof(numList))
console.log("--------------------------")
empObj = {
    name:"Amar",
    sal:12345678,
}
console.log(typeof(empObj))
// n1 = 90; 
// n2 = 7 
// 90/7 
// x = 0 

// Arithmetic Operators
// + , / , -, * , ** , ++ , --
// sum = n1+ n2;
// diff = n1 - n2 
// mul = n1* n2 
// div = n1 / n2 
// modulus = n1 % n2
// cube = n1**3 
// x = x+1 
// x = 1 
// x = x+ 1 
// x++ 
// x-- 

// Assignment Operators
// = ,  += ,  -= ,    *= ,     /= ,    %=

//  = assign value 
//  x = 0 
//  x = x + 5 
//  x = 5 
//  x = x+ 5
//  x = 10 
//  x += 5 
// x = x-5
// x -= 5

//  Comparison Operators
//  ==   ===   >    >=  >==  <   <=  <== 

x = 10
y = "10"
console.log(x == y) //compare only value
console.log(x === y) // compare value with datatypes
marks = 35
marksForPass = 35
console.log(marks >= marksForPass)



//   Logical Operators
console.log("--------Logical Operators------------------")

isAdmin = true 

console.log(!isAdmin)
age = 20 ; nationality = ""

console.log(age > 18 && nationality == "Indian")

// 0    &&     0   = false
// 0    &&     1   = false
// 1    &&     0   = false
// 1    &&     1   = true

isStudent = true 
isAdmitted = false
// 0     ||    0   = false
// 0     ||    1   = true
// 1     ||    0   = true
// 1     ||    1   = true


