/*
 given an array check if it is sorted or not in strictly increasing order
*/

let arr = [1, 3, 4, 5, 6, 9, 8];

function checkSortedArray(i, arr) {
  if (i === arr.length - 1) return true;

  return arr[i] < arr[i + 1] && checkSortedArray(i + 1, arr);
}

let res = checkSortedArray(0, arr);
console.log(res);
