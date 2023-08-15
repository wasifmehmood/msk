function findMaximum(arr) {
    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            const nestedMax = findMaximum(arr[i]);
            max = Math.max(max, nestedMax);
        } else {
            max = Math.max(max, arr[i]);
        }
    }

    return max;
}

const nestedArray = [1, 2, [3, 4, [5, 6]], 7, [8, 9, 10]];

const max = findMaximum(nestedArray);
console.log(max); // Output: 10