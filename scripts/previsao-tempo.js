const api = {
    key: '7dd7eeb187db7de8c54097de87b7ee9b',
    base: 'https://api.openweathermap.org/data/2.5/',
    lang: 'pt_br',
    units: 'metric',
}

const cidade = document.querySelector('.cidade');
const data = document.querySelector('.data');
const containerImg = document.querySelector('.img-tempo');
const tempo = document.querySelector('.tempo');
const umidade = document.querySelector('.umidade');
const statusTemp = document.querySelector('.status-dia');
const min= document.querySelector('.minima');
const max = document.querySelector('.maxima');


window.addEventListener('load',() =>{
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    }else{
        alert('impossivel receber parametros de temperatura')
    }
    function setPosition(position){
        console.log(position)
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        coordsResult(latitude,longitude);
    }
    function showError(error){
        alert(`erro: ${error.message}`);
    }
})

function coordsResult(latitude,longitude){
    // aqui faremos as requisições dos dados necessarios 
    fetch(`${api.base}weather?lat=${latitude}&lon=${longitude}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
    .then(response =>{
        console.log(response)
        if(!response.ok){
            throw new Error(`http error: status ${response.status}`)
        }
        return response.json();
    })
    .catch(error =>{
        alert(error.message);
    })
    .then(response => {
        displayResults(response);
    });
}

function displayResults(weather){
    console.log(weather);

    cidade.innerText = `${weather.name} - ${weather.sys.country}`;
    // Data atual
    let hoje = new Date();
    data.innerText = dateBuilder(hoje);

    let iconName = weather.weather[0].icon;
    containerImg.innerHTML = `<img src="./imagens/icons-tempo/${iconName}.png">`;

    let temp = `${Math.round(weather.main.temp)}`
    tempo.innerHTML = `${temp}ºC`;

    statusTempMensagem = weather.weather[0].description;
    statusTemp.innerText = statusTempMensagem
    
    umidade.innerText = `${Math.round(weather.main.humidity)}%`

    min.innerText = `${Math.round(weather.main.temp_min)}ºC`
    max.innerText = `${Math.round(weather.main.temp_max)}ºC`

}


function dateBuilder(d) {
    let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julio", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    let dia = dias[d.getDay()]; //getDay: 0-6
    let diaAtual = d.getDate();
    let mes = meses[d.getMonth()];
    let ano = d.getFullYear();

    return `${dia} ${diaAtual} ${mes} ${ano}`;
}