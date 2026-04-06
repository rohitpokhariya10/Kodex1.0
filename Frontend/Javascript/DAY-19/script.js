//1. Write a function that uses `forEach()` to calculate the total sum of an array.
function calculateSum(arr){
    let sum = 0
    arr.forEach((elem,idx) => {
        console.log(`array element is ${elem} and index is ${idx}`)
        sum = sum + elem
        
    });

    return `Array total sum is ${sum}`
    
}
// console.log(calculateSum([1,2,3,4,5,6]))

//2. Write a function that uses `map()` to return a new array where each number is squared.
function squareOfEachElem(arr){
    //ye return squareOfEachElem() ka hai jo map return karhahai
    return arr.map((elem,idx)=>{
        return elem*elem//ye return map ka hai
    })

}
// console.log(squareOfEachElem([1,2,3,4,5,6]))

//3. Write a function that uses `filter()` to return only numbers greater than 50.
function q3(arr){
    //1 return is of q3()
      return  arr.filter((elem,idx)=>{
        return elem>50//this return is of filter()
       })
}
//console.log(q3([10,20,30,40,50,60,70,90,80,100]))

//4. Write a function that checks whether two values are strictly equal using `===`.
function checkStrictlyEquals(){
    let num1 = Number(prompt("Enter first Number"))
     let num2 = Number(prompt("Enter second Number"))
    if(num1 ===  num2) return `Both numbers are strictly equal num1 is ${num1} and num2 is ${num2}`
    else return `Both numbers are not strictly equal num1 is ${num1} and num2 is ${num2}`

}
//console.log(checkStrictlyEquals())


//5. Write a function that demonstrates array mutability by modifying the original array using `push()`.
function mutability(arr){
    arr.push(6)
    return arr

    
}
//console.log(mutability([1,2,3,4,5]))


//6. Write a function that removes the last element immutably (without modifying original array).
//slice() method copy bnanene me help krta hai array ki
function q6(arr){
   //filter() condition ke basis me element rakhega new array me
  return arr. filter((elem,idx)=>{
    console.log(arr)
    return idx != arr.length-1
  })


}
//console.log(q6([1,2,3,4,5]))

//7. Write a function that sorts numbers in ascending order using a proper compare function.
function sortNumbers(arr){
   return arr.sort((a,b)=> a-b)
}
//console.log(sortNumbers([5,6,7,1,3]))

//8. Write a function that sorts strings alphabetically.(ye bahaiya se puchna)
function sortAlphabetically(arr){
  return arr.sort((a,b)=>a.localeCompare(b))
}
//console.log(sortAlphabetically(["rohit","ashu","dishu","sheetu"]))

//9. Write a function that reverses an array without using `reverse()`.
function reverseArray(arr){
    let ans = []
    for(let i = arr.length-1 ; i>=0 ; i--){
      ans.push(arr[i])
    }
    return ans
}
//console.log(reverseArray([1,2,3,4,5]))


//10. Write a function that merges two arrays using `concat()` and returns the result.
function mergeTwoArray(arr1 , arr2){
    let arr3 = arr1.concat(arr2)
    return arr3
}
//console.log(mergeTwoArray([1,2],[3,4,5 ]))

//11. Write a function that merges two arrays and removes duplicate values.
function removeDuplicates(arr1 , arr2){
    let merge = arr1.concat(arr2)
    let ans = []
    for(let i =0 ; i<merge.length ; i++){
        if(!ans.includes(merge[i])) ans.push(merge[i])
    }
return ans

}
//console.log(removeDuplicates([1,2,3 ,6,7,9,4,5,4,6], [7,7,8,9,10]))

//12. Write a function that manually checks whether a value exists in an array (without using `includes()`).
function checkElemInArray(arr){
    let elem = Number(prompt("Enter a element"))
    for(let i = 0; i< arr.length ; i++){
     if(elem === arr[i]) return "Yes elem is present"
    
    }
    return "No this elem is not present"

}
//console.log(checkElemInArray([1,2,3,4,5]))



//13. Write a function that uses `includes()` to check if an array contains a specific value.
function checkElementInArray(arr){
    let check = arr.includes(Number(prompt("Enter an element")))
    if(check) return "Yes Element is present in an array"
    else return "No"
}
//console.log(checkElementInArray([1,2,3]))


//14. Write a function that filters strings starting with "A" using `startsWith()`.
function filterString(arr){
   return arr.filter((elem)=> elem.includes("a"))

}
//console.log(filterString(["ashu","aman","rohit"]))


//15. Write a function that uses `find()` to return the first number greater than 100.
function q15(arr){
    return arr.find((elem)=> elem >100)
}
console.log(q15([100,1901,110]))


//16. Create an object and write a function that returns all its keys using a loop.
const printObjKeys=(obj)=>{
    let ans = []
    //object me traverse for...in loop se krte hai because object me index nhi hote
    for(let key in obj){
        //console.log(key)
        //console.log(obj[key])
        ans.push(key)
    }
    return ans

}
//user object
var user = {
    name: "Rohit",
    age: 22,
    city: "Dehradun"
}

//console.log(printObjKeys(user))

//17. Write a function that adds a new property to an object immutably.
function addElemInObj(obj){
    let newObj = {...obj}
    console.log("old object",obj)
    console.log("new object before",newObj)
    newObj.bike = "cycle"
    return newObj


}
console.log(addElemInObj(user))


//18. Write a function that updates a property in an object.
function q18(obj){
    obj.name = "Radha"
    return obj

}
//console.log(q18(user))


//19. Write a function that checks whether a specific key exists inside an object.
function q19(obj , keyToFind){
    for(let key in obj){
        if(key === keyToFind) return true
    }
    return false

}
//console.log(q19(user , prompt("Enter a key")))

//20. Write a function that converts an object into an array of key-value pairs.
function q20(obj){
    let ans = []
    for(let key in obj){
        ans.push([key, obj[key]])
    }
    return ans


}
console.log(q20(user))