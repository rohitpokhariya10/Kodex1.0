const h1 = document.querySelector('h1')
const increment = document.querySelector('.increment')
const decrement = document.querySelector('.decrement')


let count = 0
increment.addEventListener('click' , ()=>{
    console.log("increased")
    count++
    h1.innerHTML=`${count}`

})
decrement.addEventListener('click' , ()=>{
    console.log("decreased")
    count--
    h1.innerHTML= `${count}`

})``