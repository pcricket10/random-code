// Write a function, pairedParentheses, that takes in a string as an argument. The function should return a boolean indicating whether or not the string has well-formed parentheses.
// You may assume the string contains only alphabetic characters, '(', or ')'.
const pairedParentheses = string => {
  let count = 0;
  for (char of string) {
    if (count < 0) {
      console.log(false);
      return false;
    };
    if (char === "(") count++;
    if (char === ")") count--;
  }
  if (count === 0) {
    console.log(true);
    return true;
  };
  console.log(false);
  return false;
}


pairedParentheses("(david)((abby))"); // -> true
pairedParentheses("()rose(jeff"); // -> false
pairedParentheses(")("); // -> false
pairedParentheses("()"); // -> true
pairedParentheses("(((potato())))"); // -> true
pairedParentheses("(())(water)()"); // -> true
pairedParentheses("(())(water()()"); // -> false
pairedParentheses(""); // -> true
pairedParentheses("))()"); // -> false
pairedParentheses("())(()"); // false
