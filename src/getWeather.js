/* eslint-disable max-len */
// const default =()={
import getImage from './imgDepict';
import domrender from './domInsertion';

// import background from './imgDepict';
// window.addEventListener('load', (event) => {
//   console.log('page is fully loaded');
// });
// api.openweathermap.org/data/2.5/weather?q={city name}
// api.openweathermap.org/data/2.5/forecast?q={city name}
const APIKEY = '3f1649f8b9563002df71974391b99f2e';
// const cityName = 'london';
const domView = domrender();


// const cityName = document.querySelector('#inputText').value;
// const unit = 'metric';

// Use Fetch API to GET data from OpenWeather API
// return json
const locationData = ((cityName) => {
  const headers = new Headers();
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APIKEY}`;
  // const URL = `https://api.openweathermap.org/data/2.5/forecast/daily?${position}&cnt=7&units=imperial&APPID=${appid}`;

  fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers,
  }).then((resp) => resp.json())
    .then((data) => {
      // console.log(data);
      domView.updateView(data);

      // let myAnchor = document.getElementById('myAnchor');
      // let mySpan = document.createElement('span');
      // mySpan.innerHTML = 'replaced anchor!';
      // myAnchor.parentNode.replaceChild(mySpan, myAnchor);

      // document.getElementById('desc-item').innerHTML = `<span class="font-weight-bold text-center" id="desc">${data.weather[0].main}</span>
      //  <p class="font-weight-bold" id="fullDesc">${data.weather[0].description}</p>`;

      // const cel = Math.round(parseFloat(data.main.temp - 273.15));
      // const cell = document.getElementById('temp-item');
      // cell.innerHTML = `<p class="font-weight-bold text-center tempC" id="tempValueC">${cel}&degC</p>`;


      // document.getElementById('togBtn').addEventListener('click', () => {
      //   const checkBox = document.querySelector('input[type=checkbox]');
      //   if (checkBox.checked === true) {
      //     const fahr = Math.round(parseFloat(data.main.temp - 273.15) * 1.8 + 32);
      //     const fahren = document.getElementById('temp-item');
      //     fahren.innerHTML = `<p class="font-weight-bold text-center tempF" id="tempValueC">${fahr}&degF</p>`;
      //   } else {
      //     cell.innerHTML = `<p class="font-weight-bold text-center tempC" id="tempValueC">${cel}&degC</p>`;
      //   }
      // });


      // document.getElementById('wind-item').innerHTML = `<p class="font-weight-bold text-center" id="windText">wind</p><p class="covering">
      // <span class="font-weight-bold" id="windValue">${data.wind.speed} </span><span id='unit'>mph</span></p>`;

      // document.getElementById('humid-item').innerHTML = `<p class="font-weight-bold text-center" id="humidText">humidity</p>
      // <p class="font-weight-bold text-center" id="humidValue">${data.main.humidity}</p>`;

      // document.getElementById('loc-item').innerHTML = `<span class="font-weight-bold text-center" id="loc-name">${data.name}</span>`;

      getImage(data);
    })
    .catch(
      (err) => console.log(JSON.stringify(err)),
    );
  //   cleared();
})();

export default locationData;
