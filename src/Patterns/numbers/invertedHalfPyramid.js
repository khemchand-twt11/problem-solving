/*

Given n print Iverted half pyramid 

Example 
n = 5
12345 
1234
123
12
1  

*/

let n = 5;
const invertedHalfPyramid = (n) => {
  for (let i = n; i >= 1; i--) {
    let str = '';
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    console.log(str);
  }
};
invertedHalfPyramid(n);
