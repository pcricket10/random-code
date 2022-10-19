// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const depthFirstValues = (root) => {
  const result = []
  const stack = [root];
  if(!root) return []
  
  while(stack.length>0){
    let curr = stack.pop()
    result.push(curr.val)
    console.log(curr.val)
    if(curr.right) stack.push(curr.right);
    if(curr.left) stack.push(curr.left);
    
  }
  return result
};

module.exports = {
  depthFirstValues,
};