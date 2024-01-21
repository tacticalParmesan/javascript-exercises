const fibonacci = function(n) {
  let sequence = [1, 1];

  // Accounting for the case the user input a number in a string format
  let searchedFibonacciNumber = parseInt(n);
  
  // The finoacci sequence does not accept negative numbers
  if (searchedFibonacciNumber < 0) {
    return "OOPS";
  } else if (searchedFibonacciNumber === 0) {
    return 0;
  }

  // Get fibonacci sequence until given int
  for (let i = 2; i < searchedFibonacciNumber; i++) {
    // The fibonacci sequence is a series of numbers in which each one is the sum
    // of the preceding two;

    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence[searchedFibonacciNumber - 1];
};

// Do not edit below this line
module.exports = fibonacci;
