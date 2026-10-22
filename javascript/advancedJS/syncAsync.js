console.log("1")
console.log("2")
console.log("3")
setTimeout(()=>{
  console.log("Data")
},10000)
console.log("4")
console.log("5")

function RenderData(data){
    console.log(data)
}

function fetchData(cb){
    setTimeout(()=>{
        const data = {name:"Mayuresh", branach:"CS"}
        cb(data)
    },3000)
}
fetchData(RenderData)
