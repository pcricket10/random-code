// Counting Bits
// Given an integer, n, determine the following:
// 1. How many 1-bits are in the binary representation?
// 2. The number n’s binary representation has k significant bits indexed from 1 to k. What are the respective positions of each 1-bit, in ascending order?
// For example: n = 37
// Binary =   [1, 0, 0, 1, 0, 1]
// Location =  1  2  3  4  5  6
// in the binary representation of 37 there are three 1-bits located at 1, 4, and 6 positions
// n = 161
// output = [3, 1, 3, 8]
// The integer n = (161)base10 coverts to (10100001)base2
// Binary =   [1,0,1,0,0,0,0,1]
// Location =  1 2 3 4 5 6 7 8
// There are 3 1-bits located at 1, 3, 8
// Since there are 3 1-bits, return length + locations in array (of length 4)
function getOneBits(n) {
  const result = [];
  const bin = n.toString(2)
  for (let i = 0; i < bin.length; i++) {
    const bit = bin[i]
    if (bit === "1") result.push(i + 1)//position is 1 indexed
  }
  return [result.length, ...result]

}
console.log(getOneBits(161)) // expected [3,1,3,8]
