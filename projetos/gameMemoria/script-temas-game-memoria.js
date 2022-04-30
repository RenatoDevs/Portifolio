let btnMarvel = document.getElementById('marvel');
let btnTech = document.getElementById('tech');


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



btnMarvel.addEventListener('click', () =>{
     // aqui eu guardo o nome da pasta tema no localStorage
     localStorage.setItem('temas', JSON.stringify(marvel));

     localStorage.setItem('pasta', JSON.stringify('marvel'));
     console.log('tech');
     restart();
});

btnTech.addEventListener('click', () =>{
    // aqui eu guardo o nome da pasta tema no localStorage
    localStorage.setItem('temas', JSON.stringify(techs));

    localStorage.setItem('pasta', JSON.stringify('tech'));
    console.log('tech');
    restart();

});
