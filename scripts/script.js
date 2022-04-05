let boxCurriculo = document.querySelector('.boxCurriculo');
let btnAlongar = document.querySelector('.btnAlongar')

let toggle = (e) =>{
    if(boxCurriculo.classList.contains('alongar')){
        boxCurriculo.classList.remove('alongar')
        btnAlongar.innerHTML = 'Ver mais';
    }else{
        boxCurriculo.classList.add('alongar')
        btnAlongar.innerHTML = 'Ver menos'
    }
}

btnAlongar.addEventListener('click', toggle)