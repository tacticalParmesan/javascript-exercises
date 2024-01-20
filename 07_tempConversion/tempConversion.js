const convertToCelsius = function(tempInFarenheit) {
  const conversionFormula = (tempInFarenheit - 32) * 5/9;
  let convertedTemp = (Math.round(conversionFormula * 10) / 10).toFixed(1);
  return Number(convertedTemp);
   
};

const convertToFahrenheit = function(tempInCelsius) {
  const conversionFormula = (tempInCelsius * 9/5) + 32
  let convertedTemp = (Math.round(conversionFormula * 10) / 10).toFixed(1);
  return Number(convertedTemp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
