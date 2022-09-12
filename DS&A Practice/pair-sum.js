const mostFrequentChar = (s) => {
  const frequency = {};
  let mostFreq ="";
  let count = 0;

  for(char of s){
    if(!(char in frequency)){
      frequency[char] = 1;
    } else {
      frequency[char]++
    }
  }
//   for(char of s){
//     console.log(char)
//     const val = frequency[char]
//     console.log(val)

//   }
  for(key in frequency){
    const val = frequency[key];
    console.log(key, val)
    if (val > count){
      mostFreq=key;
      count=val;
    }
  }
  return mostFreq
};

module.exports = {
  mostFrequentChar,
};
