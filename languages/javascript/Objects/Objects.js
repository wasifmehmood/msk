// Objects: Properties that are highly related.
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log(" draw ");
  },
};

// Factory Function
// 1: Function Name is Camel Notation
function createCircle(radius){
    return {
        radius,
        draw() {
            console.log('draw');
        }
    }
}

const circle1 = createCircle(4);
console.log('Factory Function', circle1);

// Constructor Function
// 1: Function Name is Pascal Notation
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle2 = new Circle(2);


// Value / Primitive Types
// Number
// String
// Boolean
// Symbol
// undefined
// null

// Reference Types / Objects
// Object
// Function
// Arrays

// Primitive are copied by value
// Reference types/Objects are copied by their reference

// ENUMERATING PROPERTIES OF OBJECT FOR-IN LOOP
  for (let key in circle)
    console.log('FOR-IN: ', key, circle[key]);

// FOR-OF IS USED FOR ITERABLES SUCH AS ARRAYS & MAPS while OBJECTS ARE NOT ITERABLE
for (let key of Object.keys(circle))
    console.log('FOR-OF Object.keys(): ', key);
    
// Object.entries returns each key-value pair as an array
for (let entry of Object.entries(circle))
    console.log('FOR-OF Object.ertries(): ', entry);

// Check if a given Object has a given property or method
if ('radius' in circle) console.log('raidus exists');

// CLONING AN OBJECT
// Way 1
const another = {}
for (let key in circle)
  another[key] = circle[key];
console.log('cloned object', another);
// Way 2
const another1 = Object.assign({}, circle)
console.log('cloned object', another1);
// Way 3
const another2 = { ...circle }
console.log('cloned object', another2);