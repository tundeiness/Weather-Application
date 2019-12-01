const StartApp = () => {
  document.getElementById('weather-check').addEventListener('click', (evt) => {
    const cityname = document.querySelector('#weather-check-input').value;
    AddTitle(cityname);
    renderData(cityname);
  });
};
