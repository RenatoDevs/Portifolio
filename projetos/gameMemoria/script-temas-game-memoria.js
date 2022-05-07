let btnMarvel = document.getElementById('marvel');
let btnTech = document.getElementById('tech');
let btnDragon = document.getElementById('dragonball');

let techs = [
    'bootstrap',
    'css',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'node',
    'react',
    'github',
    'figma'
];

let marvel = [
    'iron',
    'capitao',
    'gaviao',
    'hulk',
    'maquina',
    'natasha',
    'spider',
    'thanos',
    'thor',
    'visao',
];
let dragonball = [
    'bios',
    'freeza',
    'gohan',
    'goku',
    'kuririn',
    'mestre',
    'piccolo',
    'trunks',
    'vegeta',
    'whis',
];



btnMarvel.addEventListener('click', () =>{
     // aqui eu guardo o nome da pasta tema no localStorage
     localStorage.setItem('temas', JSON.stringify(marvel));
     localStorage.setItem('pasta', JSON.stringify('marvel'));
     fundo.style.backgroundColor = 'black';
     restart();
});

btnTech.addEventListener('click', () =>{
    // aqui eu guardo o nome da pasta tema no localStorage
    localStorage.setItem('temas', JSON.stringify(techs));
    localStorage.setItem('pasta', JSON.stringify('tech'));
    restart();

});
btnDragon.addEventListener('click', () =>{
    // aqui eu guardo o nome da pasta tema no localStorage
    localStorage.setItem('temas', JSON.stringify(dragonball));
    localStorage.setItem('pasta', JSON.stringify('dragonball'));
    restart();

});
