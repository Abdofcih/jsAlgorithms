function getDigit(num,i){
  return Math.floor(Math.abs(num)/Math.pow(10,i))%10;
 }
 
 function countDigit(num){
     if(num === 0)return 1;
     return Math.floor(Math.log10(Math.abs(num)))+1;
 }
 
 function mostDigits(nums){
     let max=0;
     for(var i=0; i<nums.length;i++){
         max = Math.max(max,countDigit(nums[i]));
     }
     return max;
 }
 
 function radixSort(nums){
     var mostDigit = mostDigits(nums),j=0;
    
      while(j<=mostDigit){
          let temp=Array.from(Array(10), () => new Array());
          for(var i=0; i<nums.length; i++){
               let digit = getDigit(nums[i],j)
               temp[digit].push(nums[i])
          }
          nums = [].concat(...temp)
          j++;
      }
     return nums;
 }
 radixSort([2,30,400,5,155,1,10,3,333]);

 /*
| Sorting         | Best          | Avg           | Worst         | Space Complexity  |  
| radix sort      | Ω(nk)         |	Θ(nk)         |	O(nk)         |	O(n+k)            |
*/