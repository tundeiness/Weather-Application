
// import toggleTemp from './toggleTemp';

const domInsert = () => ({
  updateView(data) {
    // const heading = document.createElement('div');
    // heading.setAttribute('class', 'heading text-center');
    // const head2 = document.createElement('h2');
    // heading.appendChild(head2);
    // return heading;
    document.getElementById('desc-item').innerHTML = `<span class="font-weight-bold text-center" id="desc">${data.weather[0].main}</span>
       <p class="font-weight-bold" id="fullDesc">${data.weather[0].description}</p>`;

    const cel = Math.round(parseFloat(data.main.temp - 273.15));
    const cell = document.getElementById('temp-item');
    cell.innerHTML = `<p class="font-weight-bold text-center tempC" id="tempValueC">${cel}&degC</p>`;


    document.getElementById('togBtn').addEventListener('click', () => {
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
  },

});

export default domInsert;
