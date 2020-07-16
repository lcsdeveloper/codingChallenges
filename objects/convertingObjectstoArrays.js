// Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.

let obj = {
  a: 1,
  b: 2
};

function toArray(obj) {
  let arr = Object.entries(obj);

  return arr;
}

console.log(toArray(obj));
