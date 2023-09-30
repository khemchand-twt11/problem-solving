/*
 Print inverted hollow half pyramid 

n = 5

*****
*  *
* *
**
*

*/

let n = 8;
const hollowInvertedPyramid = (n) => {
  for (let i = n; i > 0; i--) {
    let str = '';
    for (let j = i; j > 0; j--) {
      if (i === 0 || i === n || j === i || j === 1) {
        str += '*';
      } else {
        str += ' ';
      }
    }
    console.log(str);
  }
};
hollowInvertedPyramid(n);
