const box = document.querySelector('.box')
const rotateLeft = document.querySelector('.rotateLeft')
const rotateRight = document.querySelector('.rotateRight')


let angle = 0
rotateLeft.addEventListener('click' , ()=>{
    console.log("clicked on rl")
    angle = angle - 20
    box.style.transform = `rotate(${angle}deg)`
    
})
rotateRight.addEventListener('click' , ()=>{
    angle = angle + 20
    console.log("clicked on rr")
    box.style.transform = `rotate(${angle}deg)`
})
document.body.addEventListener('keydown' , (e)=>{
    console.log("pressed " , e)
     if(e.key == 'ArrowLeft'){
           angle = angle - 20
           box.style.transform = `rotate(${angle}deg)`
     }
     if(e.key == 'ArrowRight'){
        angle = angle+20
         box.style.transform = `rotate(${angle}deg)`
     
     }
    
})