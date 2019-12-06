
export default function getImage(data) {
  const obj = document.getElementById('content-box');
  if (data.weather[0].main === 'Rain') {
    obj.style.background = 'url(https://media.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif)';
    obj.style.backgroundSize = 'cover';
  } else if (data.weather[0].main === 'Clouds' || data.weather[0].main === 'cloud') {
    obj.style.background = 'url(https://media.giphy.com/media/PIh4laWJlz9bq/giphy.gif)';
    obj.style.backgroundSize = 'cover';
  } else if (data.weather[0].main === 'Sunny' || data.weather[0].main === 'dry') {
    obj.style.background = 'url(https://media.giphy.com/media/KV1s4kSJHaY3m/giphy.gif)';
    obj.style.backgroundSize = 'cover';
  } else if (data.weather[0].main === 'Snow') {
    obj.style.background = 'url( https://media.giphy.com/media/xTiTnGmU99wLFvZBfy/giphy.gif)';
    obj.style.backgroundSize = 'cover';
  } else if (data.weather[0].main === 'Windy') {
    obj.style.background = 'url(https://media.giphy.com/media/5RHAxkNRlLPjy/giphy.gif)';
    obj.style.backgroundSize = 'cover';
  } else if (data.weather[0].main === 'Thunderstorm') {
    obj.style.background = 'https://media.giphy.com/media/13ZEwDgIZtK1y/giphy.gif';
    obj.style.backgroundSize = 'cover';
  } else if (data.weather[0].main === 'Hot') {
    obj.style.background = 'url(https://media.giphy.com/media/xT0wlvGLHmojbeu5vq/giphy.gif)';
    obj.style.backgroundSize = 'cover';
  } else if (data.weather[0].main === 'Drizzle') {
    obj.style.background = 'url(https://media.giphy.com/media/QPsEnRasf0Vfa/giphy.gif)';
    obj.style.backgroundSize = 'cover';
  } else if (data.weather[0].main === 'Fog' || data.weather[0].main === 'Haze') {
    obj.style.background = 'url(https://media.giphy.com/media/iplVhhvRy4r3W/giphy.gif)';
    obj.style.backgroundSize = 'cover';
  } else if (data.weather[0].main === 'Mist') {
    obj.style.background = 'url(https://media.giphy.com/media/Ncc0kjzp7U1Ww/giphy.gif)';
    obj.style.backgroundSize = 'cover';
  } else {
    obj.style.background = 'url(https://media.giphy.com/media/u01ioCe6G8URG/giphy.gif)';
    obj.style.backgroundSize = 'cover';
  }
}
