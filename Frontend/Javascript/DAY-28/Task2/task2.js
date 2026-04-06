var allPeople = document.querySelectorAll('.card')


allPeople.forEach((elem, idx) => {
let isFriend = false
 console.log(isFriend)
    //console.log(elem)--> elem is har ek card hai
    let currentButton = elem.childNodes[5]//current element ka button select karrhe hai
    currentButton.addEventListener('click', () => {

        if (!isFriend) {
            console.log("i am not friend" , isFriend)
            //Agar friend nhi hai tuh friend karo
           // console.log(elem.childNodes[5], idx)
            //console.log("clicked" , idx)
            //console.log(elem.childNodes[3] )
            elem.childNodes[3].innerHTML = 'Friend'
            elem.childNodes[3].style.color = 'green'
            //console.log(elem.childNodes[5])
            elem.childNodes[5].style.backgroundColor = 'red'
            elem.childNodes[5].innerHTML = 'Remove friend'
            isFriend = true
            console.log("ab me friend bngya" , isFriend)
        }
        else {
            console.log("I am friend " , isFriend)
            //friend se stranger bnao
            elem.childNodes[3].innerHTML = 'Stranger'
            elem.childNodes[3].style.color = 'red'

            elem.childNodes[5].style.backgroundColor = '#0095ff'
            elem.childNodes[5].innerHTML = 'Add Friend'

            isFriend = false
            console.log("ab me friend nhi rha" , isFriend)

        }

    })

})