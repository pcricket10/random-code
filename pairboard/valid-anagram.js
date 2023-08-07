/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // if(s.length !== t.length) return false;
  // const sortedS = s.split('').sort().join('');
  // const sortedT = t.split('').sort().join('');

  // return sortedS===sortedT ? true : false;

  /*
  {a:3,
  n:1
  g:1,
  r:1
  m:}


  */
  if (s.length !== t.length) return false;
  const obj = {}

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!obj[char]) obj[char] = 1
    else obj[char]++
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    obj[char]--

  }
  const vals = Object.values(obj);

  for (let i = 0; i < vals.length; i++) {
    const char = vals[i];
    if (char !== 0) return false;
  }

  return true;










};
console.log(isAnagram("😭6😂", "😂😭6"))
