const gameBoardContainer = document.querySelector('.gameBoardContainer')





//create game board

const createGameBoard = () => {
    let gameBoard = document.createElement('div')
    gameBoard.classList.add('gameBoard')
    gameBoardContainer.appendChild(gameBoard)

    

    for (let divCount = 0;divCount < 9; divCount++) {
        let newDiv = document.createElement('div')
        newDiv.setAttribute('id', `block${divCount}`)
        newDiv.classList.add('blocks')
        gameBoard.appendChild(newDiv)
        
        let newBtn = document.createElement('button')
        newBtn.setAttribute('id', `btn${divCount}`)
        newBtn.classList.add('btns')

        //newBtn.onclick = draw(`${}`)
        newDiv.appendChild(newBtn)

    }
}

//create form 



//create players

const Player = (name, turn) => {
    
    const getName = () => name
    const getTurn = () => turn
    //function to draw X and O
    const draw = (player) => {
        if (player.getTurn == 1) {

        } 
    }

}


//

createGameBoard()