// Get Sum of People's Budget
// Create the function that takes an array with objects and returns the sum of people's budgets.

// Examples
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600
// Notes
// N/A

let arr = [
  { name: 'John', age: 21, budget: 23000 },
  { name: 'Steve', age: 32, budget: 40000 },
  { name: 'Martin', age: 16, budget: 2700 }
];

function getBudgets(arr) {
  let sum = 0;
  for (i in arr) {
    sum += arr[i].budget;
  }

  return sum;
}

console.log(getBudgets(arr));
