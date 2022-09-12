const maxValue = (nums) => {
  // todo
  let largest = nums[0]
  for(let i = 1; i < nums.length; i++){
    const val = nums[i];
    if(val > largest) largest = val;
  }
  return largest
};

module.exports = {
  maxValue,
};
