// var removeDuplicates = function (nums) {
//   //asumming nums is a sorted array
//   let res = [...new Set(nums)];

//   return [res.length,res];
// };

var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            nums.splice(i + 1, 1);
            i--;
        }
    };
};
console.log(removeDuplicates([1, 1, 2]));
