// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const sumList = (head) => {
  // todo
  let sum = 0
  let curr = head;
  while(curr){
    sum+=curr.val;
    curr=curr.next;
  }
  return sum;
};

module.exports = {
  sumList,
};
