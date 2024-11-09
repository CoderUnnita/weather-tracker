console.log("Major Frontend tech used : HTML & CSS");
console.log("Major Backend tech used : JavaScript & API Integration");

const city_name = document.querySelector('.city_name');
const search = document.querySelector('.search');

const apiKey = 'b39a53c9458c52145b9a150c3394dd06'

search.addEventListener('click',() => {
    if ( city_name.value.trim() != '')
    {
        updateWeather_detail(city_name.value)
        city_name.value = ''
        city_name.blur()
    }
})

city_name.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && 
        city_name.value.trim() != '')
        {
            updateWeather_detail(city_name.value)
            city_name.value = ''
            city_name.blur()
        }

})

async function getFetchData(ends_here,city){
    const apiUrl = ' https://api.openweathermap.org/data/2.5/${ends_here}?q=${city}&appid=${apiKey}'

    const reply = await fetch(apiUrl)

    return reply.json()
}

async function updateWeather_detail(city){
    const weather_Data = await getFetchData('weather',city)
    console.log(weather_Data)
}