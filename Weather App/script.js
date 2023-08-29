const apiKey = "01996abbe7125bfad01c025f9e994626";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const params = {
    q: city,
    units: "metric",
    appid: apiKey,
  };

  const query = new URLSearchParams(params);
  const url = apiUrl + "?" + query;

  try {
    const response = await fetch(url);

    if (response.status === 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      const data = await response.json();
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      const weatherMain = data.weather[0].main;
      if (weatherMain === "Clouds") {
        weatherIcon.src = "weather-app-img/images/clouds.png";
      } else if (weatherMain === "Clear") {
        weatherIcon.src = "weather-app-img/images/clear.png";
      } else if (weatherMain === "Rain") {
        weatherIcon.src = "weather-app-img/images/rain.png";
      } else if (weatherMain === "Drizzle") {
        weatherIcon.src = "weather-app-img/images/drizzle.png";
      } else if (weatherMain === "Humidity") {
        weatherIcon.src = "weather-app-img/images/humidity.png";
      } else if (weatherMain === "Mist") {
        weatherIcon.src = "weather-app-img/images/mist.png";
      } else {
        weatherIcon.src = "weather-app-img/images/default.png";
      }

      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
