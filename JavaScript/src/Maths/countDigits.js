/* count total number of digits in a number
 approach 1: iteatively
 approach 2: recursively
 approach 3: log10
*/

let n = 83838838388;

const countDigits = (n) => {
  let count = 0;
  while (n > 0) {
    ++count;
    n = Math.floor(n / 10);
  }
  return count;
};
const answer1 = countDigits(n);
console.log(answer1);

//recursive

const countDigitsRecursive = (n) => {
  if (n === 0) return 0;
  return 1 + countDigitsRecursive(Math.floor(n / 10));
};
const answer2 = countDigitsRecursive(n);
console.log(answer2);

//using Log10
console.log(Math.floor(Math.log10(n) + 1));
console.log(Math.floor(Math.log10(100000)));
