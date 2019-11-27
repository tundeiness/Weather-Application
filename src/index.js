import 'whatwg-fetch';
import 'bootstrap';
import defaultDisplay from './defaultWeather';
import locationWeather from './renderWeather';

const defData = defaultDisplay();
const weather = locationWeather();


document.getElementById('submit').addEventListener('click', (evt) => {
  // evt.preventDefault();
  const cityname = document.querySelector('#inputText').value;
  let target = true;
  // console.log(cityname);

  // const APIKEY = '3f1649f8b9563002df71974391b99f2e';
  // const loc = document.getElementById('search').value;
  // const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=${APIKEY}`;

  // fetch(url, { mode: 'cors' })
  //   .then((resp) => resp.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch(
  //     (err) => console.log(JSON.stringify(err)),
  //   );

  if (target) {
    target = false;
    weather(cityname);
  } else {
    defData();
  }


  // document.querySelector('#inputText').value = '';
});


// document.getElementById('togBtn').addEventListener("click", (event) {
//   event.preventDefault();
// });


// console.log(input);
// import clear from './clearInput';
// import render from './renderWeather';
// import { celsius, fahrenheit } from './convertTemp';
// import app from './app';
// import weather from './renderWeather';
// import search from './search';
// import weather from './renderWeather';

// const searches = search();
// const apps = app();

// const weather = weather();

// let setTemp = document.getElementById("set-temp");
// document.querySelector("#searchForm").addEventListener("submit", getWeather);

// const CURRENT_LOCATION = document.getElementsByClassName('weather-content__overview')[0];
// const CURRENT_TEMP = document.getElementsByClassName('weather-content__temp')[0];
// const FORECAST = document.getElementsByClassName('component__forecast-box')[0];

// TUTORIAL READERS:
// yeah, using an external resource for the icons and applying them here using a switch block
// function applyIcon(icon) {
//   let selectedIcon;
//   switch (icon) {
//     case '01d':
//       selectedIcon = 'wi-day-sunny';
//       break;
//     case '01n':
//       selectedIcon = 'wi-night-clear';
//       break;
//     case '02d':
//     case '02n':
//       selectedIcon = 'wi-cloudy';
//       break;
//     case '03d':
//     case '03n':
//     case '04d':
//     case '04n':
//       selectedIcon = 'wi-night-cloudy';
//       break;
//     case '09d':
//     case '09n':
//       selectedIcon = 'wi-showers';
//       break;
//     case '10d':
//     case '10n':
//       selectedIcon = 'wi-rain';
//       break;
//     case '11d':
//     case '11n':
//       selectedIcon = 'wi-thunderstorm';
//       break;
//     case '13d':
//     case '13n':
//       selectedIcon = 'wi-snow';
//       break;
//     case '50d':
//     case '50n':
//       selectedIcon = 'wi-fog';
//       break;
//     default:
//       selectedIcon = 'wi-meteor';
//   }
//   return selectedIcon;
// }

// Use returned json from promise to render daily forecast
// renderData = (location, forecast) => {
// render city, current weather description and temp
// const currentWeather = forecast[0].weather[0];
// const widgetHeader = `<h1>${location.name}</h1><small>${currentWeather.description}</small>`;
// CURRENT_TEMP.innerHTML = `<i class="wi ${applyIcon(currentWeather.icon)}"></i> ${Math.round(forecast[0].temp.day)} <i class="wi wi-degrees"></i>`;
// CURRENT_LOCATION.innerHTML = widgetHeader;

// render each daily forecast
// forecast.forEach((day) => {
//   const date = new Date(day.dt * 1000);
//   const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
//   const name = days[date.getDay()];
//   const dayBlock = document.createElement('div');
//   dayBlock.className = 'forecast__item';
//   dayBlock.innerHTML = `<div class="forecast-item__heading">${name}</div>
//     <div class="forecast-item__info"><i class="wi ${applyIcon(day.weather[0].icon)}"></i> <span class="degrees">${Math.round(day.temp.day)}<i class="wi wi-degrees"></i></span></div>`;
//   FORECAST.appendChild(dayBlock);
// });
// };

// TUTORIAL reader: I moved the calling of the weather API url
// to be able to get the current browser location
// if ('geolocation' in navigator) {
// navigator.geolocation.getCurrentPosition((position) => {
// 	const coordinates = `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
// run/render the widget data
//     getWeatherData(coordinates).then((weatherData) => {
//       const { city } = weatherData;
//       const dailyForecast = weatherData.list;

//       renderData(city, dailyForecast);
//     });
//   });
// } else {

// }


// function getData() {
//   const cleared = clear();
//   const renders = render();
//   const APIKEY = '3f1649f8b9563002df71974391b99f2e';
//   const loc = document.getElementById('search').value;
//   const url = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${APIKEY}`;

