updateIconDescription(data) {
  const iconDescription = document.createElement('div');
  iconDescription.setAttribute('class', 'icon-description d-flex flex-row justify-content-center');
  const descItem = document.createElement('div');
  descItem.setAttribute('class', 'p-4 mt-4');
  descItem.setAttribute('id', 'desc-item');
  descItem.innerHTML = `<span class="font-weight-bold text-center" id="desc">${data.weather[0].main}</span>
    <p class="font-weight-bold" id="fullDesc">${data.weather[0].description}</p>`;

  iconDescription.appendChild(descItem);
// return iconDescription;
},
updateTemp(data) {
  const temperature = document.createElement('div');
  temperature.setAttribute('class', 'temperature d-flex flex-column justify-content-center');
  const tempItem = document.createElement('div');
  tempItem.setAttribute('class', 'valTemp');
  tempItem.setAttribute('id', 'temp-item');
  const cel = Math.round(parseFloat(data.main.temp - 273.15));
  tempItem.innerHTML = `<p class="font-weight-bold text-center tempC" id="tempValueC">${cel}&degC</p>`;
  // temperature.appendChild(tempItem);
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
  temperature.appendChild(tempItem, togCont, toggleTemp(data));
// toggleWeather(data);
// return temperature;
},
updateWindHumid(data) {
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


  windHumid.appendChild(wind, humid);
// return windHumid;
},
updateLocation(data) {
  const location = document.createElement('div');
  location.setAttribute('class', 'location d-flex flex-row justify-content-center');

  const locCont = document.createElement('div');
  locCont.setAttribute('class', 'locCont');
  locCont.setAttribute('id', 'loc-item');

  locCont.innerHTML = `<span class="font-weight-bold text-center" id="loc-name">${data.name}</span>`;

  location.appenChild(locCont);

// return location;
},
search() {
  const searchContainer = document.createElement('div');
  searchContainer.setAttribute('class', 'search');

  const formCont = document.createElement('form');


  const inputSubmit = document.createElement('div');
  inputSubmit.setAttribute('class', 'border d-flex flex-column justify-content-center');
  inputSubmit.setAttribute('id', 'input-item');


  const searchCont = document.createElement('div');
  searchCont.setAttribute('class', 'searchCont');


  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'input');
  input.setAttribute('placeholder', 'City name e.g Lusaka');
  input.setAttribute('id', 'inputText');

  searchCont.appendChild(input);

  const submit = document.createElement('div');
  submit.setAttribute('class', 'submit');

  const input2 = document.createElement('input');
  input2.setAttribute('type', 'submit');
  input2.setAttribute('value', 'Submit');
  input2.setAttribute('id', 'submit');


  submit.appendChild(input2);

  inputSubmit.appendChild(searchCont, submit);
  formCont.appendChild(inputSubmit);
  searchContainer.appendChild(formCont);

// return searchContainer;
},
