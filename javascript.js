const gameBoardContainer = document.querySelector('.gameBoardContainer')
const newGameBtn = document.querySelector('#newGameBtn')
const playerForm = document.querySelector('#gameForm')
const overlay = document.querySelector('.overlay')
const playerFormDisplay = document.querySelector('.playerFormContainer')
const scoreboardBtn = document.querySelector('#scoreboardBtn')
const playAgainBtn = document.querySelector('#againBtn')
const resultScreen = document.querySelector('.resultScreenDiv')
const resultMsg = document.querySelector('.resultMsg')
const p1scoreName = document.querySelector('.p1scoreName')
const p1scoreMsg = document.querySelector('.p1scoreMsg')
const p2scoreName = document.querySelector('.p2scoreName')
const p2scoreMsg = document.querySelector('.p2scoreMsg')
const tieName = document.querySelector('.tieName')
const tieMsg = document.querySelector('.tieMsg')
const scoreboardContainer = document.querySelector('.scoreboardContainer')
const endName = document.querySelector('.endWinnerName')
const endMsg = document.querySelector('.endMsg')
const endBtn = document.querySelector('#exitBtn')
let firstRun = true


//function to prompt

const startGame = () => {
    
    overlay.classList.add('active')
    playerFormDisplay.classList.add('active')
    resultScreen.classList.remove('active')
    scoreboardContainer.classList.remove('active', 'end')
    endName.textContent = ''
    endMsg.textContent = ''
    
}


newGameBtn.addEventListener('click', startGame)

//submit button function

