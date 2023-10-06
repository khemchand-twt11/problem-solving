/* check whether a number is pallindrome of not
Example1
  373  0*10+3 = 3
  37   3*10+7 = 37
  3    37*10+3 = 373
  0    373

  373==373 true

Example 2 
  487  0*10+7 = 7
  48   7*10+8 = 78
  4    78*10+4 = 784
  0    784

  487 !== 784 false
    
*/

let n = 99877899;

const pallindromeCheck = (n) => {
  let rem = 0;
  let copy = n;

  while (n > 0) {
    rem = rem * 10 + Math.floor(n % 10);
    n = Math.floor(n / 10);
  }

  return rem === copy;
};
const answer1 = pallindromeCheck(n);
console.log(answer1);

const pallindromeCheckRecursive = (n, rem = 0, copy = n) => {
  if (n === 0) return copy === rem;
  rem = rem * 10 + Math.floor(n % 10);
  return pallindromeCheckRecursive(Math.floor(n / 10), rem, copy);
};

const answer2 = pallindromeCheckRecursive(n);
console.log(answer2);
