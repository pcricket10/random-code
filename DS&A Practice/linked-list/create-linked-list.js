class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
  const dummy = new Node(null)
  let tail = dummy;
  //pointer to previous node
  //iterate through values array
  
  for(let value of values){
    tail.next = new Node(value);
    tail = tail.next
  }
  //construct new node
  //set "prev.next" to new node
  return dummy.next;
};

module.exports = {
  createLinkedList,
};