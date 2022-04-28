const clockContainer = document.querySelector('.clock')
/*Função para adicionar o '0' frente de um numero com uma unica casa*/
const formatTimeUnit = unit => String(unit).length === 1 ? `0${unit}` : unit

const getClockHTML = (hours, minutes, seconds) => /*Abre*/`
    <span>${formatTimeUnit(hours)}</span> : 
    <span>${formatTimeUnit(minutes)}</span> :
    <span>${formatTimeUnit(seconds)}</span>  
`/*Fecha*/


const updateClock = () => {
    const present = new Date()
    const hours = present.getHours()
    const minutes = present.getMinutes()
    const seconds = present.getSeconds()
    /*Retornar a tela*/
    clockContainer.innerHTML = getClockHTML(hours, minutes, seconds)

}

setInterval(updateClock, 1000)