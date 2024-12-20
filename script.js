console.log("Major Frontend tech used : HTML & CSS");
console.log("Major Backend tech used : JavaScript & API");


//DOM Manipulation
const city_name = document.querySelector('.city_name');
const water = document.querySelector('.watai');
const spread = document.querySelector('.winsp');
const searchKey = document.querySelector('#searchBttn');
const weatherImg = document.querySelector('#images');
const temper = document.querySelector('.temp');
const explain = document.querySelector('.describe');


async function identifyWeather(city){
    const apiKey = 'b39a53c9458c52145b9a150c3394dd06';
    const link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(link);

    try{
        if(!response.ok){
            throw new Error(`HTTP error! status:${response.status}`);
        }
    } catch(error){
        console.error(error);
    }


    const weatherDetails = await response.json();

    console.log(weatherDetails);

    if (weatherDetails.cod === '404'){
        weatherImg.src = "/weatherImage/404.png";
        return;
    }

    temper.innerHTML = `${Math.round (weatherDetails.main.temp - 273.15)}°C`;

    explain.innerHTML = weatherDetails.weather[0].description;

    water.innerHTML = `${weatherDetails.main.humidity}%`;

    spread.innerHTML = `${weatherDetails.wind.speed}m/s`;

    switch(weatherDetails.weather[0].main)
    {
        case 'Clouds':
            weatherImg.src="/weatherImage/cloud.png";
            break;

        case 'Overcast clouds':
            weatherImg.src="/weatherImage/rain.png";
            break;
            
        case 'Haze':
            weatherImg.src="/weatherImage/mist.png";
            break; 
         
        case 'Clear':
            weatherImg.src="/weatherImage/clear.png";
            break;

        case 'Mist':
            weatherImg.src="/weatherImage/mist.png";
            break;

        case 'Rain':
            weatherImg.src="/weatherImage/rain.png";
            break;
            
        case 'Snow':
            weatherImg.src="/weatherImage/snow.png";
            break;

    }

}

document.addEventListener('DOMContentLoaded', () => {
    searchBttn.addEventListener('click', () => {
      const city = city_name.value.trim();
      if (city) {
        identifyWeather(city);
      } else {
        console.log('Please enter a city name');
      }
    });
  });

// searchBttn.addEventListener('click', () => {
//     identifyWeather(city_name.value);
// })

