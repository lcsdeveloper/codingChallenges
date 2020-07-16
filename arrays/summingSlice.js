// Given an array and an integer n, return the sum of the first n numbers in the array.

// Examples
// sliceSum([1, 3, 2], 2) ➞ 4

// sliceSum([4, 2, 5, 7], 4) ➞ 18

// sliceSum([3, 6, 2], 0) ➞ 0
// Notes
// If n is larger than the length of the array, return the sum of the whole array.


let arr =[2,4], n = 9;

function sliceSum(arr, n) {
  let sum = 0;
  if (n > arr.length) {
    sum = arr.reduce((currentValue, accumulator) => currentValue + accumulator);
  } else {
    for (let i = 0; i < n; i++){
      sum += arr[i];
    }     
  }

  return sum;
}

console.log(sliceSum(arr, n));