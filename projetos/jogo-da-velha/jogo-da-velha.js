// iniciar variaveis 
let player1 = document.querySelector('#player1');
let player2 = document.querySelector('#player2');
let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['x', 'o'];
let gameOver = false;
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// let squares = document.querySelectorAll('.square');

function handleMove(position) {
    // Verificando se o jogo acabol
    if (gameOver) {
        return;
    }

    // verificando se o campor está vazio
    if (board[position] == '') {
        // alternando entre os players 
        board[position] = symbols[playerTime];

        // verificando se ouve ganhador 
        gameOver = isWin();
        // fazendo verificação para saber se o jogo acabou ou não, para ai sim poder passar a vez
        if (gameOver == false) {
            // alternando entre os players 

            playerTime = (playerTime == 0) ? 1 : 0;
            // Função que vai mostrar o jogador da vez
            playerTimeFunction();
        }
    }

    return gameOver;
}
// sequencias passível de vencimento 
function isWin() {

    // let winStates = [
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    //     [0, 3, 6],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [0, 4, 8],
    //     [2, 4, 6]
    // ]

    // Verificando sequencias Vencedoras 
    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i]

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {

            return true;
        }
    }
    return false;
}
// Verificando e confirmando Vencedor
function checkWinner() {
    if (playerTime === 0) {
        return player1.textContent;
    }
    if (playerTime === 1) {
        return player2.textContent;
    }
}

// Função que vai mostrar o jogador da vez
function playerTimeFunction() {
    if (playerTime === 0) {
        player1.classList.remove('vez');
        player2.classList.add('vez');
    }
    if (playerTime === 1) {
        player2.classList.remove('vez');
        player1.classList.add('vez');
    }
}
