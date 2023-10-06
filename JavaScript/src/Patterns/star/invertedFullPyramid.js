/*
 Print inverted hollow half pyramid 

n = 5

*********** 11
 ********* 9
  ******* 7
   ***** 5
    *** 3
     *  1

*/

let n = 5;
const invertedFullPyramid = () => {
  for (let i = n; i > 0; i--) {
    //spaces
    let str = '';
    for (let j = n; j > i; j--) {
      str += ' ';
    }
    for (let k = i * 2 - 1; k > 0; k--) {
      str += '*';
    }

    console.log(str);
  }
};

invertedFullPyramid(n);
