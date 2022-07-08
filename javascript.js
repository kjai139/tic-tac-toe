const gameBoardContainer = document.querySelector('.gameBoard')

const createGameBoard = () => {
    let divCount = 9
    for (divCount > 0; divCount++) {
        let newDiv = document.createElement('div')
        newdiv.classList.add(`div#${divCount}`)
    }
}