import getForecast from './weather';

export default function () {
  const searchInput = document.getElementById('inputText');
  const submitButton = document.getElementById('submit');
  const searchForm = document.getElementsByTagName('form');

  submitButton.addEventListener('click', () => {
    const cityName = searchInput.value;
    getForecast(cityName)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        // inputWrapper.classList.add('invalid');
        throw new Error('Not found');
      })
      .then((data) => {
        // inputWrapper.classList.remove('invalid');
        // const resultDiv = document.getElementById('search-result');
        // resultDiv.innerHTML = '';
        // resultDiv.appendChild(SearchResult(data));
        // resultDiv.classList.add('active');
        document.getElementById('desc-item').innerHTML = `<span class="font-weight-bold text-center" id="desc">${data.weather[0].main}</span>
        <p class="font-weight-bold" id="fullDesc">${data.weather[0].description}</p>`;
        const celcius = Math.round(parseFloat(data.main.temp));
        document.getElementById('temp-item').innerHTML = `<p class="font-weight-bold text-center" id="tempValue">${celcius}&deg</p>`;

        document.getElementById('wind-item').innerHTML = `<p class="font-weight-bold text-center" id="windText">wind</p><p class="covering">
        <span class="font-weight-bold" id="windValue">${data.wind.speed} </span><span id='unit'>mph</span></p>`;

        document.getElementById('humid-item').innerHTML = `<p class="font-weight-bold text-center" id="humidText">humidity</p>
        <p class="font-weight-bold text-center" id="humidValue">${data.main.humidity}</p>`;

        document.getElementById('loc-item').innerHTML = `<span class="font-weight-bold text-center" id="loc-name">${data.name}</span>`;


        if (data.weather[0].main === 'Rain') {
          const obj = document.getElementById('content-box');
          obj.style.background = 'url(https://media.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif)';
          obj.style.backgroundSize = 'cover';
        } else if (data.weather[0].main === 'Clouds' || data.weather[0].main === 'cloud') {
          const obj = document.getElementById('content-box');
          obj.style.background = 'url(https://media.giphy.com/media/PIh4laWJlz9bq/giphy.gif)';
          obj.style.backgroundSize = 'cover';
        } else if (data.weather[0].main === 'Sunny' || data.weather[0].main === 'dry') {
          const obj = document.getElementById('content-box');
          obj.style.background = 'url(https://media.giphy.com/media/KV1s4kSJHaY3m/giphy.gif)';
          obj.style.backgroundSize = 'cover';
        } else if (data.weather[0].main === 'Snow') {
          const obj = document.getElementById('content-box');
          obj.style.background = 'url( https://media.giphy.com/media/xTiTnGmU99wLFvZBfy/giphy.gif)';
          obj.style.backgroundSize = 'cover';
        } else if (data.weather[0].main === 'Windy') {
          const obj = document.getElementById('content-box');
          obj.style.background = 'url(https://media.giphy.com/media/5RHAxkNRlLPjy/giphy.gif)';
          obj.style.backgroundSize = 'cover';
        } else if (data.weather[0].main === 'Storm') {
          const obj = document.getElementById('content-box');
          obj.style.background = 'https://media.giphy.com/media/13ZEwDgIZtK1y/giphy.gif';
          obj.style.backgroundSize = 'cover';
        } else if (data.weather[0].main === 'Hot') {
          const obj = document.getElementById('content-box');
          obj.style.background = 'url(https://media.giphy.com/media/xT0wlvGLHmojbeu5vq/giphy.gif)';
          obj.style.backgroundSize = 'cover';
        } else {
          const obj = document.getElementById('content-box');
          obj.style.background = 'url(https://media.giphy.com/media/u01ioCe6G8URG/giphy.gif)';
          obj.style.backgroundSize = 'cover';
        }
      });
    searchForm.reset();
  });
  return searchForm;
}
