const kth = (arr,k)=>{
    let count = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i]<=k+count){
            count++
        }
    }
    return k+count;
}


console.log(kth([1,3,4,5,9,22],5))