// count total number of digits in a number

let n = 83838838388;

const countDigits = (n) => {
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
};
const answer = countDigits(n);
console.log(answer);
