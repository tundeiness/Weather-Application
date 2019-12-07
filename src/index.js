import 'whatwg-fetch';
import 'bootstrap';
import defaultDisplay from './default';


const subButton = document.getElementById('submit');
subButton.addEventListener('click', () => {
  const cityName = document.getElementById('inputText').value.trim();
  defaultDisplay(cityName);
  document.getElementById('inputText').value = ' ';
});

defaultDisplay();
