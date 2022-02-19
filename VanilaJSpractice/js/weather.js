const API_KEY = "da9df9f9fcea2b8815fdaeec022dc6d0";

function found(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather");
      const city = document.querySelector(".city");
      city.innerText = data.name;
      weather.innerText = `🌡${data.weather[0].main}, ${Math.floor(
        data.main.temp
      )}℃`;
    });
}

function noFound() {
  alert("Where are you? Can't find you :(");
}

navigator.geolocation.getCurrentPosition(found, noFound);