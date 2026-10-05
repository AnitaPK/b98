const employee = new Object()
employee.name = "Amit"
console.log(typeof(employee))
const student = {
    name:"Rahul",
    collage:"Bits Pillani",
    age:20,
    subjects:['Math','Computer','Science'],
    address:{
        houseNum:212,
        city:"Pune",
        pinCode:123456
    },
    greet:function(){
        // console.log("Hello")
        return "Welcome .... " + this.name
    }

}


console.log(student.name)
console.log(student["collage"])
subRahul = student.subjects
subRahul.map((s)=>console.log(s))
console.log(student.address.city)
msg = student.greet()
console.log(msg)
student.age = 21

delete student.age 

// CRUD create Read Update Delete 


// for in  
for(k in student){
    console.log("Value",student[k])
    console.log("key",k)
}

// Object.values 
console.log(Object.values(student))
console.log("________________")
// Object.keys 
console.log(Object.keys(student))

Object.keys(student).map(k=>console.log(k))

// Object.entries
console.log(Object.entries(student))

console.log("________________")

studentString = JSON.stringify(student)
console.log(studentString)
console.log(typeof(studentString))

console.log("________________")

studentAsObject = JSON.parse(studentString)
console.log(studentAsObject)
console.log(typeof(studentAsObject))