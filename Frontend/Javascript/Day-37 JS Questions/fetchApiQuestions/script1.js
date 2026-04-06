//**1.** Write a fetch request that gets data from `https://jsonplaceholder.typicode.com/users` and logs the data.
function fetchData(){
let getData = fetch(`https://jsonplaceholder.typicode.com/users`)
// console.log(g)
let res = getData.then((e)=>e.json())//promise
let data = res.then((elem)=> console.log(elem))

}

fetchData()



//**2.** Fetch data from an API and convert the response using `res.json()`.
function q2(){
fetch(`https://jsonplaceholder.typicode.com/users`)
// console.log(g)
.then((e)=>console.log(e.json()))

}
//q2()

//**3.** Write a fetch request that logs the **response object** before converting it to JSON.
function q3(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((e)=>console.log(e))//response object
}
//q3()

//**4.** Fetch data and log `"Data loaded"` after the JSON is received.
function q4(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((e)=>e.json())//response object
    .then((elem)=>{
        console.log(elem)
        console.log('Data loaded')
    })
   
}
//q4()

//**5.** Fetch users and print the **total number of users returned**.
function q5(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((e)=>e.json())//response object
    .then((elem)=>{
        console.log(elem)
        console.log(elem.length)
    })
   
}
//q5()

//**6.** Write a fetch request that handles errors using `.catch()`.
function q6(){
    fetch(`https://jsonplaceholder.typicode.com/user`)
    .then((e)=>e.json())//response object
    .then((elem)=>{
        console.log(elem)
  
    })
    .catch((error)=> console.log(`error is ${error}`))
   
}
//q6()