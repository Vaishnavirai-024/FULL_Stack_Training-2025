const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const resultBox = document.getElementById("result");
const errorBox = document.getElementById("error");

async function getWeather() {
    const city = cityInput.value.trim();
    if (city === "") {
        errorBox.textContent = "Please enter a city name!";
        resultBox.innerHTML = "";
        return;
    }

    errorBox.textContent = "Loading...";
    resultBox.innerHTML = "";

    const API_KEY = "YOUR_API_KEY_HERE";   // Add your real API key!
    
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const res = await fetch(URL);
        const data = await res.json();

        if (data.cod !== 200) {
            errorBox.textContent = "City not found! Please check spelling.";
            return;
        }

        errorBox.textContent = "";
        resultBox.innerHTML = `
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Condition:</strong> ${data.weather[0].description}</p>
        `;
    } catch {
        errorBox.textContent = "Error fetching weather data!";
    }
}

searchBtn.addEventListener("click", getWeather);
