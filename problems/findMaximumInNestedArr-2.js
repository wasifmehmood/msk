function findMaximum(arr) {
    const flattened = arr.flat(Infinity);
    return Math.max(...flattened);
}

const nestedArray = [1, 2, [3, 4, [5, 6]], 7, [8, 9, 10]];

const max = findMaximum(nestedArray);
console.log(max); // Output: 10