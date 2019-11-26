
// const baseUrl = 'https://fcc-weather-api.glitch.me/';
// const tailUrl = `api/current?lon=${lon}&lat=${lat}`;
// const webLink = baseUrl + tailUrl;
// const APPID = '3f1649f8b9563002df71974391b99f2e';
// const completeAPICall = `api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APPID}`;


// document.addEventListener('DOMContentLoaded', search.init());

// const fetchData = () => ({

//   renderWeather(input) {
//     const celcius = Math.round(parseFloat(input.main.temp) - 273.15);
//     const fahrenheit = Math.round(((parseFloat(input.main.temp) - 273.15) * 1));

//     document.getElementById('descrpition').innerHTML = input.weather[0].description;
//     document.getElementById('temp').innerHTML = `${celcius}&deg`;
//     document.getElementById('location').innerHTML = input.name;
//   },

// });


// const fetchData = () => {
//   fetch(search.init(), { mode: 'cors' })
//     .then((response) => response.json())
//     .then((data) => {
//       drawWeather(data); // Call drawWeather
//       // console.log(data);
//     })
//     .catch((err) => {
//       // catch any errors
//       console.log(err);
//     });
// };


// https://media.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif --> rainy
// https://media.giphy.com/media/KV1s4kSJHaY3m/giphy.gif --> sunny
// https://media.giphy.com/media/G7XzhrnRdxNjW/giphy.gif --> cloudy
// https://media.giphy.com/media/SbtjVFeZJbb44/giphy.gif --> snowy
// https://media.giphy.com/media/xTiTnGmU99wLFvZBfy/giphy.gif --> snowy 2
// https://media.giphy.com/media/xT0wlvGLHmojbeu5vq/giphy.gif --> hot weather
// https://media.giphy.com/media/5RHAxkNRlLPjy/giphy.gif --> windy
// https://media.giphy.com/media/13ZEwDgIZtK1y/giphy.gif --> stormy
// https://media.giphy.com/media/PIh4laWJlz9bq/giphy.gif --> partly cloudy

// 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3f1649f8b9563002df71974391b99f2e'
// fetchData();


// $(document).ready(() => {
// const { geolocation } = navigator;
// geolocation.getCurrentPosition(showLocation, errorHandler);

// function errorHandler(err) {
//   const error = {
//     1: 'permission denied',
//     2: 'Position Unavailable',
//     3: 'Request Timeout',
//   };
//   alert(error[err.code]);
// }

// function showLocation(position) {
//   const lat = position.coords.latitude;
//   const lon = position.coords.longitude;

/* latlon converter goes here in version 2.0 */

// const baseUrl = 'https://fcc-weather-api.glitch.me/';
// const tailUrl = `api/current?lon=${lon}&lat=${lat}`;
// const webLink = baseUrl + tailUrl;

// $.ajax({
//   url: webLink,
//   type: 'GET',
//   dataType: 'json',
//   success: function getLocation(data) {
//     $('.icon').attr('src', data.weather[0].icon);

//     const temperatureInDeg = data.main.temp;
//     const htmlAnsi = String.fromCharCode(176);
//     const metricSys = 'C';
//     const imperialSys = 'F';
//     const metricTemp = temperatureInDeg + htmlAnsi + metricSys;

/* Conversion of Temperature from Metric system to Imperial System */

// const temperatureInFar = Math.round(
//   (temperatureInDeg * 9 / 5 + 32) * 10 / 10,
// );
// const imperialTemp = temperatureInFar + htmlAnsi + imperialSys;

/* Conversion Ends */

// $('.temp').text(metricTemp);
// const locality = data.name;
// const { country } = data.sys;
// const localityAndCountry = `${locality}, ${country}`;
// $('.state').text(localityAndCountry);

// $('.describe').text(data.weather[0].description);

// $('#togBtn').on('click', () => {
//   if ($('.temp').html() == metricTemp) {
//     $('.temp').html(imperialTemp);
//   } else {
//     $('.temp ').html(metricTemp);
//   }
// });
// },

//     error() {
//       alert('Something went wrong with the server...');
//     },
//   });
// }
// });