//   fetch(url, { mode: 'cors' })
//     .then((resp) => resp.json())
//     .then((data) => {
//       console.log(data);
//       celsius(data.main.temp);
//       fahrenheit(data.main.temp);
//       renders(data);
//     })
//     .catch(
//       (err) => console.log(JSON.stringify(err)),
//     );
//   cleared();
// }
// getData();


// function drawWeather(d) {
//   // const celcius = Math.round(parseFloat(d.main.temp) - 273.15);
//   // const fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);
//   // const { description } = d.weather[0];

//   // document.getElementById('desc-item').innerHTML = description;
//   // document.getElementById('temp-item').innerHTML = `${celcius}&deg;`;
//   // document.getElementById('loc-item').innerHTML = d.name;

//   // if (description.indexOf('rain') > 0) {
//   // document.body.className = 'rainy';
//   // } else if (description.indexOf('cloud') > 0) {
//   // document.body.className = 'cloudy';
//   // } else if (description.indexOf('sunny') > 0) {
//   // document.body.className = 'sunny';
//   // } else {
//   // document.body.className = 'clear';
//   // }
// }


// function weatherBallon(url) {
//   // const APIKEY = '3f1649f8b9563002df71974391b99f2e';
//   // const loc = document.getElementById('search').value;
//   fetch(url, { mode: 'cors' })
//     .then((resp) => resp.json()) // Convert data to json
//     .then((data) => {
//       drawWeather(data);
//     })
//     .catch(() => {
//       // catch any errors
//     });
// }


// const description = document.querySelector('desc-item');

// const icon = document.querySelector('icon-item');
// const temperature = document.querySelector('temp-item');
// const wind = document.querySelector('wind-item');
// const humidity = document.querySelector('humid-item');
// const location = document.querySelector('loc-item');
// const input = document.querySelector('input-item');
// document.addEventListener('DOMContentLoaded', searches.init());


// const temperature = document.querySelector('temp-item');
// const temperature = document.querySelector('temp-item');
// const temperature = document.querySelector('temp-item');

// console.log(apps);
// import './style.css';
// import weather from './renderWeather';
// const getUrl = (url) => new Promise(((resolve, reject) => {}
//   const xhttp = new XMLHttpRequest();
//   xhttp.open('GET', url, true);
//   xhttp.onload = () => {
//     if (xhttp.status === 200) {
//       resolve(JSON.parse(xhttp.response));
//     } else {
//       reject(xhttp.statusText);
//     }
//   };

//   xhttp.onerror = () => {
//     reject(xhttp.statusText);
//   };
//   xhttp.send();
// }));

// const promise = getUrl('https://www.status.com');
// promise.then((tweets) => {
//   console.log(tweets);
//   return getUrl('another url');
// }).then((another) => {
//   console.log(another);
// });

// getUrl.then((data) => {
//   const piece = data['name'];
// });


// const myPromise = new Promise((resolve, reject) => {
//   resolve('Some Api-Data');
// });

// const myPromisetwo = new Promise((resolve, reject) => {
//   resolve('Another Api-Data');
// });


// Promise.all([myPromise, myPromisetwo]).then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });

// myPromise.then((res) => {
//   console.log(res);
// }, (err) => {
//   console.log(err);
// });

// myPromise.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });


// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }
//   const err = new Error(response.statusText);
//   err.response = response;
//   throw err;
// }

// function parseJSON(response) {
//   return response.json();
// }
// // api.openweathermap.org/data/2.5/weather?q=London,uk
// // https://api.chucknorris.io/jokes/random
// //  http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1111111111
// fetch('https://api.giphy.com/v1/gifs/translate?api_key=7XYIk0RTrdKKperYfIArygdrBqs8tqeS&s=cats')
//   .then(checkStatus)
//   .then(parseJSON)
//   .then((data) => {
//     // console.log('request succeeded with JSON response', data);
//     // console.log(data.value);
//     // console.log(data);
//     console.log(data.images.original.url);
//   })
//   .catch((error) => {
//     console.log('request failed', error);
//   });


// fetch('http://api.icndb.com/jokes/random/10', {
//   method: 'GET',
//   mode: 'cors',
//   redirect: 'follow',
//   headers: new Headers({
//     'Content-Type': 'application/json',
//     Accept: 'application/json, text/plain',
//   }),

// }).then((res) => {
//   if (res.status !== 200) {
//     // console.log("There seems to be a problem");
//     return;
//   }
//   console.log(res);
//   // return res.json();
// }).then((result) => {
//   console.log(result);
// }).catch((err) => {
//   console.log(err);
// });
