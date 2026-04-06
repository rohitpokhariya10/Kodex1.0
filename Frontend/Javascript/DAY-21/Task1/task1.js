//console me properties dikhti hai but methods ese nhi dikhte
//console.log(window)-->global object iske andar hota hai document objecgt but querySelector() ek method hai tabhi vo console me nhi dikhta hain
const box = document.querySelector('.para')
const p = document.querySelector('.para p')
const btn = document.querySelector('button')
  let change = false
btn.addEventListener('click' ,function(){
    // console.log("clicked")
    // console.dir(p)//ye pure oject format me dikhayega
    if(!change){
        //change false hoga
        p.innerHTML ="Welcome"
        change=true
    }
    else{
        //change ab true hoga
         p.innerHTML ="Hello"
         change = false

    }
})
