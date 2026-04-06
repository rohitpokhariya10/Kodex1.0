const imgUrls = [
    'https://images.unsplash.com/photo-1771387925506-1eacc7523f89?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1771518667308-65113b49c29d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1771533679967-1b6f3a10be02?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1771591947330-814081db8626?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1769540209459-ae620b0390ce?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]


const button = document.querySelector('button')
const container = document.querySelector('.img-container')

button.addEventListener('click' , ()=>{
    console.log("hi")
     container.innerHTML = ''  // purani image hatao
    const imgPicker = Math.floor(Math.random()*imgUrls.length)
    let img  = document.createElement('img')
   
    img.classList.add('img')
    console.dir(img)
  
    img.src = imgUrls[imgPicker]
    console.log(img.src)

   container.append(img)

    
})
