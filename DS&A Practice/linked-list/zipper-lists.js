// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const zipperLists = (head1, head2) => {
  //iterate through list
  //a->c->e->.
  //b->d->f->.
  let tail = head1;
  let curr1 = head1.next;
  let curr2 = head2;
  let count = 0;
  while(curr1 && curr2){
    if(count%2===0){
      tail.next = curr2;
      curr2 = curr2.next
    } else {
      tail.next = curr1
      curr1 = curr1.next
    }
    tail = tail.next
    
    
    // console.log(curr1)
    count++
  }
  if (curr1) tail.next = curr1;
  if (curr2) tail.next = curr2;
  // console.log(curr1, "!!", curr2)
  return head1;
};

module.exports = {
  zipperLists,
};