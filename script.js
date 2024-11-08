console.log("Major Frontend tech used : HTML & CSS");
console.log("Major Backend tech used : JavaScript & API Integration");

const city_name=document.querySelector('.city_name');
const search=document.querySelector('.search');

search.addEventListener('click',() => {
    console.log(city_name.value)
})
