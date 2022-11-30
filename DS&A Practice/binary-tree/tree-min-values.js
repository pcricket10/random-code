// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeMinValue = (root) => {
  let minVal = root.val;
  const stack = [root]
  while(stack.length > 0){
    const node = stack.pop();
    if(node.val < minVal) minVal = node.val
    if(node.left) stack.push(node.left)
    if(node.right) stack.push(node.right)
  }
  return minVal;
};

module.exports = {
  treeMinValue,
};