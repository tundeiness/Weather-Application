import 'whatwg-fetch';
import 'bootstrap';
import defaultDisplay from './default';


//
// const subButton = document.getElementById('submit');
// subButton.addEventListener('click', (evnt) => {
//   evnt.preventDefault();
//   const view = locView();
//   view(cityName);
// });
// console.log(cityName);
// const view = render();
// view();
const cityName = document.getElementById('inputText').value;
console.log(cityName);

const defaultView = defaultDisplay();
defaultView();

// const subButton = document.getElementById('submit');
// subButton.addEventListener('click', (evnt) => {
//   evnt.preventDefault();

//   const cityName = document.getElementById('inputText');
//   console.log(cityName.value);
// });


// const subButton = document.getElementById('submit');
// subButton.addEventListener('click', (evnt) => {
// evnt.preventDefault();
// const txt = document.getElementById('inputText').value;
// console.log(txt);
// getWeather(txt);
// const mainBox = document.getElementById('content-box');
// mainBox.remove();
// const newBox = document.createElement('div');
// newBox.setAttribute('class', 'flex-cont d-flex flex-column justify-content-center border');
// newBox.setAttribute('id', 'content-box');
// const head2 = document.createElement('h2');
// const heading = '<div class="heading text-center"><h2>Daily Weather</h2></div>';
// heading.appendChild(head2);
// newBox.innerHTML = heading;
// newBox.innerHTML = getWeather(txt);
// const content = document.getElementById('main-box');
// content.appendChild(newBox);
// content.innerHTML = heading;
// content.innerHTML = getWeather(txt);
// });


// const defData = defaultDisplay();
// defData();


// const txt = document.getElementById('inputText');
// txt.addEventListener('input', () => {
//   console.log(txt.value);
// });

// document.getElementById('submit').addEventListener('click', () => {
// evt.preventDefault();


// function getInput() {
//   const userInput = document.getElementById('inputText').value;
//   console.log(userInput);
// }

// const mainBox = document.getElementById('content-box');
// mainBox.remove();

// const cityName = document.querySelector('input[name="input"]').value;
// console.log(cityName);

// const cityName = document.getElementById('inputText').value;
//  const cityName = document.querySelector('input[name="input"]').value;
//  console.log(cityName);

// mainBox.appendChild();

// getWeather(cityName);
// const cityname = document.querySelector('#inputText').value;
// let target = true;
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


// document.querySelector('#inputText').value = '';
// });


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
