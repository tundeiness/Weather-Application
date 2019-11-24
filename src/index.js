import 'whatwg-fetch';
import 'bootstrap';
import app from './app';

const apps = app();
const test = document.querySelector('icon');
test.appendChild(apps);
// console.log(apps);
// import './style.css';
// const getUrl = (url) => new Promise(((resolve, reject) => {
//   const xhttp = new XMLHttpRequest();
//   xhttp.open('GET', url, true);
//   xhttp.onload = () => {
//     if (xhttp.status === 200) {
//       resolve(JSON.parse(xhttp.response));
//     } else {
//       reject(xhttp.statusText);
//     }
//   };

//   xhttp.onerror = () => {
//     reject(xhttp.statusText);
//   };
//   xhttp.send();
// }));

// const promise = getUrl('https://www.status.com');
// promise.then((tweets) => {
//   console.log(tweets);
//   return getUrl('another url');
// }).then((another) => {
//   console.log(another);
// });

// getUrl.then((data) => {
//   const piece = data['name'];
// });


// const myPromise = new Promise((resolve, reject) => {
//   resolve('Some Api-Data');
// });

// const myPromisetwo = new Promise((resolve, reject) => {
//   resolve('Another Api-Data');
// });


// Promise.all([myPromise, myPromisetwo]).then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });

// myPromise.then((res) => {
//   console.log(res);
// }, (err) => {
//   console.log(err);
// });

// myPromise.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });


// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }
//   const err = new Error(response.statusText);
//   err.response = response;
//   throw err;
// }

// function parseJSON(response) {
//   return response.json();
// }
// // api.openweathermap.org/data/2.5/weather?q=London,uk
// // https://api.chucknorris.io/jokes/random
// //  http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1111111111
// fetch('https://api.giphy.com/v1/gifs/translate?api_key=7XYIk0RTrdKKperYfIArygdrBqs8tqeS&s=cats')
//   .then(checkStatus)
//   .then(parseJSON)
//   .then((data) => {
//     // console.log('request succeeded with JSON response', data);
//     // console.log(data.value);
//     // console.log(data);
//     console.log(data.images.original.url);
//   })
//   .catch((error) => {
//     console.log('request failed', error);
//   });


// fetch('http://api.icndb.com/jokes/random/10', {
//   method: 'GET',
//   mode: 'cors',
//   redirect: 'follow',
//   headers: new Headers({
//     'Content-Type': 'application/json',
//     Accept: 'application/json, text/plain',
//   }),

// }).then((res) => {
//   if (res.status !== 200) {
//     // console.log("There seems to be a problem");
//     return;
//   }
//   console.log(res);
//   // return res.json();
// }).then((result) => {
//   console.log(result);
// }).catch((err) => {
//   console.log(err);
// });
