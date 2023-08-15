const arr = [ 2,3,4,1,3,5,6,1,-8,0,1 ];
const k = 3;
let count = 0;

const findMaxSumSubArray = (arr, k) => {
    let max = 0;
    let maxArr = [];

    for(let i=0; i<arr.length-k; i++) {
        let sum = 0;

        for(let j=i; j < i+k; j++){
            console.log('Loop Start', count++);
            sum += arr[j];
        }

        if (sum > max) {
            max = sum;
            maxArr = arr.slice(i, i+k);
        }
    }
    return [max, maxArr];
}

console.time('test')
console.log(findMaxSumSubArray(arr, k));
console.timeEnd('test')