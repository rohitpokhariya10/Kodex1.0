//**12.** Convert the following code into `async/await`: `fetch(url).then(res => res.json()).then(data => console.log(data))`
async function  convert(){
  let getData = await fetch(`https://jsonplaceholder.typicode.com/users`)
  console.log(getData)//readable stream

 let res = await getData.json()//api original data dedega
 console.log(res)//print api original data

}
//convert()


//**13.** Write an async function that fetches data and logs it.
async function q13(){
 let getData = await fetch(`https://jsonplaceholder.typicode.com/users`)
  //console.log(getData)//readable stream

 let res = await getData.json()//api original data dedega
 console.log(res)//print api original data
}
//q13()

//**14.** Write an async function that fetches data and stores it in a variable.
async function q14(){
 let getData = await fetch(`https://jsonplaceholder.typicode.com/users`)
  //console.log(getData)//readable stream

 let res = await getData.json()//api original data dedega

}
//q14()

//**15.** Write an async function that waits for a Promise that resolves after **1 second**.
// Revise this question
async function q15(){
    let prom = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            return resolve('Radha Radha')
        },1000)
    })
    let result = await prom
    console.log(result)

}
q15()
