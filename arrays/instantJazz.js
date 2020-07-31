// Instant JAZZ
// Create a function which concantenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

// Examples
// jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]

// jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]

// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

// jazzify([]) ➞ []
// Notes
// Return an empty array if the given array is empty.
// You can expect all the tests to have valid chords.

let arr = ['G', 'F', 'C7'];

function jazzify(arr) {

  return arr1 = arr.map( e => {
    if(e[e.length - 1] === "7"){
      return e
    }else {
      return e+="7"
    }
  })
}


console.log(jazzify(arr));
