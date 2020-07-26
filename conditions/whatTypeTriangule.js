// What Type of Triangle?
// Create a function which returns the type of triangle, given the side lengths. Return the following values if they match the criteria.

// No sides equal: "scalene"
// Two sides equal: "isosceles"
// All sides equal: "equilateral"
// Less or more than 3 sides given: "not a triangle"
// Examples
// getTriangleType([2, 6, 5]) ➞ "scalene"

// getTriangleType([4, 4, 7]) ➞ "isosceles"

// getTriangleType([8, 8, 8]) ➞ "equilateral"

// getTriangleType([3, 5, 5, 2]) ➞ "not a triangle"
// Notes
// You will be given an array of positive integers.
// Check the Resources tab for more information on the types of triangles.

let triangle = [2,3,5];
function getTriangleType(triangle) {
  if (triangle.length != 3) {
    return 'not a triangle';
  } else if (triangle[0] === triangle[1] && triangle[1] === triangle[2]) {
    return 'equilateral';
  } else if (
    triangle[0] === triangle[1] ||
    triangle[1] === triangle[2] ||
    triangle[0] === triangle[2]
  ) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}
console.log(getTriangleType(triangle));

