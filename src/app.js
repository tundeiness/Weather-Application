/* eslint-disable max-len */

// const baseUrl = 'https://fcc-weather-api.glitch.me/';
// const tailUrl = `api/current?lon=${lon}&lat=${lat}`;
// const webLink = baseUrl + tailUrl;
// const APPID = '3f1649f8b9563002df71974391b99f2e';
// const completeAPI = `api.openweathermap.org/data/2.5/weather?q=${location},${country}&APPID=${APPID}`;
// const location, country;
const fetchData = () => {
  // const img = document.querySelector('img');
  fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3f1649f8b9563002df71974391b99f2e', { mode: 'cors' })
    .then((response) => {
      const data = response.json(); return data;
    })
    .then((data) => {
      const iconData = data.weather[0].icon;
      console.log(iconData);
      return iconData;
    });
};
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

export default fetchData;
