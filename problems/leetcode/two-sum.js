/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 const twoSumSlow = (nums, target) => {
    for(let i=0; i < nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
    return [];
};

const twoSumFast = (nums, target) => {
    const map = {};
  
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const diff = target - num;
  
      if (map.hasOwnProperty(diff)) {
        return [map[diff], i];
      }
  
      map[num] = i;
    }
  
    return [];
  }
  
  // Example usage
  const nums = [2, 7, 11, 15];
  const target = 9;
  
  const result = twoSumFast(nums, target);
  console.log(result); // Output: [0, 1]
