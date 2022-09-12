const fiveSort = (nums) => {
  // todo
    // let i = 0;
    // let count = 0;
    // while(i<nums.length-count){
    // if(nums[i]===5){
    //   nums.push(nums.splice(i,1)[0])
    //   count++
    // }
    // else i++
    // }
  let i = 0;
  let j = nums.length-1

  while(i<j){
    if(nums[j]===5){
      j--
    } else if(nums[i]===5){
      [nums[i], nums[j]] = [nums[j], nums[i]]
      i++
    } else{
      i++
    }
  }


  return nums;
};

module.exports = {
  fiveSort,
};
