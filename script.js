console.log("Major Frontend tech used : HTML & CSS");
console.log("Major Backend tech used : JavaScript & API");

const city_name = document.querySelector('.city_name');
const water = document.querySelector('.watai');
const spread = document.querySelector('.wind');
const searchBttn = document.querySelector('.searchBttn');
const weatherImg = document.querySelector('images');
const temper = document.querySelector('.temp');
const explain = document.querySelector('.describe');


async function identifyWeather(city){
    const apiKey = 'b39a53c9458c52145b9a150c3394dd06';
    const link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

 const weatherDetails = await fetch(link).then((response) => response.json());

    console.log(weatherDetails);

    if (weatherDetails.cod === '404'){
        weatherImg.src = "/weatherImage/404.png";
        return;
    }

    temper.innerHTML = `${Math.round (weatherDetails.main.temp - 273.15)}°C`;

    explain.innerHTML = `${weatherDetails.weather[0].description}`;

    water.innerHTML = `${weatherDetails.main.humidity}`;

    spread.innerHTML = `${weatherDetails.wind.speed}`;

    switch(weatherDetails.weather[0].main)
    {
        case 'clouds':
            weatherImg.src="/weatherImage/cloud.png";
            break;
         
        case 'clear':
            weatherImg.src="/weatherImage/clear.png";
            break;

        case 'mist':
            weatherImg.src="/weatherImage/mist.png";
            break;

        case 'rain':
            weatherImg.src="/weatherImage/rain.png";
            break;
            
        case 'snow':
            weatherImg.src="/weatherImage/snow.png";
            break;

    }

}

searchBttn.addEventListener('click', () => {
    identifyWeather(city_name.value);
})

