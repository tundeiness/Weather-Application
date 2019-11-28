// const default =()={

// window.addEventListener('load', (event) => {
//   console.log('page is fully loaded');
// });
// api.openweathermap.org/data/2.5/weather?q={city name}
// api.openweathermap.org/data/2.5/forecast?q={city name}
const APIKEY = '3f1649f8b9563002df71974391b99f2e';
const cityName = 'london';
// const cityName = document.querySelector('#inputText').value;
const unit = 'metric';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APIKEY}`;
// Use Fetch API to GET data from OpenWeather API
// return json
const defaultData = () => {
  const headers = new Headers();
  // const URL = `https://api.openweathermap.org/data/2.5/forecast/daily?${position}&cnt=7&units=imperial&APPID=${appid}`;


  fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers,
  }).then((resp) => resp.json())
    .then((data) => {
      // console.log(data);
      document.getElementById('desc-item').innerHTML = `<span class="font-weight-bold text-center" id="desc">${data.weather[0].main}</span>
      <p class="font-weight-bold" id="fullDesc">${data.weather[0].description}</p>`;

      // const celcius = Math.round(parseFloat(data.main.temp));
      // document.getElementById('temp-item').innerHTML = `<p
      // class="font-weight-bold text-center"
      // id="tempValue">${celcius}&deg</p>`;
      // toggleF(cityName);
      // const toggle = document.getElementById('togBtn');
      // toggle.addEventListener('click', () => {
      // evt.preventDefault();
      // toggleC(cityName);
      // console.log('I was clicked!!!');
      // });
      const cel = Math.round(parseFloat(data.main.temp - 273.15));
      const cell = document.getElementById('temp-item');
      cell.innerHTML = `<p class="font-weight-bold text-center tempC" id="tempValueC">${cel}&degC</p>`;


      document.getElementById('togBtn').addEventListener('click', () => {
        // console.log('clicked!!!!');


        // const xCel = document.getElementById('tempValueC');
        // const fahr = Math.round(parseFloat(data.main.temp - 273.15) * 1.8 + 32);
        // const fahren = document.getElementById('temp-item');
        // fahren.innerHTML = `<p class="font-weight-bold text-center tempF" id="tempValueC">${fahr}&degF</p>`;


        // document.getElementById('tempValueC').remove();


        // document.getElementById('tempValueF').remove();
        // const celi = Math.round(parseFloat(data.main.temp - 273.15));
        // const cello = document.getElementById('temp-item');
        // cello.innerHTML = `<p class="font-weight-bold text-center tempC" id="tempValueC">${celi}&deg</p>`;


        // const fahr = Math.round(parseFloat(data.main.temp - 273.15) * 1.8 + 32);
        // document.getElementById('temp-item').innerHTML = `<p
        // class="font-weight-bold text-center" id="tempValueF">${fahr}&deg
        // F</p>`;
        const checkBox = document.querySelector('input[type=checkbox]');
        if (checkBox.checked === true) {
          const fahr = Math.round(parseFloat(data.main.temp - 273.15) * 1.8 + 32);
          const fahren = document.getElementById('temp-item');
          fahren.innerHTML = `<p class="font-weight-bold text-center tempF" id="tempValueC">${fahr}&degF</p>`;
        } else {
          cell.innerHTML = `<p class="font-weight-bold text-center tempC" id="tempValueC">${cel}&degC</p>`;
        }
      });


      document.getElementById('wind-item').innerHTML = `<p class="font-weight-bold text-center" id="windText">wind</p><p class="covering">
      <span class="font-weight-bold" id="windValue">${data.wind.speed} </span><span id='unit'>mph</span></p>`;

      document.getElementById('humid-item').innerHTML = `<p class="font-weight-bold text-center" id="humidText">humidity</p>
      <p class="font-weight-bold text-center" id="humidValue">${data.main.humidity}</p>`;

      document.getElementById('loc-item').innerHTML = `<span class="font-weight-bold text-center" id="loc-name">${data.name}</span>`;


      if (data.weather[0].main === 'Rain') {
        const obj = document.getElementById('content-box');
        obj.style.background = 'url(https://media.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif)';
        obj.style.backgroundSize = 'cover';
      } else if (data.weather[0].main === 'Clouds' || data.weather[0].main === 'cloud') {
        const obj = document.getElementById('content-box');
        obj.style.background = 'url(https://media.giphy.com/media/PIh4laWJlz9bq/giphy.gif)';
        obj.style.backgroundSize = 'cover';
      } else if (data.weather[0].main === 'Sunny' || data.weather[0].main === 'dry') {
        const obj = document.getElementById('content-box');
        obj.style.background = 'url(https://media.giphy.com/media/KV1s4kSJHaY3m/giphy.gif)';
        obj.style.backgroundSize = 'cover';
      } else if (data.weather[0].main === 'Snow') {
        const obj = document.getElementById('content-box');
        obj.style.background = 'url( https://media.giphy.com/media/xTiTnGmU99wLFvZBfy/giphy.gif)';
        obj.style.backgroundSize = 'cover';
      } else if (data.weather[0].main === 'Windy') {
        const obj = document.getElementById('content-box');
        obj.style.background = 'url(https://media.giphy.com/media/5RHAxkNRlLPjy/giphy.gif)';
        obj.style.backgroundSize = 'cover';
      } else if (data.weather[0].main === 'Storm') {
        const obj = document.getElementById('content-box');
        obj.style.background = 'https://media.giphy.com/media/13ZEwDgIZtK1y/giphy.gif';
        obj.style.backgroundSize = 'cover';
      } else if (data.weather[0].main === 'Hot') {
        const obj = document.getElementById('content-box');
        obj.style.background = 'url(https://media.giphy.com/media/xT0wlvGLHmojbeu5vq/giphy.gif)';
        obj.style.backgroundSize = 'cover';
      } else if (data.weather[0].main === 'Drizzle') {
        const obj = document.getElementById('content-box');
        obj.style.background = 'url(https://media.giphy.com/media/QPsEnRasf0Vfa/giphy.gif)';
        obj.style.backgroundSize = 'cover';
      } else {
        const obj = document.getElementById('content-box');
        obj.style.background = 'url(https://media.giphy.com/media/u01ioCe6G8URG/giphy.gif)';
        obj.style.backgroundSize = 'cover';
      }
    })
    .catch(
      (err) => console.log(JSON.stringify(err)),
    );
  //   cleared();
};

export default defaultData;
