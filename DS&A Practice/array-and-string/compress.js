const compress = (s) => {
  // todo
  let compressed = []
  let i = 0
  while(i < s.length){
    let count = 0;
    const char = s[i];
    while(s[i]===char){
      i++;
      count++;
    }
    if(count >1)
      compressed.push(count)
    compressed.push(char)
  }
  return compressed.join("")
};

module.exports = {
  compress,
};
