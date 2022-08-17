/*
    A
  /  \
  B    C
/ \  /\
D E F G


*/
// .left
// .right
// .val


const bfs = root => {
  let queue = [root];
  while (queue.length) {
    let curr = queue.pop();
    queue.unshift(curr.left);
    queue.unshift(curr.right);
  }
}


const dfs = root => {
  let stack = [root];
  while (stack.length) {
    let curr = stack.pop();
    stack.push(curr.left);
    stack.push(curr.right);
  }
}
