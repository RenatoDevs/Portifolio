let gameContainer = document.querySelector('.jogo-container');
let gameWinner = document.querySelector('.vencedor')
let squares = document.querySelectorAll('.square')



// Criando um evento para ser executado assim que a pagina for carregada
document.addEventListener('DOMContentLoaded', () => {
    // selecinando os campos
    let squares = document.querySelectorAll('.square');
    // Percorrendo todos os campos e adicionando evento click neles, a função 
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });

});

function handleClick(event) {
    let square = event.target;
    let position = square.id;
    if (handleMove(position)) {
        setTimeout(() => {
            gameWinner.innerHTML = `<p>Fim de Jogo</p>`;
            gameWinner.innerHTML += `<p>${checkWinner()} é o Vencedor </p>`;
        }, 10);

    }
    updateSquare(position);

}
function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    // verificar
    square.innerHTML = `<div class='${symbol}'></div>`;
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
    player1.classList.remove('vez');
    player2.classList.remove('vez');
    gameWinner.innerHTML = ''
    squares.forEach((square) => {
        square.innerHTML = '';
    });

}

function hideWinner() {
    gameContainer.style.filter = 'none';
    gameWinner.style = 'none';
}

