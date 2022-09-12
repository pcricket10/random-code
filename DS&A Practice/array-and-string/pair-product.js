const pairProduct = (numbers, targetProduct) => {
  // todo
  const previousNums={}
  for(let i =0; i < numbers.length; i++){
    const char = numbers[i];
    const complement = targetProduct/char;
    if(complement in previousNums) return [previousNums[complement],i];
    previousNums[char] = i;
    // const complementIdx = numbers.indexOf(complement);
    // if(complementIdx>0){
    //   return [i, complementIdx]
    // }

  }
  return null;
};

module.exports = {
  pairProduct,
};
