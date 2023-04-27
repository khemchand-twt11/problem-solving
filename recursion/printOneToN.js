/*

Given N, Print Numbers from 1 to N using 

this question can be solved using two ways 
i) first by talking intital values as 1 and then go from 1 to N 
ii) second approach is by using only N 

*/

// I) approach

function oneToN(i, n) {
  if (i > n) return;
  console.log(i);
  oneToN(i + 1, n);
}

oneToN(1, 5);

// II) approach

function oneToNSecond(N) {
  if (N < 1) return;
  oneToNSecond(N - 1);
  console.log(N);
}

oneToNSecond(5);
