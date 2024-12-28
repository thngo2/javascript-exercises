const convertToCelsius = function(fahrenheitDegree) {
  let celsiusFormula = (fahrenheitDegree - 32) * (5/9);
  let fahrenheitToCelsius = Math.round(celsiusFormula * 10) / 10;
  return fahrenheitToCelsius;
};

const convertToFahrenheit = function(celsiusDegree) {
  let fahrenheitFormula = (celsiusDegree * (9/5)) + 32;
  let celsiusToFahrenheit = Math.round(fahrenheitFormula * 10) / 10;
  return celsiusToFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
