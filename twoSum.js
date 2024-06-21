var twoSum = function(nums, target) {
    let startPoint = 0;
    let endPoint = startPoint + 1;
    
    let result = [];

    while(startPoint <= nums.length -1 ){
      
        // console.log("looping", startPoint)
        
        const checkans = target - nums[startPoint];
        if(endPoint <= nums.length-1){
          if(checkans === nums[endPoint]){
            result.push([startPoint, endPoint])
          }
            endPoint++
        }else{
          startPoint++
          endPoint = startPoint + 1
        }
        
    }
    
    return result[0]
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
