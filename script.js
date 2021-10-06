// get weather from API
let weather = {
  getWeather: function (cityName) {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        cityName +
        '&units=metric&appid=adc14a3026b105534beadb2fcd109778'
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data))
      .catch((err) => alert('Please enter a valid city name.'));
  },

  displayWeather: function (data) {
    const { name } = data;
    const { temp, feels_like } = data.main;
    const { description, icon } = data.weather[0]; // weather is within an array
    console.log(name, temp, feels_like, description, icon);

    // change ui
    document.querySelector('.location').innerText = name;
    document.querySelector('.temperature').innerText = Math.round(temp) + '°C';
    document.querySelector('.weather-type').innerText = description;
    document.querySelector('.weather-icon').src =
      'http://openweathermap.org/img/wn/' + icon + '@2x.png';

    // change background img based on weather description
    if (description.includes('clear')) {
      document.body.style.backgroundImage = "url('./images/we-clearsky.jpg')";
    } else if (description.includes('few')) {
      document.body.style.backgroundImage = "url('./images/we-lcloudy.jpg')";
    } else if (
      description.includes('scattered') ||
      description.includes('overcast')
    ) {
      document.body.style.backgroundImage = "url('./images/we-cloudy.jpg')";
    } else if (description.includes('shower')) {
      document.body.style.backgroundImage = "url('./images/we-drizzle.jpg')";
    } else if (description.includes('rain')) {
      document.body.style.backgroundImage = "url('./images/we-rain.jpg')";
    } else if (description.includes('thunderstorm')) {
      document.body.style.backgroundImage = "url('./images/we-storm.jpg')";
    } else if (description.includes('snow')) {
      document.body.style.backgroundImage = "url('./images/we-snow.jpg')";
    } else if (description.includes('mist')) {
      document.body.style.backgroundImage = "url('./images/we-fog.jpg')";
    }
  },

  // search form value
  search: function () {
    this.getWeather(document.querySelector('.city-search').value);
  },
};

// Event listeners - form search
document.querySelector('.search-btn').addEventListener('click', (e) => {
  e.preventDefault();
  weather.search();
});

document.querySelector('.search-btn').addEventListener('keyup', (e) => {
  e.key ? 'Enter' || e.keyCode === 13 : e.preventDefault(), weather.search();
});
