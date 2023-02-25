const getRandomNumInRange = (min, max) =>{
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () =>{

const symbol = (Math.random() > 0.5) ? "+" : "-"
const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
gameState.rightAnswer = eval(task)
return task
}

const toggleGameState = () =>{
    gameState.taskInProcess = !gameState.taskInProcess
}

const gameElements = document.getElementById("my_game").children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}

const startGameFunc = () =>{
    if(!gameState.taskInProcess){
        title.innerText = "Какой ответ?"
        userAnswer.value = null
        userTask.innerText = getTask()
        userAnswer.hidden = false


    } else{
        const isRight = gameState.rightAnswer == userAnswer.value
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        title.innerText = (isRight) ? "Правильно!" : "Неправильно :("
    }
        toggleGameState()
        btnGame.innerText = (gameState.taskInProcess) ? "Проверить" : "Начать заново!"
}
btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener("keydown", (e) =>{
        if(e.key === "Enter"){
                startGameFunc()  
        } else if(e.key === "Escape"){
                userAnswer.blur()  
        }
})
