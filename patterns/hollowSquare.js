/*
Hollow Square
*****
*   *
*   *
*   *
*****

*/
let n = 5;

// function printWhole(n) {
//   let str = '';
//   for (let index = 0; index < n; index++) {
//     str += '*';
//   }
//   console.log(str);
// }

// function startWithSpace(n) {
//   let str = '';
//   for (let index = 0; index < n; index++) {
//     if (index !== 0 && index !== n - 1) {
//       str += ' ';
//     } else {
//       str += '*';
//     }
//   }
//   console.log(str);
// }
const hollowSquare = (n) => {
  // for (let index = 0; index < n; index++) {
  //   if (index !== 0 && index !== n - 1) {
  //     startWithSpace(n);
  //   } else {
  //     printWhole(n);
  //   }
  // }
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
        str += '*';
      } else {
        str += ' ';
      }
    }
    console.log(str);
  }
};
hollowSquare(n);

let arr = [10, 100, 500, 20, 35, -1, -233, 10833];

arr.forEach((item) => {
  setTimeout(() => console.log(item), item);
});
// 10 20 35 100 500
