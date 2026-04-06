const box = document.querySelector('main')
const spoke = document.querySelector('.spoke')


box.addEventListener('mouseenter' , (e)=>{
    console.log(e , "mouseenter")
    box.classList.add('flag')//flag colours
  
    
})
box.addEventListener('mouseleave' , (e)=>{
    console.log(e , 'mouseleave')
     box.classList.remove('flag')
     
    
})