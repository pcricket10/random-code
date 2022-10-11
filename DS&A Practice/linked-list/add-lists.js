class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addLists = (head1, head2) => {
  // todo
  //create new node;
  //iterate through both heads
  // add value of each together PLUS a "carry" variable and "push" to the new node
  //if new value is greater than 9, only add the least significant digit to the LL 
  //and the most significant to the "carry" variable
  // 
  const dummy = new Node(null);
  let tail = dummy;
  
  let carry = 0;
  let curr1 = head1;
  let curr2 = head2
  while(curr1!==null || curr2!==null||carry!==0){
    const curr1Val = curr1 === null ? 0 : curr1.val
    const curr2Val = curr2 === null ? 0 : curr2.val
    const sum = curr1Val + curr2Val + carry;
    carry = sum > 9 ? 1 : 0;
    const digit = sum%10
    
    tail.next = new Node(digit);
    tail = tail.next;
    
    if (curr1 !== null) curr1 = curr1.next;
    if (curr2 !== null) curr2 = curr2.next;
 
  }
  // if (curr1) tail.next = curr1;
  // if(curr2) tail.next = curr2;
  return dummy.next;
  
};

module.exports = {
  addLists,
};
