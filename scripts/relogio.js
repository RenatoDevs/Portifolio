const clockContainer = document.querySelector('.clock-analog')
/*Função para adicionar o '0' frente de um numero com uma unica casa*/
const formatTimeUnit = unit => String(unit).length === 1 ? `0${unit}` : unit

const getClockHTML = (hours, minutes, seconds) => /*Abre*/`
    <span>${formatTimeUnit(hours)}</span> : 
    <span>${formatTimeUnit(minutes)}</span> :
    <span>${formatTimeUnit(seconds)}</span>  
`/*Fecha*/

const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

/*Retornar a tela*/

setInterval(()=>{
    let day = new Date();
    let hh = day.getHours();
    let mn = day.getMinutes();
    let ss = day.getSeconds();
    clockContainer.innerHTML = getClockHTML(hh, mn, ss);
},1000)


setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`
    mn.style.transform = `rotateZ(${(mm)}deg)`
    sc.style.transform = `rotateZ(${(ss)}deg)`
});
