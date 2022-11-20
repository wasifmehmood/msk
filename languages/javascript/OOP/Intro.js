// In es5 and before we had var for declaring variable but it has a number of issues when it comes to scoping
// let is replacement for var in es6

// If an object has one or more methods, we say that an object has a behaviour

// PROBLEM
// Creating an object with an Object literal Syntax ( let a = { prop1: ///, prop2: /// } )
// is an issue if an object has behaviour
// Object with Behaviour => let behaviour = { prop1: ///, make: function() { /// } }
// Duplication arises when we need multiple similar object
// and when there is a bug inside methods, we have to look for every duplicated object and resolve them.
const circleOL = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

// SOLUTION
// Use Factory or constructor function.
// Factory
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circleFact = new createCircle(1);
circleFact.draw();