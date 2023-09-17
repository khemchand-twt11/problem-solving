/*
 Print inverted half pyramid 

n = 5

*****
****
***
**
*

*/

let n = 5;

const invertedHalfPyramid = (n) => {
  for (let i = n; i > 0; i--) {
    let str = '';
    for (let j = i; j > 0; j--) {
      str += '*';
    }
    console.log(str);
  }
};

invertedHalfPyramid(n);
