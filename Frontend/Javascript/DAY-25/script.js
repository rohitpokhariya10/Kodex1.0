const statusImg = document.querySelector('.status img')
const fullImage = document.querySelector('.full')
const growth = document.querySelector('.growth')
var grow = 0
statusImg.addEventListener('click', () => {
  

    fullImage.style.display = 'block'
    fullImage.style.backgroundImage = 'url(https://images.unsplash.com/photo-1769540209459-ae620b0390ce?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0)'


    let interval = setInterval(()=>{
      grow++
      console.log(grow)
      growth.style.width =`${grow}%`
      
    },50)//50*100=5000ms -->5sec
    
    setTimeout(() => {
        fullImage.style.display = 'none'
         clearInterval(interval)//5 sec baad interval clearho jayega
          grow=0
          growth.style.width =`${grow}%`
    }, 5000)

   

})
