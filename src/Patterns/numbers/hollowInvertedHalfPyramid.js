/*

12345
2  5
3 5
45
5

*/
let n = 5;
const hollowInvertedHalfPyramid = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = i; j <= n; j++) {
      if (i === 1 || i === n || j === i || j === n) {
        str += j;
      } else {
        str += ' ';
      }
    }
    console.log(str);
  }
};
hollowInvertedHalfPyramid(n);
