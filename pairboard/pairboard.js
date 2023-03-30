// Problem --
// Ransom Note:
// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.
const magazine1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";


const ransomNote = (string, magazine) => {
  //check if the string is contained in magazine
  // const stringArray = string.split(' ')
  const magazineArray = magazine.split(' ')
  const magazineObj = {};

  for (word of magazineArray) {
    if (word[word.length - 1] === ',' || word[word.length - 1] === '.') {
      word.splice(-1, 1);
    }
    if (magazineObj[word]) magazineObj[word]++
    else (magazineObj[word] = 1)
  }
  console.log(magazineObj)

  // for (let word of stringArray) {
  //   // if (!magazine.includes(word)) {
  //   //   return false;
  //   // }
  //   const idx = magazineArray.indexOf(word)
  //   console.log(idx, "idx")
  //   if (idx === -1) return false
  //   stringArray.splice(idx, 1)
  // }
  // return true;

}




console.log(ransomNote("sit ad est sint", magazine1));
// should return true

console.log(ransomNote("sit ad est love", magazine1));
// // should return false

console.log(ransomNote("sit ad est sint in in", magazine1));
// // should return true

console.log(ransomNote("sit ad est sint in in in in", magazine1));
  // // should return false
