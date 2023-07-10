/*
 given an array return a new array with only odd elements 
*/

let arr = [1, 3, 4, 5, 6, 7, 19];

function oddArray(i, arr, res) {
  if (i == arr.length) return;

  if (arr[i] % 2 === 1) res.push(arr[i]);
  oddArray(i + 1, arr, res);
  return res;
}
let res = oddArray(0, arr, []);
console.log(res);
