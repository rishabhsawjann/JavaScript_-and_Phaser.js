let cityInput = document.getElementById("cityInput");
let getWeatherBtn = document.getElementById("getWeatherBtn");
let weatherResult = document.getElementById("weatherResult");

// Replace with your API key from OpenWeatherMap
const apiKey = " 9a02b289167d7bc326ff9d4346b12787";

getWeatherBtn.onclick = function() {
    let city = cityInput.value.trim();
    if (!city) {
        weatherResult.textContent = "❌ Please enter a city name";
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            let temp = data.main.temp;
            let desc = data.weather[0].description;
            weatherResult.textContent = `🌡 ${city}: ${temp}°C, ${desc}`;
        })
        .catch(error => {
            weatherResult.textContent = "❌ " + error.message;
        });
};
