const calcBtn = document.querySelector('.btn-calc')
const inputs = document.querySelectorAll('input')
const bmiRange = document.querySelector('.bmi-range')



//localStorage se item get karrhe hain
function loadStoredData(){    
let storedData1 = localStorage.getItem('bmiResult')
let storedData2 = localStorage.getItem('category')
let storedData3 = localStorage.getItem('suggestion')

if(storedData1){
document.querySelector('.bmi-range').innerHTML = storedData1
document.querySelector('.bmi-category').innerHTML = storedData2
document.querySelector('.suggestion-text').innerHTML = storedData3
}


}
loadStoredData()


//UNIT TOGGLE
let isMetric = true

function toggleInUnit() {

const imperialBtn = document.querySelector('#btnImperial')
const metricBtn = document.querySelector('#btnMetric')
const heightVal = document.querySelector('#heightVal')
const weightVal = document.querySelector('#weightVal')

imperialBtn.addEventListener('click', () => {

document.querySelector('#heightImperial').style.display='block'
document.querySelector('#weightImperial').style.display='block'

document.querySelector('#heightCm').style.display='none'
document.querySelector('#weightKg').style.display='none'

heightVal.innerHTML = 'ft'
weightVal.innerHTML ='lbs'

imperialBtn.classList.add('unitActive')
metricBtn.classList.remove('unitActive')

isMetric = false
localStorage.setItem('unit' , 'imperialUnit')
})


metricBtn.addEventListener('click', () => {

document.querySelector('#heightImperial').style.display='none'
document.querySelector('#weightImperial').style.display='none'

document.querySelector('#heightCm').style.display='block'
document.querySelector('#weightKg').style.display='block'

metricBtn.classList.add('unitActive')
imperialBtn.classList.remove('unitActive')

isMetric = true
localStorage.setItem('unit' , 'metricUnit')
})

}

toggleInUnit()

   


//load user ne konsi unit choose kri thi phele
function loadUnitSelector(){
    let res = localStorage.getItem('unit')
    if(res  == 'imperialUnit'){
       document.querySelector('#btnImperial').click() 
    }
    else{
         document.querySelector('#btnMetric').click()

    }
}
loadUnitSelector()








function syncInput(){

//TWO way sync input in METRIC
const sliderHeight = document.querySelector('#sliderH')

sliderHeight.addEventListener('input' , (e)=>{
   inputs[0].value = e.target.value
})

const heightInput = inputs[0]

heightInput.addEventListener('input', (e) => {
    sliderHeight.value = e.target.value
})


//WEIGHT INPUT TWO WAY SYNC
const sliderWeight = document.querySelector('#sliderW')

sliderWeight.addEventListener('input' , (e)=>{
   inputs[4].value = e.target.value
})

const weightInput = inputs[4]

weightInput.addEventListener('input', (e) => {
    sliderWeight.value = e.target.value
})


//IMPERIAL HEIGHT SYNC
const heightFt = document.querySelector('#heightFt')
const heightIn = document.querySelector('#heightIn')


//slider → feet inch
sliderHeight.addEventListener('input', (e) => {

    const cm = e.target.value

    const totalInch = cm / 2.54//convert cm to inch 
    const feet = Math.floor(totalInch / 12)
    const inch = Math.floor(totalInch % 12)

    heightFt.value = feet
    heightIn.value = inch
})


//feet inch → slider
function updateSliderFromImperial(){

    const feet = Number(heightFt.value) || 0
    const inch = Number(heightIn.value) || 0

    const cm = (feet * 30.48) + (inch * 2.54)

    sliderHeight.value = Math.round(cm)
    heightInput.value = Math.round(cm)

}

heightFt.addEventListener('input', updateSliderFromImperial)
heightIn.addEventListener('input', updateSliderFromImperial)


//IMPERIAL WEIGHT SYNC
//IMPERIAL WEIGHT SYNC
const weightLb = document.querySelector('#weightLb')

weightLb.addEventListener('input',(e)=>{

    const lb = Number(e.target.value) || 0
    const kg = lb * 0.453592

    sliderWeight.value = Math.round(kg)
    weightInput.value = Math.round(kg)

})


const sliderW = document.querySelector('#sliderW')

sliderW.addEventListener('input',(e)=>{

    const kg = Number(e.target.value) || 0
    const lb = kg / 0.453592

    weightLb.value = Math.round(lb)

})

}

syncInput()






//BMI calculation
function calculateBMI() {

calcBtn.addEventListener('click', () => {

let heightCm
let weightKg


if(isMetric){

heightCm = inputs[0].value
weightKg = inputs[4].value

}else{

const heightFt = document.querySelector('#heightFt').value
const heightIn = document.querySelector('#heightIn').value
const weightLb = document.querySelector('#weightLb').value
//ft*30.48--->cm
//inch*2.54--->cm
heightCm = (heightFt * 30.48) + (heightIn * 2.54)
//lb*0.453592 ---> kg
weightKg = weightLb * 0.453592

}


let heightM = heightCm / 100

let result = Math.floor(weightKg / (heightM * heightM))

bmiRange.innerHTML = `${result}`
localStorage.setItem('bmiResult' , result)//localStorage me  bmiRange store karhe hain

//BMI CATEGORY
const category = document.querySelector('.bmi-category')
const suggestion = document.querySelector('.suggestion-text')


if (result < 18.5) {

category.innerHTML = 'Underweight'
suggestion.innerHTML = 'You may need to gain some healthy weight by eating a balanced and nutritious diet.'

}
else if (result >= 18.5 && result <= 24.9) {

category.innerHTML = 'Normal weight'
suggestion.innerHTML =
'Great! Maintain your healthy lifestyle with balanced diet and regular exercise.'

}
else if (result >= 25 && result <= 29.9) {

category.innerHTML = 'Over weight'
suggestion.innerHTML =
'Consider improving your diet and increasing physical activity to reach a healthier weight.'

}
else {

category.innerHTML = 'Obese'
suggestion.innerHTML =
'It is advisable to focus on weight management through healthy habits and medical guidance if needed.'

}

localStorage.setItem('category' , category.innerHTML)//localStorage me  bmi category store karhe hain
localStorage.setItem('suggestion' , suggestion.innerHTML)//localStorage me  suggestion store karhe hain 

})

}

calculateBMI()



//RESET BUTTON
function resetBtn() {

const resetBtn = document.querySelector('.btn-reset')

resetBtn.addEventListener('click', () => {

if (inputs[0].value == '' || inputs[4].value == '') {
alert("Inputs are required")
}

inputs[0].value = ''
inputs[4].value = ''

document.querySelector('#sliderH').value = ''
document.querySelector('#sliderW').value = ''
//reset from localStorage
localStorage.removeItem('bmiResult')
localStorage.removeItem('category')
localStorage.removeItem('suggestion')
//
bmiRange.innerHTML = '24'

document.querySelector('.bmi-category').innerHTML = 'Normal weight'
document.querySelector('.suggestion-text') = 'Great! Maintain your healthy lifestyle with balanced diet and regular exercise.'
})

}

resetBtn()



//LOADER
function loader() {

const header = document.querySelector('.header')

setTimeout(() => {

header.style.display = 'none'

}, 3000)

}
//loader()


