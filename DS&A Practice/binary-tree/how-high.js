// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const howHigh = (node) => {
  // height of tree -1
  
  if(node===null) return -1;
  const left = howHigh(node.left);
  const right = howHigh(node.right);
  // if(node?.left ===null && node?.right===null) return node.val
  const maxHeight = Math.max(left, right)
  return 1 + Math.max(left, right)
  
};

module.exports = {
  howHigh,
};