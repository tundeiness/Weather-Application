
import getImage from './imgDepict';
// import domrender from './domInsertion';


const defaultData = (() => {
  const APIKEY = '3f1649f8b9563002df71974391b99f2e';
  const cityName = 'london';
  // const domView = domrender();

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APIKEY}`;
  const headers = new Headers();


  fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers,
  }).then((resp) => resp.json())
    .then((data) => {
      const flexCont = document.createElement('div');
      flexCont.setAttribute('class', 'flex-cont d-flex flex-column justify-content-center border');
      flexCont.setAttribute('id', 'content-box');

      const heading = '<div class="heading text-center"><h2>Daily Weather</h2></div>';
      const iconDescription = document.createElement('div');
      iconDescription.setAttribute('class', 'icon-description d-flex flex-row justify-content-center');


      const descItem = document.createElement('div');
      descItem.setAttribute('class', 'p-4 mt-4');
      descItem.setAttribute('id', 'desc-item');
      descItem.innerHTML = `<span class="font-weight-bold text-center" id="desc">${data.weather[0].main}</span>
        <p class="font-weight-bold" id="fullDesc">${data.weather[0].description}</p>`;

      iconDescription.appendChild(descItem);


      const temperature = document.createElement('div');
      temperature.setAttribute('class', 'temperature d-flex flex-column justify-content-center');
      const tempItem = document.createElement('div');
      tempItem.setAttribute('class', 'valTemp');
      tempItem.setAttribute('id', 'temp-item');
      const cel = Math.round(parseFloat(data.main.temp - 273.15));
      tempItem.innerHTML = `<p class="font-weight-bold text-center tempC" id="tempValueC">${cel}&degC</p>`;

      const togCont = document.createElement('div');
      togCont.setAttribute('class', 'togContainer');
      togCont.setAttribute('id', 'toggle-item');
      const label = document.createElement('label');
      label.setAttribute('class', 'switch ml-4');
      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', 'togBtn');
      const slider = document.createElement('div');
      slider.setAttribute('class', 'slider round');
      slider.setAttribute('id', 'sliderId');
      const spanF = document.createElement('span');
      spanF.setAttribute('class', 'F');
      const strongF = document.createElement('strong');
      strongF.innerText = 'F';
      spanF.appendChild(strongF);
      const spanC = document.createElement('span');
      spanC.setAttribute('class', 'C');
      const strongC = document.createElement('strong');
      strongC.innerText = 'C';
      spanC.appendChild(strongC);
      slider.appendChild(spanF);
      slider.appendChild(spanC);
      label.appendChild(input);
      label.appendChild(slider);
      togCont.appendChild(label);
      temperature.appendChild(tempItem);
      temperature.appendChild(togCont);
      temperature.appendChild(toggleTemp(data));


      const windHumid = document.createElement('div');
      windHumid.setAttribute('class', 'wind-humid d-flex flex-row justify-content-center');
      const wind = document.createElement('div');
      wind.setAttribute('class', 'border windCont');
      wind.setAttribute('id', 'wind-item');

      const humid = document.createElement('div');
      humid.setAttribute('class', 'border humidCont');
      humid.setAttribute('id', 'humid-item');

      wind.innerHTML = `<p class="font-weight-bold text-center" id="windText">wind</p><p class="covering">
    <span class="font-weight-bold" id="windValue">${data.wind.speed} </span><span id='unit'>mph</span></p>`;

      humid.innerHTML = `<p class="font-weight-bold text-center" id="humidText">humidity</p>
    <p class="font-weight-bold text-center" id="humidValue">${data.main.humidity}</p>`;


      windHumid.appendChild(wind);
      windHumid.appendChild(humid);


      const location = document.createElement('div');
      location.setAttribute('class', 'location d-flex flex-row justify-content-center');

      const locCont = document.createElement('div');
      locCont.setAttribute('class', 'locCont');
      locCont.setAttribute('id', 'loc-item');

      locCont.innerHTML = `<span class="font-weight-bold text-center" id="loc-name">${data.name}</span>`;

      location.appenChild(locCont);


      flexCont.appendChild(heading);
      flexCont.appendChild(iconDescription);
      flexCont.appendChild(temperature);
      flexCont.appendChild(windHumid);
      flexCont.appendChild(location);


      getImage(data);
    })
    .catch(
      (err) => console.log(JSON.stringify(err)),
    );
  //   cleared();
})();

export default defaultData;