const submitForm = (event) => {
    
    event.preventDefault()
    
    

    
    console.log('submited')

    console.log(playerForm)

   
    let formEl = document.forms.startForm
    let formData = new FormData(formEl)

    let player1 = formData.get('player1')
    let player2 = formData.get('player2')

    console.log(player1, player2)

    overlay.classList.remove('active')
    playerFormDisplay.classList.remove('active')
    playerForm.reset()

    //game funct

    const game = (player1, player2) => {
        p1 = player1
        p2 = player2
        currentTurn = p1

        p1wins = 0
        p2wins = 0
        tie = 0

        scoreboardOpen = false
    
        const gBoard = ['', '', '', '', '', '', '', '', '']

        //getscore
        const getScore = () => {
            
            if (scoreboardOpen == true){
                scoreboardContainer.classList.remove('active')
                scoreboardOpen = false
            } else {
                scoreboardContainer.classList.add('active')
                console.log(`${p1}:${p1wins} wins`)
                p1scoreName.textContent = `${p1}:`
                p1scoreMsg.textContent =`${p1wins} win(s)`
                console.log(`${p2}:${p2wins} wins`)
                p2scoreName.textContent = `${p2}:`
                p2scoreMsg.textContent = `${p2wins} win(s)`
                console.log(`tie:${tie}`)
                tieName.textContent = `Tie:`
                tieMsg.textContent = `${tie}`
                scoreboardOpen = true
            }
            
            
        }

        //playagain
        const playAgain = () => {
            
            gBoard.splice(0, 9, '', '', '', '', '', '', '', '', '')
            console.log(gBoard)
            g1.createGameBoard()
            overlay.classList.remove('active')
            resultScreen.classList.remove('active')

        }
        //endgame
        const endGame = () => {
            getScore()
            resultScreen.classList.remove('active')
            scoreboardContainer.classList.add('active', 'end')
            if (p1wins > p2wins) {
                endName.textContent = `Winner:`
                endMsg.textContent = `${p1}`
            } else if (p1wins < p2wins) {
                endName.textContent = `Winner:`
                endMsg.textContent = `${p2}`
            } else if (p1wins == p2wins) {
                endName.textContent = `It's a tie!`
                
            }
        }
        

        //create game board
    
        const createGameBoard = () => {
            gameBoardContainer.textContent = ''

            let gameBoard = document.createElement('div')
            gameBoard.classList.add('gameBoard')
            gameBoardContainer.appendChild(gameBoard)
            
            //create x and o function 
            const xo = (e) => {
                let target = e.target
                let id = target.getAttribute('id').slice(-1)

            if (currentTurn == p1) {
                console.log(`player ${p1}'s turn. Marker : X`)
                console.log(id)
                gBoard.splice(`${id}`,1, 'X')
                target.textContent = 'X'
                target.style.color = 'red'
                
                target.disabled = true
                if (checkGameWinner('p1')){
                    getScore()
                    overlay.classList.add('active')
                    resultScreen.classList.add('active')
                } else {
                    currentTurn = p2
                }
                
                

            } else if (currentTurn == p2) {
                console.log(`player ${p2}'s turn. Marker : O`)
                console.log(id)
                gBoard.splice(`${id}`,1, 'O')
                target.textContent = 'O'
                target.style.color = 'blue'
                
                target.disabled = true
                if (checkGameWinner('p2')){
                    getScore()
                    overlay.classList.add('active')
                    resultScreen.classList.add('active')
                } else {
                    currentTurn = p1
                }
            }
            console.log(gBoard)
         }

            const checkGameWinner = (turn) => {

                if (turn == 'p1'){
                    if (gBoard[0] == 'X' && gBoard[1] == 'X' && gBoard[2] == 'X' || gBoard[0] == 'X' && gBoard[3] == 'X' && gBoard[6] == 'X' || gBoard[6] == 'X' && gBoard[7] == 'X' && gBoard[8] == 'X' || gBoard[2] == 'X' && gBoard[5] == 'X' && gBoard[8] == 'X' || gBoard[3] == 'X' && gBoard[4] == 'X' && gBoard[5] == 'X' || gBoard[0] == 'X' && gBoard[4] == 'X' && gBoard[8] == 'X' || gBoard[2] == 'X' && gBoard[4] == 'X' && gBoard[6] == 'X' || gBoard[1] == 'X' && gBoard[4] == 'X' && gBoard[7] == 'X') {
                        console.log(`${p1} wins!`)
                        resultMsg.textContent = `${p1} wins!`
                        p1wins += 1
                        let allBtns = document.querySelectorAll('.btns')
                        allBtns.forEach(element => {
                            element.disabled = true
                        });
                        return true
                    } else if (gBoard.includes('') == false){
                        
                        tie += 1
                        console.log('tie!')
                        resultMsg.textContent = `It's a tie!`
                        return true
                    }

                } else {
                    if (gBoard[0] == 'O' && gBoard[1] == 'O' && gBoard[2] == 'O' || gBoard[0] == 'O' && gBoard[3] == 'O' && gBoard[6] == 'O' || gBoard[6] == 'O' && gBoard[7] == 'O' && gBoard[8] == 'O' || gBoard[2] == 'O' && gBoard[5] == 'O' && gBoard[8] == 'O' || gBoard[3] == 'O' && gBoard[4] == 'O' && gBoard[5] == 'O' || gBoard[0] == 'O' && gBoard[4] == 'O' && gBoard[8] == 'O' || gBoard[2] == 'O' && gBoard[4] == 'O' && gBoard[6] == 'O' || gBoard[1] == 'O' && gBoard[4] == 'O' && gBoard[7] == 'O') {
                        console.log(`${p2} wins!`)
                        resultMsg.textContent = `${p2} wins!`
                        p2wins += 1
                        let allBtns = document.querySelectorAll('.btns')
                        allBtns.forEach(element => {
                            element.disabled = true
                        });
                        return true
                    } else if (gBoard.includes('') == false){
                        tie += 1
                        console.log('tie!')
                        resultMsg.textContent = `It's a tie!`
                        return true
                    }
                }
                
            }
    
        
    
            for (let divCount = 0;divCount < 9; divCount++) {
            let newDiv = document.createElement('div')
            newDiv.setAttribute('id', `block${divCount}`)
            newDiv.classList.add('blocks')
            gameBoard.appendChild(newDiv)
            
            let newBtn = document.createElement('button')
            newBtn.setAttribute('id', `btn${divCount}`)
            newBtn.classList.add('btns')
    
            newBtn.addEventListener('click', xo)
            newDiv.appendChild(newBtn)
    
        }
    } 
    return {createGameBoard, getScore, playAgain, endGame}
    }
    

    let g1 = game(player1, player2)
    g1.createGameBoard()
    
    

    if (firstRun == true) {
        scoreboardBtn.addEventListener('click', g1.getScore)
        playAgainBtn.addEventListener('click', g1.playAgain)
        endBtn.addEventListener('click', g1.endGame)
        

    }
    
    
    firstRun = false
     
    
    

    
    
    


    

    
    

    
   
    
} 

playerForm.addEventListener('submit', submitForm)







