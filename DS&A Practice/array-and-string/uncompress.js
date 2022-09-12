const uncompress = (s) => {
  //set i and j pointers to 0
  //use j to find end of number sequence
  //increment j until you find a char
  //i is the start
  //j is the end



  let res = []
  let i=0
  let j=0

  while(i < 8)
  if(s[j]>=0 && s[j]<10){//if number
    j++
  } else {
    const num =Number(s.slice(i,j));
    const char = s[j];

    console.log(num, "@@", char)
    for(let k=0; k<num; k++){
      res.push(char);
    }

    j++
    i=j
  }

  return res.join('');
};

module.exports = {
  uncompress,
};
