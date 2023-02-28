// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const bottomRightValue = (root) => {
  //bfs
  //queue
  //last node in queue should be the one
  const queue = [root];
  let curr = root;
  while(queue.length>0){
    curr = queue.pop();
   
    console.log(curr.val, "cur!")
    if(curr.left) queue.unshift(curr.left)
    if(curr.right) queue.unshift(curr.right)
    
  }
  return curr.val;
  

};



module.exports = {
  bottomRightValue,
};
