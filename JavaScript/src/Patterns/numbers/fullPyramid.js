/*
    1
   232
  34543
 4567654
567898765

*/

let n = 5;

const fullPyramid = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = '';
    //spaces
    for (let j = 1; j <= n - i; j++) {
      str += ' ';
    }

    for (k = i; k <= 2 * i - 1; k++) {
      str += k;
    }

    for (l = 2 * i - 2; l >= i; l--) {
      str += l;
    }
    console.log(str);
  }
};
fullPyramid(n);
