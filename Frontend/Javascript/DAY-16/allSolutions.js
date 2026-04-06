function q1(){
    console.log("Hello world")
}
//q1()

function q2(a , b){
let add = a+b
console.log(add)
return add
}
//console.log(q2(10,10))//ye return add ko console me dikhayega

function q3(name){
//console.log(name)
}
//q3("rohit")

function q4(number) {
    let ans = (number*number)
    return ans

    
}
//console.log(q4(3))


function q5(number){
    if(number %2 == 0){
        return "even"

    }
    else{
        return "odd"
    }

}
//console.log(q5(Number(prompt("Enter a number"))))

function q6(string){
    return string[string.length-1]

}
//console.log(q6("rohit"))

function q7(array){
    return array[0]

}
//console.log(q7([10,20,30,50]))

function q8(array){
    return array[array.length-1]

}
//console.log(q8([10,20,30]))

function q9(array){
    let n = array.length
    for(let i = 0 ; i<n ; i++){
       console.log( array[i])
    }

}
// q9([1,2,4])
//q9([10,20,40,50])

function q10(array){
    return array.length

}
//console.log(q10([10,20,30]))

function q11(a,b){
    return a*b

}
//console.log(q11(10,20))

function q12(a,b){
    return a-b

}
//console.log(q12(1,2))

const q13=(str)=>{
    //camel case me likhte hai
    return str.toUpperCase()

}
//console.log(q13("rohit"))

const q14 =(num)=>{
    return num*num*num

}

//console.log(q14(2))

const q15=(str1,str2)=>{
    let res = str1 + str2
    return res

}
let x =q15("i" ,"am")//upar return keyword ke aage jo bhi likha hai vo yha function call ki jgh ajata hai
console.log(x)
console.log(q15("heelo","rohit"))

const q16=(n1,n2)=>{
    if(n1>n2)console.log("n1 is greater")
     else{
    console.log("n2 is greater")}

}
//q16(2,4)

const q17=(n1,n2,n3)=>{
    if(n1<n2 && n1<n3) return "n1 is smaller"
    else if(n2<n1 && n2<n3) return "n2 is smaller"
    else return "n3 is smaller"

}
//console.log(q17(1,2,3))

const q18=(str)=>{
    for(let i= 1 ; i<=5 ; i++ ) console.log(str)

}
//q18("hi")

const q19=(arr)=>{
    let res =[]
    for(let i =0 ; i<arr.length;i++){
        if(arr[i]%2==0) res.push(i)
    }
return res

}
//console.log(q19([1,2,3,4,5,6]))

const q20=(arr)=>{
    let newArr =[]
    for(let i =0 ; i<arr.length; i++){
        if(arr[i]%2 !=0) newArr.push(arr[i])
    }
return newArr

}
//console.log(q20([1,2,3,4,5,6]))

const q21=(arr)=>{
    let res = arr.shift()//shift array ka 1 element remnove krke vo element return krt h
    console.log(res)

}
//q21([1,2,3,4])

const q22=(arr)=>{
    //Basic Syntax-->array.unshift(item1, item2, ...)
    //unshift(item)--> ye element ko arrAy ke start me daldeta hai multiple element bhi dal skte hai
    let res = arr.unshift(1)//shift array ka 1 element remnove krke vo element return krt h
    console.log(res)//unshift element add krne ke baad array ki total length return krta hai
    console.log(arr)

}
// q22([2,3,4])



const q23=(arr)=>{
    let res = arr.pop()
    return res

}
//console.log(q23([1,2,3,4,5]))



const q24=(arr)=>{
    let res = arr.push(6)
    return arr

}
//console.log(q24([1,2,3,4,5]))
const q25=(arr)=>{
//original array ko change karta hai (mutable)
//and remove elements ko return krta hai
let res = arr.splice(1,2)
console.log("Array after slice",arr)
return res

}
//console.log(q25([1,2,3,4]))

const q26=(str)=>{
    // /for...in index deta hai, character nahi.
    //character check karna hai tuh--->for...of

    let count = 0
    for(let ch in str){
        if(str[ch]=="a") {
            count++
        }
    }
    if(count>0)return `string contains total ${count} a`
    else return`string contains total  ${count} a`

}
//console.log(q26(prompt("Enter a string")))



