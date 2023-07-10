/*
  given an array return the sum of odd elements from the array;
*/

let arr = [1, 2, 3, 4, 5, 6, 7];

function oddSum(i, arr, sum) {
  if (i === arr.length) return sum;

  if (arr[i] % 2 === 1) sum = sum + arr[i];
  return oddSum(i + 1, arr, sum);
}

let res = oddSum(0, arr, 0);
console.log(res); //16
