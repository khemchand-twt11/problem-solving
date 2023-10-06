/*
Given n create half pyramid of numbers as mentioned below

1
12
123
1234
12345

*/
let n = 6;

const halfPyramid = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    console.log(str);
  }
};

halfPyramid(n);
