// timecomplexity - o(n ^ 2);
function hasDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}


// timecomplexity = o(n);
function hasDuplicate(nums) {
  const numsSet = new Set();
  for (i = 0; i < nums.length; i++) {
    if (numsSet.has(nums[i])) return true;
    numsSet.add(nums[i]);
  }
  return false;
}

// timecomplexity = o(n);
function hasDuplicate(nums){
  return nums.length != new Set(nums).size
}


