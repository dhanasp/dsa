// Given an array of integers nums and an integer target, 
// return the indices i and j such that nums[i] + nums[j] == target and i != j.


// timeComplexity - o(n^2)
// bruteforce
const twoSumB = (nums,target) => {
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
           if(nums[i]+nums[j] === target) {
             return [i, j]
           }
        }
    }
    return []
}


// time-timeComplexity - o(n)
const twoSum = (nums, target) => {
    const map = new Map()
    for(i=0;i< nums.length; i++){
        const complement = target - nums[i]
        if(map.has(complement)){
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
    return []
}

