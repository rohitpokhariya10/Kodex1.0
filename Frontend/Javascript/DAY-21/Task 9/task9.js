const p = document.querySelector('p')
const button = document.querySelector('button')


button.addEventListener('click' , ()=>{
    console.log("clicked")
    p.innerHTML="Button clicked"
    //disabled ek HTML property hai jo kisi element ko band (inactive) kar deta hai.
    button.disabled=true
})