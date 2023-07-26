var missingNumber = function(nums) {
    let n = nums.length;
    let sum = (n*(n+1))/2; //sum of n natural numbers

    for(let i = 0;i<n;i++){
        sum -= nums[i]
    }
    return sum;
};