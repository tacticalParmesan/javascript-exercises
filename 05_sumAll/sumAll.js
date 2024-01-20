const sumAll = function(num1, num2) {
  let sumOfAll = 0;
  
  if (num1 < 0 || num2 < 0){
    return "ERROR";
  }
  else if (typeof num1 !== "number"
    || typeof num2 !== "number") {
      return "ERROR"
    } else {

      
      startNum = (num1 < num2) ? num1 : num2;
      endNum = (num1 > num2) ? num1 : num2;
      
      for (let i = startNum; i <= endNum; i++) {
        sumOfAll += i;
      }
      return sumOfAll;
    };
  }
    
// Do not edit below this line
module.exports = sumAll;
