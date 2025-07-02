const inputbox = document.querySelector(".input-box");
const searchBtn = document.querySelector("#searchbtn");
const weatherImg = document.querySelector(".weather-img");
const temperature = document.querySelector(".temp");
const description = document.querySelector(".des");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");
const cityName = document.querySelector(".city-name");
const locationNotFound = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");

async function checkWeather(city) {
    const api_key= "8ee976b2dc57f7c2ed373067a4f75bf4";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === '404'){
        locationNotFound.style.display = "flex";
        weather_body.style.display = "none";
        console.log("errorr");
        return;
    }
    
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.5)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windSpeed.innerHTML = `${Math.round(weather_data.wind.speed)}km/h`;

    //image according to weather
    switch(weather_data.weather[0].main){
        case "Clouds":
            weatherImg.src="asset/cloud.png ";
            break;
        case "Clear":
            weatherImg.src="asset/clear.png";
            break;
        case "Rain":
            weatherImg.src="asset/rain.png ";
            break;
        case "Mist":
            weatherImg.src= "asset/mist.png ";
            break;
        case "Snow":
            weatherImg.src="asset/snow.png ";
            break;
    }

    
}

searchBtn.addEventListener("click",()=> {
    checkWeather(inputbox.value);
})