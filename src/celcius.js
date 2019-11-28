const toggleCel = (cityName) => {
  const APIKEY = '3f1649f8b9563002df71974391b99f2e';
  const unit = 'metric';
  const headers = new Headers();
  const newUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APIKEY}&units=${unit}`;

  return fetch(newUrl, {
    method: 'GET',
    mode: 'cors',
    headers,
  }).then((resp) => resp.json())
    .then((data) => {
      const cel = Math.round(parseFloat(data.main.temp));
      document.getElementById('temp-item').innerHTML = `<p class="font-weight-bold text-center" id="tempValue">${cel}&deg</p>`;
    }).catch(
      (err) => console.log(JSON.stringify(err)),
    );
};
export default toggleCel;
