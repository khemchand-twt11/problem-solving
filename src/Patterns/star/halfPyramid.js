/*
 Given n make a half pyramid 
*
**
***
****
*****
*/
let n = 5;

function halfPyramid(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
      str += '*';
    }
    console.log(str);
  }
}

halfPyramid(n);

/*
n  = 5 so 5 rows total and each row will have that number of starts
*
**
***
****
*****
*/
