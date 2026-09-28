// add(n1,n2)
// add(2,4)
// greeting(userName)
// greeting("Amar")

// function fName(){}
// fName () => {}

fruits = ["Apple","Orange","Grapes","Banana","Mango"]
numArray = [1,2,3,4,5,6,7,8,9,10]


fruits.forEach((value, idex) => console.log("I like to eat",value.toUpperCase()))

numArray.map((elmt,index)=>{
    console.log("Cube of", elmt, " is ", elmt**3)
})

// filter()
evenNum = numArray.filter((num)=> num % 2 == 0)
console.log(evenNum)

oddNum = numArray.filter((n)=> n % 2 != 0)
console.log(oddNum)

primeNums = numArray.filter(n=>{
    if(n == 1 ){
        return n
    }
    if(n == 2){
        return n
    }
    // limit = Math.floor(Math.sqrt(n))
        // for(i=2; i<=limit; i+=2){
        for(i=2; i<n;i++){
            // console.log(i)
            if(n % i == 0){
                return false
            }
        }
        return n
})

console.log(primeNums)
console.log("________________")
oddNumSqaure  = numArray.filter(v =>v %2 != 0).map(n=>n**2)
console.log(oddNumSqaure)

// find()
app = fruits.find((f)=>f == "Apple")
console.log((app))
// indexOf()
bananIndex = fruits.indexOf("Banana")
console.log(bananIndex)

bananaInd = fruits.findIndex((v)=>v=="Banana")
console.log(bananaInd)

// sort()

// concat()
console.log([11,22,44].concat([33,99,66]).sort())


// some() 
marks = [20,30,50,39,54,-90]
console.log(marks.some(e=> e>150))



// every() 
console.log(marks.every(e=> e>0))
console.log("___________________")
// includes()
console.log(fruits.includes("apple"))

console.log(fruits.filter(v=> v.toLowerCase().includes("apple")))

numA = [2,6,9,4,1]
// reduce()

sum = 0
for(i=0;i<numA.length;i++){
    sum = sum+numA[i]
}

numA.reduce((sum, v,index)=>{sum+=v}, 0)

