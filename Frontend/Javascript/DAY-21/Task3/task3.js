const box = document.querySelector('.box')
const btn = document.querySelector('button')
const h2 = document.querySelector('h2')


let visible = true//start me visible hoga
btn.addEventListener('click' , ()=>{
    console.log("clicked")
    if(visible){
    visible = false
    box.style.backgroundColor = 'transparent'
    box.style.height= '0px'
    h2.innerHTML = 'Box is invisible'

    }
    else{
        box.style.backgroundColor = 'white'
        box.style.height= '150px'
        h2.innerHTML = 'Box is visible'
        visible = true
    }
})