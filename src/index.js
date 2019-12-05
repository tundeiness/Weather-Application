import 'whatwg-fetch';
import 'bootstrap';
import defaultDisplay from './default';


const subButton = document.getElementById('submit');
subButton.addEventListener('click', () => {
  // evnt.preventDefault();

  const cityName = document.getElementById('inputText').value.trim();
  // console.log(cityName);

  // defaultView(cityName);
  defaultDisplay(cityName);
  document.getElementById('inputText').value = ' ';
  // document.getElementById('inline-notify').remove();
});

defaultDisplay();
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
