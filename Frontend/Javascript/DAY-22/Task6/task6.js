const main = document.querySelector('main')
let red , blue , green
function randomGenerator(){
    
 red = Math.floor(Math.random()*256)
 blue = Math.floor(Math.random()*256)
 green = Math.floor(Math.random()*256)

}

let box = null

for(let i = 1 ; i<= 5 ; i++){
 
    randomGenerator()
    box = document.createElement('div')
    box.style.backgroundColor = `rgb(${red},${green} , ${blue})`
    box.setAttribute('id' , `box-${i}`)
    main.append(box)
    box.addEventListener('click' , function(elem){
        //arrow function me this work nhi karta
     console.log("clicked" , this.getAttribute('id') )
     //this refers current element in the listener
     let clickedBox = this.getAttribute('id')
     this.remove(clickedBox)
    
    })
}
//Note:hum event object ka use bhi kar skte hai ---> e.target
//this <--> e.target
//this represents the exact div element you created and interacted with. That’s why you can directly use this to apply things like getAttribute() or modify style on that specific box.
