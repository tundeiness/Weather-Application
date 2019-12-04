import 'whatwg-fetch';
import 'bootstrap';
import defaultDisplay from './default';


// //
// const defaultView = defaultDisplay();
const subButton = document.getElementById('submit');
const defaultView = defaultDisplay();
subButton.addEventListener('click', (evnt) => {
  // evnt.preventDefault();

  const cityName = document.getElementById('inputText').value.trim();
  // console.log(cityName);

  defaultView(cityName);
});
// const defaultView = defaultDisplay();
// defaultView();
// defaultDisplay();

// console.log(cityName);
// const view = render();
// view();
// const cityName = document.getElementById('inputText').value;
// console.log(cityName);


// const defaultView = defaultDisplay();
// defaultView();
