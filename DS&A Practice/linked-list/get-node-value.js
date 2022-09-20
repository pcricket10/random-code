// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const getNodeValue = (head, index) => {
  // todo
  let count = 0;
  let curr = head;
  while(curr){
    if(count===index){
      return curr.val;
    }
    count++;
    curr=curr.next
  }
  return null;
};

module.exports = {
  getNodeValue,
};
