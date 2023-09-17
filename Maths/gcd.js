/*
GCD(Greatest Common Divisor) or HCF(Highest Common Factor) of two or more number is the greatest common factor that exactly divides those numbers

Example:1 
    4 and 6 = 2 is the maximum factor that divides 4 and 6 
    100 and 200  = 100 divides both 
    4 and 13 = 1 divides both 
*/

// approach1 Time Complexity O(min(a,b))
let a = 125;
let b = 657;
const gcd = (a, b) => {
  let res = Math.min(a, b);
  while (res > 0) {
    if (a % res === 0 && b % res === 0) {
      return res;
    }
    res--;
  }
};
const answer1 = gcd(a, b);
console.log(answer1);

/*
approach 2: 
let b be smaller than a

gcd(a,b)= gcd(a-b,b)

why? 

let g be gcd of a and b
a = gx
b = gy and gcd(x,y) = 1

a-b = g(x-y)
*/
let c = 52;
let d = 13;
const gcdUsingEuclid = (c, d) => {
  while (c !== d) {
    if (c < d) {
      d = d - c;
    } else {
      c = c - d;
    }
  }
  return c;
};

const answer2 = gcdUsingEuclid(c, d);

console.log(answer2);

/*
Otimized version

*/

let e = 18;
let f = 171;

const gcdEuclicImproved = (a, b) => {
  if (b === 0) return a;
  return gcdEuclicImproved(b, a % b);
};
const answer3 = gcdEuclicImproved(e, f);
console.log(answer3);
