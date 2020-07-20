// Find the Mean of All Digits
// Create a function that returns the mean of all digits.

// Examples
// mean(42) ➞ 3

// mean(12345) ➞ 3

// mean(666) ➞ 6
// Notes
// The mean of all digits is the sum of digits / how many digits there are (e.g. mean of digits in 512 is (5+1+2)/3(number of digits) = 8/3=2).
// The mean will always be an integer.

let num = 789;
function mean(num) {
  let numStr = num.toString();
  let sum = 0;
  let getLength = numStr.length;

  for (i in numStr) {
    sum += Number.parseInt(numStr[i]);
  }

  return sum / getLength;
}

console.log(mean(num));
