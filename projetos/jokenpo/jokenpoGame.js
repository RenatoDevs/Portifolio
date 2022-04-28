const robotOption = document.querySelector('#option-robot');
const playerOption = document.querySelector('#option-player');
const placar = document.querySelector('#placar');
const player = document.querySelector('.player');
const robot = document.querySelector('.robot');



document.addEventListener('DOMContentLoaded', () => {
    let options = document.querySelectorAll('.option-player');

    options.forEach((option) => {
        option.addEventListener('click', tentativa);
    });
})


function robo() {
    let auto = Math.floor(Math.random() * 3);
    switch (auto) {

        case 0:
            robotOption.innerHTML = '&#x270A;';
            break;
        case 1:
            robotOption.innerHTML = '&#x1F590;';
            break;
        case 2:
            robotOption.innerHTML = '&#x270C;';
            break;
    }
    return auto;
}

function tentativa(event) {
    let escolha = event.target.id;
    auto = robo();

    if (escolha == 0 && auto == 0 || escolha == 1 && auto == 1 || escolha == 2 && auto == 2) {
        placar.innerHTML = 'Empate';
        robot.classList.remove('active');
        player.classList.remove('active');
        placar.classList.add('active');
    } else if (escolha == 0 && auto == 2 || escolha == 1 && auto == 0 || escolha == 2 && auto == 1) {
        placar.innerHTML = 'jogador venceu';
        robot.classList.remove('active');
        player.classList.add('active');
        placar.classList.remove('active');
        
    } else {
        placar.innerHTML = 'Computador venceu';
        robot.classList.add('active');
        player.classList.remove('active');
        placar.classList.remove('active');
    }
   
}
