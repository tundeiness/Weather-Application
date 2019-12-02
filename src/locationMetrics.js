import city from './renderCity';

const locationMetric = () => {
  const renderCity = city();

  const subButton = document.getElementById('submit');
  subButton.addEventListener('click', () => {
    // const cityName = document.getElementById('inputText').value;
    // evnt.preventDefault();

    renderCity();
  });
};

export default locationMetric;
