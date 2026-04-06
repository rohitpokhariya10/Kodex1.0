// Select elements from DOM
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const main = document.querySelector('main')
const input = document.querySelector('input')
const button = document.querySelector('button')
const result = document.querySelector('h2')

// Run when button is clicked
button.addEventListener('click' , ()=>{

    // Check if input is greater than 50
    if(input.value > 50){
        alert("You cant give the value greater than 50")
        input.value = ""   // clear input
        return             // stop further code
    }

    result.innerHTML = ""   // clear old result

    let userInput = Number(input.value)   // convert to number
    let lotteryResult = Math.ceil(Math.random()*51) // random 1-51

    console.log("Lottery:", lotteryResult)
    console.log("User:", userInput)

    // Compare lottery and user input
    if(lotteryResult === userInput){
        result.innerHTML = "Win"
        result.classList.remove('fail')
        result.classList.add('win')
    }else{
        result.innerHTML = "Try again"
        result.classList.remove('win')
        result.classList.add('fail')
    }

    input.value = ""   // clear input after result
})