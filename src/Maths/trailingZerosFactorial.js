/*
  We have to fund trailing zeros in factorial of a number

  Example1: 5!= 120 answer = 1
  Example: 10! = 362880 answer = 2
*/

// approach 1
//Time Complexity : O(n)

let n = 125;

const trailingZeros = (n) => {
  let factorial = 1;
  let i = 2;
  while (i <= n) {
    factorial *= i;
    i++;
  }

  // count zeros
  let count = 0;
  while (factorial % 10 === 0) {
    count++;
    factorial = Math.floor(factorial / 10);
  }
  return count;
};

// const answer1 = trailingZeros(n);
// console.log(answer1);
//approach 2 - count number of 5's as 5's and 2's pair makes a zero and number of 5's will always be less than number of 2's
// time complexity : O(logn)

const trailingZeroesEfficient = (n) => {
  let res = 0;
  for (let i = 5; i <= n; i = i * 5) {
    res += Math.floor(n / i);
  }
  return res;
};

const answer2 = trailingZeroesEfficient(n);
console.log(answer2);
