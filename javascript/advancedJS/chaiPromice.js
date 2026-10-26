let chaiWithRushi = new Promise((resolve, reject)=>{
    digvijay = false

    if(digvijay){
        resolve("CHAI")
    }else{
        reject("Urgent Call ")
    }
})

chaiWithRushi
.then((data)=>console.log(data))
.catch((error)=>console.log(error))


const pizzaPromise = new Promise((res,rej)=>{
    setTimeout(()=>{
        isAvailable = false

        if(isAvailable){
            res("PIZZA DELIVERED")
        }else{
            rej("SHOP CLOSED")
        }
    },5000)
})
pizzaPromise
.then((data)=>console.log(data))
.catch(err=>console.log(err))

