// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const removeNode = (head, targetVal) => {
  //pointers to previous, current and next
  //iterate through
  // if targetVal===current.val
      //set prev.next to curr.next
  let curr = head;
  let prev = null;
  if(curr.val===targetVal){
    return head.next;

  }
  while(curr!==null){
    if(curr.val ===targetVal){
      prev.next = curr.next;
      return head;
    }
    prev = curr;
    curr=curr.next
  }
  return head;
};

module.exports = {
  removeNode,
};
