// 1: Arrays are Objects

const number = [2,3]

number.push(4);

console.log('End', number);

number.unshift(5);

console.log('Beginning', number);

// start index, delete count, ...elements
number.splice(2, 0, 'a', 'b');

console.log('Go to a specific index and add new elem', number);