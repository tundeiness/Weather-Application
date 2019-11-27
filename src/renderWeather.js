const renderWeather = (cityname) => {
  const APIKEY = '3f1649f8b9563002df71974391b99f2e';
  let unit = 'metric';
  let tempCelsius = true;
  const name = cityname;
  const toggle = document.getElementById('togBtn');
  const API = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APIKEY}&units=${unit}`;
  fetch(API, { mode: 'cors' })
    .then((resp) => resp.json())
    .then((data) => {
    // console.log(data);
      const celcius = Math.round(parseFloat(data.main.temp) - 273.15);
      document.getElementById('temp-item').innerHTML = `<p class="font-weight-bold text-center" id="tempValue">${celcius}&deg</p>`;
    })
    .catch(
      (err) => console.log(JSON.stringify(err)),
    );


  toggle.addEventListener('click', (event) => {
    event.preventDefault();

    if (tempCelsius) {
      tempCelsius = false;
      unit = 'imperial';
      const URL = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APIKEY}&units=${unit}`;
      fetch(URL, { mode: 'cors' })
        .then((resp) => resp.json())
        .then((result) => {
        // console.log(data);
          const fahr = Math.round(parseFloat(result.main.temp) - 273.15);
          document.getElementById('temp-item').innerHTML = `<p class="font-weight-bold text-center" id="tempValue">${fahr}&deg</p>`;
        })
        .catch(
          (err) => console.log(JSON.stringify(err)),
        );
    } else {
      tempCelsius = true;
      unit = 'metric';
      const URL = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APIKEY}&units=${unit}`;
      fetch(URL, { mode: 'cors' })
        .then((resp) => resp.json())
        .then((res) => {
        // console.log(data);
          const celcius = Math.round(parseFloat(res.main.temp) - 273.15);
          document.getElementById('temp-item').innerHTML = `<p class="font-weight-bold text-center" id="tempValue">${celcius}&deg</p>`;
        })
        .catch(
          (err) => console.log(JSON.stringify(err)),
        );
    }
  });
  // return { toggle };
};

export default renderWeather;
