const arr = [ 2,3,4,1,3,5,6,1,-8,0,1 ];
const k = 3;
let count = 0;


function findMaxSumSubarray(arr, k) {
    let start = 0;
    let max = 0;
    let currentSum = 0;
    let kArr = 0;

    for (let end=0; end< arr.length; end++) {
        currentSum += arr[end];

        if (end >= k - 1) {
            if(currentSum > max) {
                max = currentSum;
                kArr = arr.slice(start, end+1);
            }
            currentSum -= arr[start];
            start++;
        }
    }

    return {max, kArr};
}

console.time('test')
console.log(findMaxSumSubarray(arr, k));
console.timeEnd('test')