function updateCurrentDateNTime() {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let now = new Date();
  let month = months[now.getMonth()];
  let date = now.getDate();
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let time = `${hours}:${minutes}`;
  return `${day}, ${month} ${date}, ${time}`;
}
let elementDateNTime = document.querySelector("#today-date-time");
elementDateNTime.innerHTML = updateCurrentDateNTime();

// Challenge Week 5
function changeCityTemp(response) {
  console.log(response.data.name);
  document.querySelector("#cityName").innerHTML = response.data.name;
  document.querySelector("#degree").innerHTML = Math.round(
    response.data.main.temp
  );
  //document.querySelector("#humidity").innerHTML = response.data.humidity;
  // document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
  //document.querySelector("#description").innerHTML =response.data.weather[0].main;
}
function searchCity(city) {
  let apiKey = "46a03ce6136c00c6c61685a56d248569";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(changeCityTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}
let searchForm = document.querySelector("#search-city-form");
searchForm.addEventListener("submit", handleSubmit);
