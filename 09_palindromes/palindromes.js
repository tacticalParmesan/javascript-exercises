const palindromes = function (text) {
  const processedText = text.toLowerCase().replace(/[^a-z0-9]/g, "")
  return processedText.split("").reverse().join("") === processedText;
};

// Do not edit below this line
module.exports = palindromes;
