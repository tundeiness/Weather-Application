/* eslint-disable max-len */

export default (function getTemp(data) {
  const cel = Math.round(parseFloat(data.main.temp - 273.15));
  const fahr = Math.round(parseFloat(data.main.temp - 273.15) * 1.8 + 32);
  // const cell = document.getElementById('temp-item');
  // cell.innerHTML = `<p class="font-weight-bold text-center tempC" id="tempValueC">${cel}&degC</p>`;
  const toggle = document.getElementById('togBtn').addEventListener('click', () => {
    const checkBox = document.querySelector('input[type=checkbox]');
    if (checkBox.checked === true) {
      // const fahren = document.getElementById('temp-item');
      return `<p class="font-weight-bold text-center tempF" id="tempValueC">${fahr}&degF</p>`;
    }
    return `<p class="font-weight-bold text-center tempC" id="tempValueC">${cel}&degC</p>`;
  });
  return toggle;
}());
