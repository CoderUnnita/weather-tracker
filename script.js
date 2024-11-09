console.log("Major Frontend tech used : HTML & CSS");
console.log("Major Backend tech used : JavaScript & API");

const city_name = document.querySelector('.city_name');
const searchKey = document.getElementById('.searchBttn');
const weatherImg = document.querySelector('.images');
const temper = document.querySelector('.temp');
const explain = document.querySelector('.describe');
const humidity = document.getElementById('.humid');
const speed = document.getElementById('.wind-speed');

async function identifyWeather(cityU){
    const apiKey = 'b39a53c9458c52145b9a150c3394dd06';
    const link = 'https://api.openweathermap.org/data/2.5/weather?q=${cityU}&appid=${apiKey}';

    const weatherDetails =  await fetch('${link}').then(response => response.json());

    console.log(weatherDetails);

}
searchBttn.addEventListener('click', () => {
    identifyWeather(city_name.value);
})

