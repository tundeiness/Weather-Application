/* eslint-disable max-len */

export default function getTemp(data) {
  document.getElementById('togBtn').addEventListener('click', () => {
    const checkBox = document.querySelector('input[type=checkbox]');
    if (checkBox.checked === true) {
      const fahr = Math.round(parseFloat(data.main.temp - 273.15) * 1.8 + 32);
      const fahren = document.getElementById('temp-item');
      fahren.innerHTML = `<p class="font-weight-bold text-center tempF" id="tempValueC">${fahr}&degF</p>`;
    } else {
      const cell = document.getElementById('temp-item');
      const cel = Math.round(parseFloat(data.main.temp - 273.15));
      cell.innerHTML = `<p class="font-weight-bold text-center tempC" id="tempValueC">${cel}&degC</p>`;
    }
  });
}
