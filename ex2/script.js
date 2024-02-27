const fetch_data = async (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#city").innerText = data.name;
      document.querySelector("#temp").innerText = `${data.main.temp}°C`;
      document.querySelector("#feel").innerText = `${data.main.feels_like}°C`;

      const icon = document.querySelector("#icon");
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      icon.alt = data.weather[0].description;

      document.querySelector("#desc").innerText = data.weather[0].description;
      document.querySelector(
        "#humidity"
      ).innerHTML = `Humidité : <span>${data.main.humidity}%</span>`;
      document.querySelector(
        "#wind"
      ).innerHTML = `Vent : <span>${data.wind.speed}km/h</span>`;
      document.querySelector(
        "#pressure"
      ).innerHTML = `Pression : <span>${data.main.pressure}hPa</span>`;
    })
    .catch((err) => {
      alert("Erreur lors de la récupération des données");
      document.querySelector(".card").innerHTML = "";
    });
};

const key = "3f3eca7ae2e32a3d5ed29a9130c530f8";
const city_name = "Paris";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${key}&units=metric&lang=fr`;

fetch_data(url);

document.querySelector("#city-select").addEventListener("change", () => {
  const city_name = document.querySelector("#city-select").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${key}&units=metric&lang=fr`;

  fetch_data(url);
});
