function celsius(temp) {
  const cel = Math.round(parseFloat(temp) - 273.15);
  return cel;
}

function fahrenheit(tempKelvin) {
  const fahr = Math.round((tempKelvin - 273.15) * 1.8 + 32);
  return fahr;
}

export { celsius, fahrenheit };
