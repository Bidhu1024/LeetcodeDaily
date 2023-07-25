var containsDuplicate = function(nums) {
    if(nums.length < 2) return false
    nums.sort(function(a, b){return b-a});
    for(let i = 0;i<nums.length;i++){
        if(nums[i] === nums[i+1]){
            return true;
        }
    }
    return false
};
console.log(containsDuplicate([2,14,18,22,22]))