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


      <form>
                <div class=" d-flex flex-column justify-content-center" id="input-item">
                  <div class="searchCont">
                    <input type='text' name = "input" placeholder="City name e.g Lusaka" id="inputText"/>
                  </div>
                  <div class="submit">
                    <input type="submit" value="Submit" id="submit">
                  </div>
                </div>
              </form>
    }).catch(
      (err) => console.log(JSON.stringify(err)),
    );
};
export default toggleCel;
