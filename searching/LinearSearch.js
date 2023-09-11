//Problem statment
//Input: nums=[1,2,3,4,7,5,2,5,7,8,9] target = 3
//Input: nums=[1,2,3,4,7,5,2,5,7,8,9] target = 0



const linear = (nums,target)=>{
    for(let i=0;i<nums.length-1;++i){
        if(target===nums[i]){
            return i
        }
        
    }
    return -1;
}
console.log(linear([1,2,3,4,5,6,7,8], 1))