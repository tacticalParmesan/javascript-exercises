const add = function(n1, n2) {
  return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(numbers) {
  let sum = 0;

  for (num of numbers) {
    sum += num;
  }

  return sum;
};

const multiply = function(numbers) {
  let product = 1;
  for (num of numbers){
    product *= num;
  };
  return product;
};

const power = function(n, pow) {
	return n ** pow;
};

const factorial = function(num) {
	let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
