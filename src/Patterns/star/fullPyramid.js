/*
FULL PYRAMID
n  = 5 so 5 rows total and each row will have that number of starts
    *
   ***
  *****
 *******
*********
*/
let n = 5;

const fullPyramid = () => {
  for (let i = 0; i < n; i++) {
    let string = '';
    for (let k = i + 1; k < n; k++) {
      string += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      string += '*';
    }
    console.log(string);
  }
};

fullPyramid(5);
