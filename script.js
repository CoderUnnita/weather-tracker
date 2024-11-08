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

city_name.addEventListener('keydown',(event) => {
    if (event.key == 'Enter' && 
        city_name.value.trim() != '')
        {
            updateWeather_detail(city_name.value)
            city_name.value = ''
            city_name.blur()
        }

})

function getFetchData(){
    const apiUrl = ' https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={apiKey}'
}

function updateWeather_detail(city){
    const weatherData = getFetchData()
}