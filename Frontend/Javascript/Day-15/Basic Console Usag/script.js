function question1(){
let userName = prompt("Enter your Name")
let hobby = prompt("Enter your favourite Hobby")
console.log(`My name is ${userName} and my hobby is ${hobby}`)
}
//question1()

function question2(){
// let input = prompt("Enter the calculation")
console.log(`${45*2-10}`);

}
//question2()

function question3(){
    let date  = new Date()//js date object banadeta hai jo current date btata hai
    console.dir(date);//dir-->obj ka poora structure dikhadeta hai
    console.log(date.getFullYear());
    
}
//question3()

function question4(){
    const fName = prompt("Enter your First Name")
    const lName = prompt("Enter your Last Name")
    console.log(`My full name is ${fName + lName}`)

}
//question4(removeEventListener)

function question5(){
    let a = 5
    console.log(a)
    a = 10//update
    console.log(a);
}
//question5()


function question6(){
    let customErrorMessage = prompt("Enter your custom error message")
    console.error(customErrorMessage)
}
//question6()
function q7(){
let square = prompt("Enter a number u want a square")
console.log(square*square)
}
//q7()

function question8(){
let isStudent = true
console.log(isStudent)

let isGirl = false
console.log(isGirl)
}
//question8()

function q9(){
    let age = Number(prompt("Enter yoour age"))
    if(age > 18) console.log("Greater than 18")
    else console.log("Smalller than 18")

}
//q9()
function q10(){
let a = 0
let b = 100
console.log(a/b)
    
}
//q10()

///Variables & Data Types
