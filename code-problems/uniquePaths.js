const uniquePaths = function (m, n, memo = {}) {

  const key = m + ',' + n; // '2,3'
  if (key in memo) return memo[key];
  // valid path
  if (m === 1 && n === 1) return 1;
  //invalid path
  if (m === 0 || n === 0) return 0;

  const left = uniquePaths(m - 1, n, memo);
  const right = uniquePaths(m, n - 1, memo);

  memo[key] = left + right
  return memo[key];
}

// dynamic programming: saving info in cache to reference in the future DRY

// memoization

// how deep is the recursive function?
//for each node what is the max number of paths?
//(paths)^depth
