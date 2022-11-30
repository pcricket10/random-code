// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const breadthFirstValues = (root) => {
  if(!root) return [];
  const queue = [root]
  const vals = []
  while(queue.length > 0){
    const curr = queue.pop();
    vals.push(curr.val) 
    if(curr.left) queue.unshift(curr.left)
    if(curr.right) queue.unshift(curr.right)
     
  }
  return vals;
};

module.exports = {
  breadthFirstValues,
};
