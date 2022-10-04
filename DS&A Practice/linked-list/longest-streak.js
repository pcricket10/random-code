// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const longestStreak = (head) => {
  // max streak
  //current streak
  let maxStreak = 0;
  let currentStreak = 0;
    //streak value
  //iterate through
  let curr = head;
  let prevVal = null;
  //initial streak value
  
  while(curr){
    
    // console.log(curr.val)
        //current value
    
    //if current value === streak value
    if(curr.val === prevVal){
      currentStreak++;
      // curr = curr.next;
    } else {
      currentStreak = 1;
    }

    if(currentStreak > maxStreak){
      maxStreak = currentStreak;
    }
    prevVal = curr.val
    curr = curr.next;
    
    
    
      //current streak ++
    //else 
      //current streak = 0
      //if current streak > max streak
          //max streak = current streak
    
  }
  
  return maxStreak;


  
  

  
    
  
};

module.exports = {
  longestStreak,
};
