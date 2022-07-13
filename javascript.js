const gameBoardContainer = document.querySelector('.gameBoardContainer')
const newGameBtn = document.querySelector('#newGameBtn')
const playerForm = document.querySelector('#gameForm')
const overlay = document.querySelector('.overlay')
const playerFormDisplay = document.querySelector('.playerFormContainer')


//function to prompt

const startGame = () => {
    

    overlay.classList.add('active')
    playerFormDisplay.classList.add('active')
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
    
        const gBoard = ['', '', '', '', '', '', '', '', '']
        

        //create game board
    
        const createGameBoard = () => {
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
                if (checkGameWinner()){
                    overlay.classList.add('active')
                } else {
                    currentTurn = p2
                }
                
                

            } else if (currentTurn == p2) {
                console.log(`player ${p2}'s turn. Marker : O`)
                console.log(id)
                gBoard.splice(`${id}`,1, 'O')
                target.textContent = 'O'
                target.style.color = 'blue'
                currentTurn = p1
                target.disabled = true
            }
            console.log(gBoard)
         }

            const checkGameWinner = () => {
                if (gBoard[0] == 'X' && gBoard[1] == 'X' && gBoard[2] == 'X' || gBoard[0] == 'X' && gBoard[3] == 'X' && gBoard[6] == 'X' || gBoard[6] == 'X' && gBoard[7] == 'X' && gBoard[8] == 'X' || gBoard[2] == 'X' && gBoard[5] == 'X' && gBoard[8] == 'X' || gBoard[3] == 'X' && gBoard[4] == 'X' && gBoard[5] == 'X' || gBoard[0] == 'X' && gBoard[4] == 'X' && gBoard[8] == 'X' || gBoard[2] == 'X' && gBoard[4] == 'X' && gBoard[6] == 'X') {
                    console.log(`${p1} wins!`)
                    let allBtns = document.querySelectorAll('.btns')
                    allBtns.forEach(element => {
                        element.disabled = true
                    });
                    return true
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
    return {createGameBoard}
    }
    

    let g1 = game(player1, player2)
    g1.createGameBoard()
    


    

    
    

    
   

}

playerForm.addEventListener('submit', submitForm)








//create form 






//

