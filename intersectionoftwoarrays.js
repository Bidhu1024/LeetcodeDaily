ar intersect = function(nums1, nums2) {
    if(nums1.length === 0)return;
    if(nums2.length === 0)return;

 nums1.sort((a,b)=>{return a-b})
 nums2.sort((a,b)=>{return a-b})
const result = [];
let i = 0;
let j = 0;

while(i<nums1.length && j<nums2.length){
    if(nums1[i]===nums2[j]){
        result.push(nums1[i])
        i++;
        j++;
    }else if(nums1[i]<nums2[j]){
        i++;
    }else{
        j++
    }
}
return result

    
};