
import getVisualizer from './imgDepict';
import toggleTemp from './toggleTemp';
import getWeatherDom from './metrics';
import forms from './searchForm';
// import apihead from './weather';

const cityData = () => {
//  const APIKEY = '3f1649f8b9563002df71974391b99f2e';
  // const cityName = 'london';
  const cityName = document.getElementById('inputText').value;

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
      getWeatherDom(data);
      toggleTemp(data);
      forms();
    })
    .catch((error) => {
      console.log(Error(error));
    });
};


export default cityData;
