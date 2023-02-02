// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeValueCount = (root, target) => {
  return helper(root, target, 0);
};

const helper = (root, target, count) => {
  console.log(count,"!!")
  if(!root) return 0;
  const foundTarget = root.val === target? 1:0;


 return foundTarget+ helper(root.left,target) + helper(root.right, target)

  
}

module.exports = {
  treeValueCount,
};
