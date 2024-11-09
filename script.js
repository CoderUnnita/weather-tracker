console.log("Major Frontend tech used : HTML & CSS");
console.log("Major Backend tech used : JavaScript & API");

const city_name = document.querySelector('.city_name');
const searchKey = document.getElementById('.searchBttn');
const weatherImg = document.querySelector('.images');
const temper = document.querySelector('.temp');
const explain = document.querySelector('.describe');

async function identifyWeather(city){
    const apiKey = 'b39a53c9458c52145b9a150c3394dd06';
    const link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

 const weatherDetails = await fetch(link).then((response) => response.json());

    console.log(weatherDetails)

    temper.innerHTML = `${Math.round (weatherDetails.main.temp - 273.15)}°C`;

    explain.innerHTML = `${weatherDetails.weather[0].description}`;

    switch(weatherDetails.weather[0].description)
    {
        case 'clouds':
            weatimg.src="weatherImage/cloud.png";
         
        case 'clouds':
            weatimg.src="weatherImage/cloud.png";  

        case 'clouds':
            
        weatimg.src="weatherImage/cloud.png";

        case 'clouds':
            weatimg.src="weatherImage/cloud.png";
            
        case 'clouds':
            weatimg.src="weatherImage/cloud.png";

    }

}

searchBttn.addEventListener('click', () => {
    identifyWeather(city_name.value);
})

