const intersection = (a, b) => {
  const arr = []
  const bSet = new Set(b);

  for(let i = 0; i < a.length; i++){
    aChar = a[i];
    if(bSet.has(aChar)){
      arr.push(aChar)
    }


  }
  return arr
};

module.exports = {
  intersection,
};
