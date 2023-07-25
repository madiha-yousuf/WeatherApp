const inputBox = document.querySelector('.input-box');
const searchBox = document.getElementById('search-btn');
const weatherImg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');
const weather_details = document.querySelector('.weather-details');


async function checkWeather(city) {

    const api_key = "88608a1073bc54078e1dffe18a622ea0";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather_data = await fetch(`${url}`).then(
        response => response.json());
        if(weather_data.cod === '404'){
            location_not_found.style.display = "flex";
            weather_body.style.display = "none";
            weather_details.style.display = "none";

            console.log("Error");
            return;
        }
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)} °C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind.innerHTML = `${weather_data.wind.speed}Km/H`;
    

switch(weather_data.weather[0].main){
    case 'Clouds':
        weatherImg.src = "/images/clouds.png";
        break;
        case 'Rain':
        weatherImg.src = "/images/rain.png";
        break;
        case 'Clear':
        weatherImg.src = "/images/clear.png";
        break;
        case 'Mist':
        weatherImg.src = "/images/mist.png";
        break;
        case 'Snow':
        weatherImg.src = "/images/snow.png";
        break;

}
}


searchBox.addEventListener('click', () => {
    checkWeather(inputBox.value);
})


