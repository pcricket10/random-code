// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const pathFinder = (root, target) => {
  if(root===null) return null;
  if(root.val===target) return [root.val];

  const left = pathFinder(root.left, target)
  const right = pathFinder(root.right, target)
  
  if(left !==null) return [root.val, ...left]
  
  if(right!==null) return [root.val,...right]
  return null;
}

module.exports = {
  pathFinder,
};
