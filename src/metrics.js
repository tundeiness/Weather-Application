export default function getWeatherDom(data) {
  const iconDescription = document.getElementById('icon-description');
  iconDescription.innerHTML = `<div class="p-4 mt-4" id="desc-item"><span class="font-weight-bold text-center" id="desc">${data.weather[0].main}</span>
    <p class="font-weight-bold text-center" id="fullDesc">${data.weather[0].description}</p></div>`;

  const temperature = document.getElementById('temperature');
  const cel = Math.round(parseFloat(data.main.temp - 273.15));
  temperature.innerHTML = `<div class="valTemp" id="temp-item">
      <p class="font-weight-bold text-center tempC" id="tempValueC">${cel}&degC</p>
      </div><div class=" togContainer" id="toggle-item"><label class="switch ml-4"><input type="checkbox" id="togBtn"><div class="slider round"><span class="F"><strong>F</strong></span><span class="C"><strong>C</strong></span></div></label></div>`;

  const windHumid = document.getElementById('wind-humid');
  windHumid.innerHTML = `<div class="border windCont" id="wind-item">
      <p class="font-weight-bold text-center" id="windText">wind</p><p class="covering">
      <span class="font-weight-bold" id="windValue">${data.wind.speed} </span><span id='unit'>mph</span></p></div>
      <div class="border humidCont" id="humid-item">
      <p class="font-weight-bold text-center" id="humidText">humidity</p>
      <p class="font-weight-bold text-center" id="humidValue">${data.main.humidity} %</p>
      </div>
      `;

  const location = document.getElementById('location');
  location.innerHTML = `<div class="locCont" id="loc-item">
      <span class="font-weight-bold text-center" id="loc-name">${data.name}</span>
      </div>`;
}
