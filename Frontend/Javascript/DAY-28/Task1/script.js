let nav = document.querySelector('nav')


let body = document.body

body.addEventListener('wheel' , (dets)=>{
    console.log(dets.deltaY)
    if(dets.deltaY > 0){
        //means positive
        nav.style.transform = 'translateY(-100%)'
    }else{
        //dets.deltaY is negative
        nav.style.transform = 'translateY(0%)'
    }
})