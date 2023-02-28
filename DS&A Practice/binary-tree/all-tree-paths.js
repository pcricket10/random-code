// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const allTreePaths = (root) => {
  if(!root) return [];
  if(!root.left && !root.right) return [[root.val]]
  const paths = []
  const leftSubPaths = allTreePaths(root.left);
  for(let subPath of leftSubPaths){
    paths.push([root.val, ...subPath])
  }
  const rightSubPaths = allTreePaths(root.right);
  for(let subPath of rightSubPaths){
    paths.push([root.val, ...subPath])
    
  }
  return paths;
};

module.exports = {
  allTreePaths,
};
