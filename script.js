const inputBox = document.querySelector('.search-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temprature = document.querySelector('.temprature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found=document.querySelector('.location-not-found');
const weather_body=document.querySelector('.weather-body');

async function checkweather(city) {
    const api_key = "5d804031fb1286f77f6ce8c3c436e9fc";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    console.log(weather_data);

    if (weather_data.cod === `404`) {
        location_not_found.style.display="flex";
        weather_body.style.display="none";
        return;
    }

    location_not_found.style.display="none";
    weather_body.style.display="flex";

    temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    description.innerHTML = `${weather_data.weather[0].description}`

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "./assets/cloud.jpeg";
            break;
        case 'Clear':
            weather_img.src = "./assets/clear.jpeg";
            break;
        case 'Rain':
            weather_img.src = "./assets/rain.jpeg";
            break;
        case 'Mist':
            weather_img.src = "./assets/mist.jpeg";
            break;
        case 'Snow':
            weather_img.src = "./assets/snow.jpeg";
            break;

    }

}

searchBtn.addEventListener('click', () => {
    checkweather(inputBox.value);
})