const q27=(string)=>{
    let found = false
    for(let ch of string){
      if("aeiou".includes(ch)){
        found = true//mark found true taki age dekh sake vowel present hai ya nahi
        break
      }
    }
    if(found)console.log("string contains vowels")
        else console.log("string doesnot containsvowels")

}
//q27("hi rohit kese ho")

const reverseStr=(str)=>{
    let n = str.length
    for(let i = n-1 ; i>=0 ; i--){
        console.log(str[i])

    }

}
//reverseStr("rohit")

const checkEmpty=(str)=>{
    if(str.length>0) return "string is not empty"
    else return "string is empty"
}
//console.log(checkEmpty(""))

//30. Write a function that returns how many spaces are in a string.
const checkSpaces=(str)=>{
    let count = 0
    for(let ch of str){
        if(ch == " ") count++
    }
    return `total spaces in the string are ${count}`

}
//console.log(checkSpaces("hi rohit kese ho"))


//31. Write a function that returns the sum of all numbers in an array.
const totalSum=(arr)=>{
    let sum = 0
    for(let i =0 ; i<arr.length ; i++){
        sum = sum + arr[i]
    }
    return sum
}
//console.log(totalSum([1,2,3,4,5]))


//32. Write a function that returns the biggest number from an array.
const biggestNumberInArray=(arr)=>{
    //sorting
    let newArr=arr.sort((a,b) => a-b)
    //console.log("Array after sorting",newArr)
    return newArr[newArr.length-1]//array  largest number
   
}
//console.log(biggestNumberInArray([2,5,99,123]))

//33. Write a function that returns the smallest number from an array.
const smallestNumberInArray=(arr)=>{
    //sorting
    let newArr=arr.sort((a,b) => a-b)
    //console.log(""Array after sorting , newArr)
    return newArr[0]//smallest number in an array
   
}
//console.log(smallestNumberInArray([2,5,99,123]))

//34. Write a function that doubles each number in an array.
const doubleEachNumber = (arr) =>{
    let ans = []
    var double 
     console.log("Before doubling" , arr)
    for(let i = 0 ; i< arr.length ; i++){
        double = 2*arr[i]
        ans.push(double)
    }
    
    console.log("After Doubling")
    return ans
}
//console.log(doubleEachNumber([1,2,3,4,5,6]))

//35. Write a function that removes duplicate items from an array.
const q35=(arr)=>{
    let n = arr.length
    let result = []
     for(let i = 0 ; i<n ; i++){
        //logic--> agr element result array me nhi hhai tuh result array me dalo
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
     }
     return result
}
//console.log(q35([1,1,3,4,5,5,4,8,9]))


//36. Write a function that takes an array and returns only positive numbers.
const positiveNumbers=(arr)=>{
    let ans = []//empty array
    for(let i =  0 ; i<arr.length ; i++){
        if(arr[i]>=0) ans.push(arr[i])
    }
return ans

}
//console.log(positiveNumbers([-1,,7,-5,5,-4,2,5,7,0.-9]))





//37. Write a function that checks if a number is divisible by 10.
const checkDivisibleBy10=(arr)=>{
    //push() method array ki length return karta hai, array khud nahi.
    let ans = []
    for(let i = 0 ; i< arr.length ; i++){
        if(arr[i] % 10 == 0)   ans.push(arr[i])
    }
return ans

}
//console.log(checkDivisibleBy10([1,2,10,5,100,20]))

//38. Write a function that prints the index of each item in an array.
const printEachIndexOfArray=(arr)=>{
    for(let i =0  ; i<arr.length ; i++){
        console.log(i)
    }
}
//printEachIndexOfArray([1,2,3,4,5,67,8,9])

//39. Write a function that returns the middle element of an array.
const middleElement=(arr)=>{
    let middleElement = Math.floor(arr.length/2)
    return arr[middleElement]

}
console.log(middleElement([1,2,3,4,5]))

//40. Write a function that removes 1 element from the middle of an array using splice.
const removeFromMiddle=(arr)=>{
    let midE = Math.floor(arr.length/2)
    arr.splice(midE,1)
    return arr
   

}
console.log(removeFromMiddle([1,2,3,4]))

