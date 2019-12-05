
import getVisualizer from './imgDepict';
import toggleTemp from './toggleTemp';
import getWeatherDom from './metrics';
import defError from './errorHandler';
// import forms from './searchForm';


// const createUser = ({userName = 'Anonymous'} = {}) => ({
//   userName,
//   avatar
// });


export default function defaultData(cityName = 'london') {
  const APIKEY = '3f1649f8b9563002df71974391b99f2e';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APIKEY}`;
  // https://api.openweathermap.org/data/2.5/weather?q=london&APPID=3f1649f8b9563002df71974391b99f2e
  const headers = new Headers();
  console.log(cityName);
  fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers,
  }).then((resp) => resp.json())
    .then((data) => {
      getVisualizer(data);
      getWeatherDom(data);
      toggleTemp(data);
      // forms();
    })
    .catch(() => {
      // console.log(Error(error));
      defError();
      // const err = document.getElementById('inline-notify');
      // err.innerHTML = `<p class="alert alert-warning" role="alert" >
      // City not found!! </p>`;
    });
}
