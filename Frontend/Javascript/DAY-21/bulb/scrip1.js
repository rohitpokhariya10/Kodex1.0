const bulb  = document.querySelector('.bulb')
const btn = document.querySelector('.btn')

let isOpen = false
btn.addEventListener('click', ()=>{
    console.log("clicked")
    if(!isOpen){
        console.log("bulb is on")
    bulb.style.boxShadow = ' 0 0 20px #ffd54f'
    bulb.style.backgroundColor = '#ffd54f'
    btn.innerHTML = 'OF'
    isOpen = true
    }
    else{
        //isOpen true hogya
        console.log("bulb is of")
         bulb.style.boxShadow = ' 0 0 0px white '
         bulb.style.backgroundColor = ''
         btn.innerHTML = 'ON'
         isOpen = false
        
    }
})