//**7.** Create a Promise that resolves with `"Hello"` and print it using `.then()`.
function q1(){
let prom = new Promise((resolve,reject)=>{
resolve('Hello')
})
console.log(prom)

}
//q1()


// let promise = new Promise((res,rej)=>{
//     return rej('hi')
// })
// console.log(promise.catch((e)=>console.log(e)))
// // console.log(promise)



//**8.** Create a Promise that rejects with `"Something went wrong"` and handle it using `.catch()`.
function q2(){
    let promise = new Promise((resolve,reject)=>{
        return reject(`Something went wrong`)
    })
    promise.catch((error)=> console.log(error))
}
//q2()

//**9.** Write a Promise chain with **two `.then()` blocks**.
function q3(){
    let prom = new Promise((res,rej)=>{
        return res(`sucess hi khede ladleee...`)
    })
    .then((e)=>{
        console.log(e)
        return e
    })
    .then((elem)=>console.log(elem))

    console.log(prom)
}
//q3()


//**10.** Create a Promise that resolves after **2 seconds** using `setTimeout`.
function q4(){
    let timeout=setTimeout(()=>{
    let promise = new Promise((res,rej)=>{
        return res(`resolve after 2 seconds....`)
    })
    promise.then((e)=>console.log(e))

},2000)
console.log(timeout)//setTimeout() timer ID return karta hai isliye 1 ata hai
}
//q4()

//**11.** Write a Promise chain that prints `"Step 1"` then `"Step 2"`.
function q5(){
    let prom = new Promise((resolve,reject)=>{
        return resolve(`Steps print krle ladle...`)
    })
    .then((e)=>{
        console.log(e)
        console.log(`step 1`)
        return `Step 2`
    })
    .then((elem)=> console.log(elem))
}
//q5()