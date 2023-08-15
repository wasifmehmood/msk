const arr = [ 2,3,4,1,3,5,6,1,-8,0,1 ];
const k = 3;
let count = 0;


function findMaxSumSubarray(arr, k) {
    let maxSum = 0;
    let currentSum = 0;
    let maxSubarray = [];
  
    // calculate sum of first k elements
    for(let i = 0; i < k; i++) {
      console.log('Loop Start', count++);

      currentSum += arr[i];
    }
  
    // set maxSum to currentSum and maxSubarray to the first k elements
    maxSum = currentSum;
    maxSubarray = arr.slice(0, k);
  
    // slide the window and update currentSum and maxSubarray
    for(let i = k; i < arr.length; i++) {
      currentSum += arr[i] - arr[i-k];
      console.log('Loop Start', count++);
      if(currentSum > maxSum) {
        maxSum = currentSum;
        maxSubarray = arr.slice(i-k+1, i+1);
      }
    }
  
    return maxSubarray;
  }

console.time('test')
console.log(findMaxSumSubarray(arr, k));
console.timeEnd('test')