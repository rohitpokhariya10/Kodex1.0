const input = document.querySelector('input')
const p = document.querySelector('p')


input.addEventListener('input' ,(e)=>{
    console.log(e)
    p.innerHTML=`${e.target.value}`
})