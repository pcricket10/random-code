class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeLists = (head1, head2) => {
  let dummy = new Node(null)
  let tail = dummy;
  let curr1 = head1;
  let curr2 = head2;
  let count = 0
  while(curr1 && curr2){
    //compare curr1 and curr2. which one is smaller gets pointed to by the "tail"
    if(curr1.val < curr2.val){
      tail.next = curr1;
      curr1 = curr1.next;

    } else {
      tail.next = curr2;
      curr2 = curr2.next;
    }
    tail = tail.next;
  }
  if(curr1) tail.next = curr1;
  if(curr2) tail.next = curr2;
  return dummy.next;
};

module.exports = {
  mergeLists,
};
