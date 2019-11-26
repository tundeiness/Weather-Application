const renderWeather = () => {
  const icon = document.querySelector('#icon-item');
  const describe = document.querySelector('#desc-item');

  return {
    render(data) {
      icon.innerHTML = `${data.weather[0].icon}`;
      describe.innerHTML = `${data.description}`;
    },
  };
  // return(render);
};

export default renderWeather;
