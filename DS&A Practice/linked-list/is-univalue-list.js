// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const isUnivalueList = (head) => {
  let val = head.val
  let curr = head.next;
  while(curr){
    if(val === curr.val){
      curr = curr.next;
    } else{
      return false
    }
  }
  return true;
};

module.exports = {
  isUnivalueList,
};
