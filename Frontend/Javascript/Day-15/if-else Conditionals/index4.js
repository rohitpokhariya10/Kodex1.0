//If-else Conditionals
function q31(){
    let number = Number(prompt("Enter a number"))
    if(number >= 0) console.log("Positive number "+ "The number is" + "   " + number)
    else console.log("Negative Number" + "The number is" + " " + number)
}
//q31()

function q32(){
       let age = Number(prompt("Enter the age"))
    if(age >= 18) console.log("Adult")
    else console.log("Minor")

}
//q32()

function q33(){
    let number = Number(prompt("Enter a number"))
    if(number%2==0)console.log("even")
        else console.log("odd")
}
//q33()

function q34(){
    let a = Number(prompt("Enter first number"))
    let b = Number(prompt("Enter second number"))
    if(a > b) console.log("Gretest number is a which is"+"  " + a)
        else console.log("Greatest number is b which is"+ "  " + b)
}
//q34(1)

function q35(){
    let marks = Number(prompt("Enter ur marks"))
    if(marks > 100 || marks < 0){
        console.log("Invalid marks")
        return
    }
    if(marks >=90) console.log("Excellent")
        else if( marks >= 70) console.log("Good")
    else console.log("Needs Improvement")

}
//q35()

function q37(){
// includes ka matlab-->kya ye cheez list/string ke andar hai ya nhi?
//includes always return--> true/false
    let alphabet = prompt("Enter the albhabet")
    alphabet = alphabet.toLowerCase()//A E I O U ---> a e i o u
    if(["a", "e" , "i" , "o" , "u"].includes(alphabet)) console.log("Vowel")
    else console.log("consonant")

}
//q37()

function q38(){
    let num1 = Number(prompt(("Enter First number")))
    let num2 =  Number(prompt(("Enter second number")))
    let num3 =  Number(prompt(("Enter third number")))

    if(num1 > num2 && num1 > num3) console.log(`largest number is  number one${num1}`)
        else if(num2>num1 && num2>num3) console.log(`largest number is numer two ${num2}`)
    else console.log(`largest number is number three ${num3}`)
}
//q38()
function q39(){
    let password = prompt("Enter the password")
    if(password == 'admin123')console.log("Success")
        else console.log("Wrong password")
}
//q39()

function q40(){
    let number = Number(prompt("Enter a number"))
    if(number % 3 == 0) console.log("Number ris divisible by 3")
    if(number % 5 == 0) console.log("Number ris divisible by 5")

    
    
}
//q40()