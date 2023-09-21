/*

         *  
        * *
       *   *
      *     *
     *********
    
*/

let n = 5;

const hollowFullPyramid = (n) => {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let k = i + 1; k < n; k++) {
      str += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      if (i === 0 || i === n - 1 || j === 0 || j == 2 * i) {
        str += '*';
      } else {
        str += ' ';
      }
    }
    console.log(str);
  }
};

hollowFullPyramid(n);
