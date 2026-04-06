
//Loops
function q21(){
    for(let i = 1 ; i<=50 ; i++){
        console.log(i)
    }
    
}
//q21()

function q22(){
    let sum = 0
    let i = 1
    while(i <= 10){
        sum = sum +i
        i++
    }
    console.log("Sum of 1 to 10 =" +  " "  + sum)
}
//q22()

function q23(){
    let string = "Javascript"
    let string2 = "Reactjs"
    let n = string.length
    for(let ch = 0 ; ch <n ; ch++){
        // js me string ke har ek character ko index se access karne ke liye ye use krte hai [ ]
        console.log(string[ch])
    }
    console.log(" ")
    for(let ch of string2){
        console.log(ch)
    }
}
//q23()

function q24(){
    for(let i = 1 ; i<=20 ; i++){
        if(i%2 != 0){
            console.log(i)
        }
    }
}
//q24()

function q25(){
    //do while
}
q25()

function q26(){
    let number = Number(prompt("Enter a Number"))
    let result = 1
    for(let i = 1 ; i<=number ; i++){
        result = result *i
    } 
    console.log(result)
    
}
//q26()

//Jab JS function return nahi karta → default return hota hai undefined.
function q29(){
    let arr = []
    let i = 1;
    while(i<=100){
        if((i%5)===0){
        arr.push(i)
        }
        i++;   
    }
    return arr
}

console.log(q29())//function ne jo return kra print kro use


function q30(){
    let obj = {
        user:"rohit",
        mobineNo:901249999,
        email:"r@gmail.com",
        age:22
    }
    //print object keys by (for...in) loop
    for(let key in obj){
        console.log(key ,"=", obj[key])//key,value
        
    }

}
q30()
