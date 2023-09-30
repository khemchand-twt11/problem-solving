/*
 LCM(Least Common Factor) of two or more than two number is the lowest common multiple of those numbers 
 
 Example 4,16 = 16
         4,6 = 12
*/

let a = 53;
let b = 12;

const lcm = (a, b) => {
  let res = Math.max(a, b);
  while (true) {
    if (res % a === 0 && res % b === 0) {
      return res;
    }
    res++;
  }
};
let answer1 = lcm(a, b);
console.log(answer1);

/*
Efficient Solution

Using Formula
a*b = gcd(a,b)*lcm(a,b)
lcm(a,b)= a*b/gcd(a,b)

Time complexity : O(log(Math.min(a,b)))
*/

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const gcdEfficient = (a, b) => {
  return (a * b) / gcd(a, b);
};
const answer2 = gcdEfficient(a, b);
console.log(answer2);
