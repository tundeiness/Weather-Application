/* eslint-disable import/prefer-default-export */
export default function getImage(data) {
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
  } else if (data.weather[0].main === 'Drizzle') {
    const obj = document.getElementById('content-box');
    obj.style.background = 'url(https://media.giphy.com/media/QPsEnRasf0Vfa/giphy.gif)';
    obj.style.backgroundSize = 'cover';
  } else {
    const obj = document.getElementById('content-box');
    obj.style.background = 'url(https://media.giphy.com/media/u01ioCe6G8URG/giphy.gif)';
    obj.style.backgroundSize = 'cover';
  }
}
