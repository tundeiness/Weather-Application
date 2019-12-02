const BASEPATH = 'https://api.openweathermap.org/data/2.5';
const APIKEY = '3f1649f8b9563002df71974391b99f2e';
const headers = new Headers();

export default function apiFetch(cityName) {
  // const cityName = document.getElementById('inputText').value;
  return fetch(`${BASEPATH}/weather/?q=${cityName}&APPID=${APIKEY}`, {
    method: 'GET',
    mode: 'cors',
    headers,
  });
}
