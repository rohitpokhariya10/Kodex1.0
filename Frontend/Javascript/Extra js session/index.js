//HOF
// function abc(a){
// console.log(a)
// }
// abc(function(){
//     console.log("hiiii")
// })


//2 CALCABCKS

//3
//closures (vvvimp topic)
//ek esa function jo return kare ek naya function aur access kare parent function ki kis value ko

// function closure(){
//     let a = 10
//    return function(){
//    console.log(a)
//    }
// }
// console.log(closure())


//Question 1
// function abc(fn){
//     console.log("Wait for 3 secconds")
// setTimeout(fn , 3000)
// }
// abc(function(){
//     console.log("Radha Radha")
// })

//QueStion 2
// function abc(fn , time){
//     console.log("Wait something will come for you......")
//    setInterval(fn , time)
// }
// abc(function(){
//  console.log("Radha Radha Radha Radha Radha Radha")
// } , 5000)


//Question 3
// function counter(){
//     let count= 0
//  return function(){
//     count++
//     console.log(count)
//  }
// }
// let ans = counter()
// ans()
// ans()



//Question 4  (Very IMP question)
let arr = [1,2,3,4,5]
function bixi(arr , fn){
    let newArr = []
    for(let i = 0 ; i< arr.length ;i++){
        newArr.push(fn(arr[i]))
    }
    return newArr
}
let ans = bixi(arr , function(elem){
return elem+10
})
console.log(ans)
