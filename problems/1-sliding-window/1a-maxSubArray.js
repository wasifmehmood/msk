const arr = [ 2,3,4,1,3,5,6,1,-8,0,1,2,2];
const k = 3;
let count = 0;

const findMaxSubArray = (arr, k) => {
    let iterator = k;
    let i = 0;
    let pointer = i+1;
    let max = 0;
    let sumOfKValues = 0;
    const kArr = [];

    while (i < iterator && iterator <= arr.length) {
        console.log('Loop Start', count++);
        sumOfKValues = sumOfKValues + arr[i];
        if(i+1 === iterator && (max < sumOfKValues)) {
            kArr.length = 0;
            max = sumOfKValues;
            if(i === k) {
                kArr.push(...arr.slice(0, iterator));
            }else {
                kArr.push(...arr.slice(iterator-k, iterator));
            }
        }
        if (i+1===iterator) {
            sumOfKValues = 0

            iterator++;
            i = pointer;
            pointer++;
        }else{
            i++;
        }
    }
    return kArr;
}

console.time('test')
console.log(findMaxSubArray(arr, k));
console.timeEnd('test')
