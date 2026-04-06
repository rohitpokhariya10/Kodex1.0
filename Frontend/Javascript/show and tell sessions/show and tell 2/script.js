const snakeBody = [
    { x:1,y:3 },
    { x:1,y:4 }
]

let initialPos = JSON.parse(JSON.stringify(snakeBody))

let highScoreElement = document.querySelector('.high-score')
let scoreElement = document.querySelector('.score')
let timeElement = document.querySelector('#time')

let score = 0

// HIGH SCORE FROM LOCAL STORAGE
let highScore = localStorage.getItem("highScore") || 0
highScoreElement.innerHTML = `High Score : ${highScore}`

let time = 0
let timerInterval

function runTimeElement(){

time++

let minutes = Math.floor(time / 60)
let seconds = time % 60

if(minutes < 10) minutes = "0" + minutes
if(seconds < 10) seconds = "0" + seconds

timeElement.innerHTML = `${minutes}:${seconds}`

}

const blocks =[]
const innerBlocks = []
const board = document.querySelector('.bottom')

const height = 50
const width = 50

const rows = Math.floor(board.clientHeight / height)
const cols = Math.floor(board.clientWidth / width)

function boardBlocksCreate(){

for(let i =0 ; i< rows ; i++){
for(let j = 0 ; j<cols ; j++){

const block = document.createElement('div')
const innerDiv = document.createElement('div')

block.style.height = '50px'
block.style.width = '50px'

innerDiv.style.height = '30px'
innerDiv.style.width = '30px'

block.classList.add('block')

board.append(block)
block.append(innerDiv)

blocks[`${i},${j}`] = block 
innerBlocks[`${i},${j}`] = innerDiv

}
}

}

boardBlocksCreate()

// FOOD SPAWN
let food = {
x:Math.floor(Math.random()*rows),
y:Math.floor(Math.random()*cols)
}

function renderSnake(){

snakeBody.forEach((cell)=>{
blocks[`${cell.x},${cell.y}`].classList.add('snakeBody')
})

innerBlocks[`${food.x},${food.y}`].classList.add('food')

}

renderSnake()

function resetGame(){

clearSnake()

snakeBody.length = 0
snakeBody.push(...JSON.parse(JSON.stringify(initialPos)))

direction = 'right'

renderSnake()

time = 0
timeElement.innerHTML = "00:00"

}

// DIRECTION CONTROL
let direction= 'down'

document.addEventListener('keydown' , (e)=>{

if(e.key == 'ArrowUp' && direction != 'down'){
direction = 'up'
}

else if(e.key == 'ArrowDown' && direction != 'up'){
direction = 'down'
}

else if(e.key == 'ArrowRight' && direction != 'left'){
direction = 'right'
}

else if(e.key == 'ArrowLeft' && direction != 'right'){
direction = 'left'
}

})

// GAME LOOP
let head = {}

function gameLoop(){

if(direction == 'up'){
head = {x:snakeBody[0].x-1 , y:snakeBody[0].y}
}

else if(direction == 'down'){
head = {x:snakeBody[0].x+1 , y:snakeBody[0].y}
}

else if(direction == 'right'){
head = {x:snakeBody[0].x , y:snakeBody[0].y+1}
}

else{
head = {x:snakeBody[0].x , y:snakeBody[0].y-1}
}

// FOOD EAT
if(head.x == food.x && head.y == food.y){

score += 10

scoreElement.innerHTML = `Score:${score}`

// HIGH SCORE CHECK
if(score > highScore){

highScore = score

highScoreElement.innerHTML = `High Score : ${highScore}`

localStorage.setItem("highScore",highScore)

}

innerBlocks[`${food.x},${food.y}`].classList.remove('food')

food = {
x:Math.floor(Math.random()*rows),
y:Math.floor(Math.random()*cols)
}

snakeBody.unshift(head)

}

// WALL COLLISION
if(head.x <0 || head.x>=rows || head.y<0 || head.y>=cols){

score = 0
scoreElement.innerHTML = `Score:${score}`

gameOverPage()

resetGame()

return

}

snakeBody.unshift(head)
snakeBody.pop()

clearSnake()
renderSnake()

}

// START GAME
function startGame(){

document.querySelector('.card').style.display = "none"

setInterval(()=>{
gameLoop()
},500)

clearInterval(timerInterval)

timerInterval = setInterval(runTimeElement , 1000)

}

document.querySelector('.start-btn').addEventListener('click' , ()=>{

startGame()

})

function clearSnake(){

const sb = document.querySelectorAll('.snakeBody')

sb.forEach((e)=>{
e.classList.remove('snakeBody')
})

}

function gameOverPage(){

const gameOver = document.querySelector('.game-over')

gameOver.style.display = 'block'

}

function reStartGame(){

const gameOver = document.querySelector('.game-over')

gameOver.style.display = 'none'

resetGame()

}

const restartBtn = document.querySelector(".restart")

restartBtn.addEventListener('click' , ()=>{

reStartGame()

})