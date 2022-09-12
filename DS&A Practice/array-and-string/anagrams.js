const anagrams = (s1, s2) => {
  // todo
//   const s1Sorted = s1.split('').sort().join('');
//   const s2Sorted = s2.split('').sort().join('');

//   console.log(s1Sorted)
//   console.log(s2Sorted)
//   if(s1Sorted === s2Sorted)
//     return true
//   return false
  const count = {};
  for(let char of s1){
    if(!(char in count)){
      count[char] = 0;
    }
    count[char] +=1
  }

    for(let char of s2){
      if(char in count)
        count[char] -=1
      else
        return false
  }
  for(let char in count){
    if(count[char]!==0)
      return false
  }
  return true

};

module.exports = {
  anagrams,
};
