// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeSum = (root) => {
  let sum = 0;
  if(!root) return 0;
  const stack = [root];
  while(stack.length>0){
    const node=stack.pop()
    sum+=node.val
    
    
    if(node.left) stack.push(node.left)
    if(node.right) stack.push(node.right)
  }
  return sum  
};

module.exports = {
  treeSum,
};
