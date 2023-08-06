let isPallindrome = (x)=>{
if(x<0)return false;

return x === +x.toString().split("").reverse().join("");
}

const res = isPallindrome(122)
console.log(res)