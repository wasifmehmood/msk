// Given an integer array nums, find the subarray with the largest sum, and return its sum.

function maxSubarraySum(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

/**
* @param {number[]} nums
* @return {number}
*/
var maxSubArray = function (nums) {
    var max = nums[0];
    var tmp = 0;
    for (var i = 0; i < nums.length; i++) {
        tmp += nums[i];
        if (tmp > max) {
            max = tmp;
        }
        if (tmp < 0) {
            tmp = 0;
        }
    }
    return max;
};