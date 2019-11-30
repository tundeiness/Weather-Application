
import getImage from './imgDepict';
// import domrender from './domInsertion';


const defaultData = (() => {
  const APIKEY = '3f1649f8b9563002df71974391b99f2e';
  const cityName = 'london';
  // const domView = domrender();

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APIKEY}`;
  const headers = new Headers();


  fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers,
  }).then((resp) => resp.json())
    .then((data) => {
      getImage(data);
    })
    .catch(
      (err) => console.log(JSON.stringify(err)),
    );
  //   cleared();
})();

export default defaultData;
