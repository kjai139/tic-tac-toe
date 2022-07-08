const gameBoardContainer = document.querySelector('.gameBoardContainer')

const createGameBoard = () => {
    let gameBoard = document.createElement('div')
    gameBoard.classList.add('gameBoard')
    gameBoardContainer.appendChild(gameBoard)

    for (let divCount = 0;divCount < 9; divCount++) {
        let newDiv = document.createElement('div')
        newDiv.setAttribute('id', `block${divCount}`)
        newDiv.classList.add('blocks')
        gameBoard.appendChild(newDiv)
    }
}

//
createGameBoard()