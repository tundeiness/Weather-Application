
import getVisualizer from './imgDepict';
import toggleTemp from './toggleTemp';
// import getWeatherDom from './metrics';

// import domrender from './domInsertion';
// import getMetrics from './renderMetrics';

// const metrics = getMetrics();
const defaultData = () => {
  const APIKEY = '3f1649f8b9563002df71974391b99f2e';
  const cityName = 'london';
  // const metrics = metric();
  // const domView = domrender();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APIKEY}`;
  // https://api.openweathermap.org/data/2.5/weather?q=london&APPID=3f1649f8b9563002df71974391b99f2e
  const headers = new Headers();


  fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers,
  }).then((resp) => resp.json())
    .then((data) => {
      getVisualizer(data);
      // const flexCont = document.createElement('div');
      // flexCont.setAttribute('class', 'flex-cont d-flex flex-column justify-content-center border');
      // flexCont.setAttribute('id', 'content-box');
      // const contentBox = document.getElementById('content-box');

      // const heading = '<div class="heading text-center"><h2>Daily Weather</h2></div>';
      // contentBox.innerHTML = heading;
      // const iconDescription = document.createElement('div');
      // iconDescription.setAttribute('class', 'icon-description d-flex flex-row justify-content-center');
      const iconDescription = document.getElementById('icon-description');
      // icon-description d-flex flex-row justify-content-center

      // const descItem = document.getElementsByClassName('desc-item');
      // descItem.setAttribute('class', 'p-4 mt-4');
      // descItem.setAttribute('id', 'desc-item');
      iconDescription.innerHTML = `<div class="p-4 mt-4" id="desc-item"><span class="font-weight-bold text-center" id="desc">${data.weather[0].main}</span>
        <p class="font-weight-bold" id="fullDesc">${data.weather[0].description}</p></div>`;


      // iconDescription.append(descItem);

      // iconDescription.appendChild(descItem);


      // const temperature = document.createElement('div');
      // temperature.setAttribute('class', 'temperature d-flex flex-column
      // justify-content-center');
      const temperature = document.getElementById('temperature');
      const cel = Math.round(parseFloat(data.main.temp - 273.15));
      temperature.innerHTML = `<div class="valTemp" id="temp-item">
      <p class="font-weight-bold text-center tempC" id="tempValueC">${cel}&degC</p>
      </div><div class=" togContainer" id="toggle-item"><label class="switch ml-4"><input type="checkbox" id="togBtn"><div class="slider round"><span class="F"><strong>F</strong></span><span class="C"><strong>C</strong></span></div></label></div>`;
      // const tempItem = document.getElementById('temp-item');
      // tempItem.setAttribute('class', 'valTemp');
      // tempItem.setAttribute('id', 'temp-item');
      // const cel = Math.round(parseFloat(data.main.temp - 273.15));
      // tempItem.innerHTML = `<p class="font-weight-bold text-center tempC" id="tempValueC">${cel}&degC</p>`;

      // const togCont = document.createElement('div');
      // togCont.setAttribute('class', 'togContainer');
      // togCont.setAttribute('id', 'toggle-item');
      // const label = document.createElement('label');
      // label.setAttribute('class', 'switch ml-4');
      // const input = document.createElement('input');
      // input.setAttribute('type', 'checkbox');
      // input.setAttribute('id', 'togBtn');
      // const slider = document.createElement('div');
      // slider.setAttribute('class', 'slider round');
      // slider.setAttribute('id', 'sliderId');
      // const spanF = document.createElement('span');
      // spanF.setAttribute('class', 'F');
      // const strongF = document.createElement('strong');
      // strongF.innerText = 'F';
      // spanF.appendChild(strongF);
      // const spanC = document.createElement('span');
      // spanC.setAttribute('class', 'C');
      // const strongC = document.createElement('strong');
      // strongC.innerText = 'C';
      // spanC.appendChild(strongC);
      // slider.appendChild(spanF, spanC);
      // slider.appendChild(spanC);
      // label.appendChild(input, slider);
      // // label.appendChild(slider);
      // togCont.appendChild(label);
      // temperature.append(tempItem, togCont);
      // temperature.appendChild(togCont);
      // temperature.appendChild(toggleTemp(data));


      const windHumid = document.getElementById('wind-humid');
      // const windHumid = document.createElement('div');
      // windHumid.setAttribute('class', 'wind-humid d-flex flex-row
      // justify-content-center');
      windHumid.innerHTML = `<div class="border windCont" id="wind-item">
      <p class="font-weight-bold text-center" id="windText">wind</p><p class="covering">
      <span class="font-weight-bold" id="windValue">${data.wind.speed} </span><span id='unit'>mph</span></p></div>
      <div class="border humidCont" id="humid-item">
      <p class="font-weight-bold text-center" id="humidText">humidity</p>
      <p class="font-weight-bold text-center" id="humidValue">${data.main.humidity} %</p>
      </div>
      `;
      // const wind = document.getElementById('wind-item');
      // wind.setAttribute('class', 'border windCont');
      // wind.setAttribute('id', 'wind-item');

      // const humid = document.getElementById('humid-item');
      // humid.setAttribute('class', 'border humidCont');
      // humid.setAttribute('id', 'humid-item');

      //   wind.innerHTML = `<p class="font-weight-bold text-center" id="windText">wind</p><p class="covering">
      // <span class="font-weight-bold" id="windValue">${data.wind.speed} </span><span id='unit'>mph</span></p>`;

      //   humid.innerHTML = `<p class="font-weight-bold text-center" id="humidText">humidity</p>
      // <p class="font-weight-bold text-center" id="humidValue">${data.main.humidity} %</p>`;


      // windHumid.append(wind, humid);
      // windHumid.appendChild(humid);


      // const location = document.createElement('div');
      // location.setAttribute('class', 'location d-flex flex-row justify-content-center');

      const location = document.getElementById('location');
      // const locCont = document.getElementById('loc-item');
      // locCont.setAttribute('class', 'locCont');
      // locCont.setAttribute('id', 'loc-item');

      location.innerHTML = `<div class="locCont" id="loc-item">
      <span class="font-weight-bold text-center" id="loc-name">${data.name}</span>
      </div>`;
      // locCont.innerHTML = `<span class="font-weight-bold text-center" id="loc-name">${data.name}</span>`;
      toggleTemp(data);


      const controls = document.getElementById('controls');

      controls.innerHTML = `<form><div class="border d-flex flex-column justify-content-center" id="input-item"><div class="searchCont"><input type='text' placeholder="City name e.g Lusaka" id="inputText"/></div><div class="submit"><input type="submit" value="Submit" id="submit"></div>
      </div></form>`;


      // location.appenChild(locCont);


      // flexCont.append(heading, iconDescription, temperature, windHumid, location);
      // flexCont.appendChild(iconDescription);
      // flexCont.appendChild(temperature);
      // flexCont.appendChild(windHumid);
      // flexCont.appendChild(location);

      // const displayContainer = document.getElementById('main-display');

      // displayContainer.append(flexCont);

      // return flexCont;
      // metrics(data);
      // const newData = data;
      // console.log(newData);
      // return data;
      // console.log(data.weather);
      // getWeatherDom(data);
      //       const flexCont = document.createElement('div');
      //       flexCont.setAttribute('class', 'flex-cont d-flex flex-column justify-content-center border');
      //       flexCont.setAttribute('id', 'content-box');

      //       const heading = '<div class="heading text-center"><h2>Daily Weather</h2></div>';
      //       const iconDescription = document.createElement('div');
      //       iconDescription.setAttribute('class', 'icon-description d-flex flex-row justify-content-center');
      //       // iconDescription.innerHTML = '<div class="heading text-center"><h2>Daily Weather</h2></div>';

      //       const descItem = document.createElement('div');
      //       descItem.setAttribute('class', 'p-4 mt-4');
      //       descItem.setAttribute('id', 'desc-item');
      //       descItem.innerHTML = `<span class="font-weight-bold text-center" id="desc">${data.weather[0].main}</span>
      //     <p class="font-weight-bold" id="fullDesc">${data.weather[0].description}</p>`;

      //       iconDescription.appendChild(descItem);


      //       const temperature = document.createElement('div');
      //       temperature.setAttribute('class', 'temperature d-flex flex-column justify-content-center');
      //       const tempItem = document.createElement('div');
      //       tempItem.setAttribute('class', 'valTemp');
      //       tempItem.setAttribute('id', 'temp-item');
      //       const cel = Math.round(parseFloat(data.main.temp - 273.15));
      //       tempItem.innerHTML = `<p class="font-weight-bold text-center tempC" id="tempValueC">${cel}&degC</p>`;

      //       const togCont = document.createElement('div');
      //       togCont.setAttribute('class', 'togContainer');
      //       togCont.setAttribute('id', 'toggle-item');
      //       const label = document.createElement('label');
      //       label.setAttribute('class', 'switch ml-4');
      //       const input = document.createElement('input');
      //       input.setAttribute('type', 'checkbox');
      //       input.setAttribute('id', 'togBtn');
      //       const slider = document.createElement('div');
      //       slider.setAttribute('class', 'slider round');
      //       slider.setAttribute('id', 'sliderId');
      //       const spanF = document.createElement('span');
      //       spanF.setAttribute('class', 'F');
      //       const strongF = document.createElement('strong');
      //       strongF.innerText = 'F';
      //       spanF.appendChild(strongF);
      //       const spanC = document.createElement('span');
      //       spanC.setAttribute('class', 'C');
      //       const strongC = document.createElement('strong');
      //       strongC.innerText = 'C';
      //       spanC.appendChild(strongC);
      //       slider.appendChild(spanF);
      //       slider.appendChild(spanC);
      //       label.appendChild(input);
      //       label.appendChild(slider);
      //       togCont.appendChild(label);
      //       temperature.appendChild(tempItem);
      //       temperature.appendChild(togCont);
      //       // temperature.appendChild(toggleTemp(data));


      //       const windHumid = document.createElement('div');
      //       windHumid.setAttribute('class', 'wind-humid d-flex flex-row justify-content-center');
      //       const wind = document.createElement('div');
      //       wind.setAttribute('class', 'border windCont');
      //       wind.setAttribute('id', 'wind-item');

      //       const humid = document.createElement('div');
      //       humid.setAttribute('class', 'border humidCont');
      //       humid.setAttribute('id', 'humid-item');

      //       wind.innerHTML = `<p class="font-weight-bold text-center" id="windText">wind</p><p class="covering">
      // <span class="font-weight-bold" id="windValue">${data.wind.speed} </span><span id='unit'>mph</span></p>`;

      //       humid.innerHTML = `<p class="font-weight-bold text-center" id="humidText">humidity</p>
      // <p class="font-weight-bold text-center" id="humidValue">${data.main.humidity}</p>`;


      //       windHumid.appendChild(wind);
      //       windHumid.appendChild(humid);


      //       const location = document.createElement('div');
      //       location.setAttribute('class', 'location d-flex flex-row justify-content-center');

      //       const locCont = document.createElement('div');
      //       locCont.setAttribute('class', 'locCont');
      //       locCont.setAttribute('id', 'loc-item');

      //       locCont.innerHTML = `<span class="font-weight-bold text-center" id="loc-name">${data.name}</span>`;

      //       location.appenChild(locCont);


      //       flexCont.append(heading, iconDescription, temperature, windHumid, location);
      // flexCont.appendChild(iconDescription);
      // flexCont.appendChild(temperature);
      // flexCont.appendChild(windHumid);
      // flexCont.appendChild(location);

      // const displayContainer = document.getElementById('main-display');

      // displayContainer.appendChild(flexCont);
      // displayContainer.innerHTML = flexCont;
      // metrics(data);
    })
    // .then(async (data) => {
    //   await Promise.all(data.map((e, index, array) => fetch(url)
    //     .then((response) => response.json())
    //     .then((dat) => {
    //       // array[index] = { ...e, ...data };
    //       console.log(dat);
    //     })));

    //   console.log('new', data);
    // })
    .catch(
      (err) => console.log(JSON.stringify(err)),
    );
};


export default defaultData;
