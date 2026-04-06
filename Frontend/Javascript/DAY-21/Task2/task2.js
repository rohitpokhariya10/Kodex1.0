const btn = document.querySelector('button')
const box = document.querySelector('.box')

let click = 0
btn.addEventListener('click' , ()=>{
    console.log(click)
    click++
    console.log(click)
    if(click == 1){
    box.style.backgroundColor = 'red'
    
    }
    else if(click==2){
    box.style.backgroundColor = 'green'

    
    console.log(click)
    }
    else if(click == 3){
        box.style.backgroundColor = 'blue'
        click=0
        console.log(click)
    }
})