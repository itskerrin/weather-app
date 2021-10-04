// change background

// change color scheme

// get time - if night time change image to a night scheme

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

    // change html display
    document.querySelector('.location').innerText = name;
    document.querySelector('.temperature').innerText = Math.round(temp) + '°C';
    document.querySelector('.weather-type').innerText = description;
    document.querySelector('.weather-icon').src =
      'http://openweathermap.org/img/wn/' + icon + '@2x.png';
  },

  search: function () {
    this.getWeather(document.querySelector('.city-search').value);
  },
};

document.querySelector('.search-btn').addEventListener('click', (e) => {
  e.preventDefault();
  weather.search();
});

document.querySelector('.search-btn').addEventListener('keyup', (e) => {
  e.key ? 'Enter' || e.keyCode === 13 : e.preventDefault(), weather.search();
});

// Get time

const date = new Date();
const time = date.getHours();
console.log(time);

let background = (document.body.style.backgroundImage =
  "url('./images/we-night.jpg')");

// Change background
