/*

Given n create hollow number half pyramid 
1
12
1 3
1  4
12345

*/
const process = require('process');

let n = Number(process.argv[2]);

const hollowHalfPyramid = () => {
  for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
      if (i == 1 || i === n || j === 1 || j === i) {
        str += j;
      } else {
        str += ' ';
      }
    }
    console.log(str);
  }
};
hollowHalfPyramid(n);
