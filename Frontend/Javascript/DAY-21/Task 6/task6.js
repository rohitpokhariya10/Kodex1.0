const button = document.querySelector('button')


let dark = false
button.addEventListener('click' , ()=>{
    console.log("dark")
    if(!dark){
    document.body.style.backgroundColor = 'black'
    button.style.backgroundColor = 'white'
    button.style.color = ' black'
    dark=true
    }
    else{
    document.body.style.backgroundColor = 'white'
    button.style.backgroundColor = 'black'
    button.style.color = ' white'
    dark=false
    }

})