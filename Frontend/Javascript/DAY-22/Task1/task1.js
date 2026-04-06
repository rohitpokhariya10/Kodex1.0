const img = document.querySelector('.dice')
const btn = document.querySelector('.btn')
const box = document.querySelector('main')

let dice1 = document.createElement("img")
//console.log("dice1",dice1)
let dice2 = document.createElement("img")
//console.log("dice2",dice2)


dice1.classList.add("dice1")
dice2.classList.add("dice2")

dice1.src = "assets/dice1.png"
dice2.src = "assets/dice1.png"
// console.log(dice1.src , dice2.src)

box.append(dice1, dice2)
btn.addEventListener('click', () => {
    console.log("clicked")
    
  //h3 2 the tuh array meajayenge h3 and forEach kake remove krdo unhe
  //remove()--> element pure page se permanent remove ho jayega
  box.querySelectorAll("h3").forEach(elem => elem.remove())

    let random1 = Math.floor(Math.random() *6) + 1
    console.log(random1)
    let random2 = Math.floor(Math.random() * 6) + 1
    console.log(random2)

    dice1.src = "assets/dice" + random1 + ".png"
    dice2.src = "assets/dice" + random2 + ".png"

    if(random1 > random2){
       let winner = document.createElement('h3')
       winner.classList.add("winner")
       winner.innerHTML = "Left team Wins"
       box.append(winner)

       let 
       looser = document.createElement('h3')
       looser.classList.add("looser")
       looser.innerHTML = "Right team loose"
       box.append(looser)
    }
    else if(random2 > random1){
       let winner = document.createElement('h3')
       winner.classList.add("winner")
       winner.innerHTML = "Right team Wins"
       box.append(winner)

       let looser = document.createElement('h3')
       looser.classList.add("looser")
       looser.innerHTML = "Left team loose"
       box.append(looser)

    }
    else{
        let draw = document.createElement('h3')
        draw.classList.add('draw')
        draw.innerHTML = "Its a draw"
        box.append(draw)

    }
    
})
