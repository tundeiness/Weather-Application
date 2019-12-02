const locationMetric = () => {
  const AddTitle = (cityName) => {
    const locCont = document.getElementById('loc-item');
    locCont.innerHTML = `<span class="font-weight-bold text-center" id="loc-name">${cityName}</span>`;
  };

  const subButton = document.getElementById('submit');
  subButton.addEventListener('click', (evnt) => {
    const cityName = document.getElementById('inputText').value;
    evnt.preventDefault();
    AddTitle(cityName);
    // renderData(cityname);
  });
};

export default locationMetric;
