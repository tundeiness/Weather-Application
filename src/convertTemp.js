function celsius(temp) {
  const URL = `https://api.openweathermap.org/data/2.5/forecast/daily?${position}&cnt=7&units=imperial&APPID=${appid}`;
  const cel = Math.round(parseFloat(temp) - 273.15);
  return cel;
}

function fahrenheit(tempKelvin) {
  const fahr = Math.round((tempKelvin - 273.15) * 1.8 + 32);
  return fahr;
}

export { celsius, fahrenheit };
