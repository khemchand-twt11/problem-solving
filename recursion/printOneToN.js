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

/*
Brekdown 

I)

function oneToNSecond(5) {
  if (5 < 1) return;
  oneToNSecond(5 - 1); //4
  console.log(5);
}

II)
function oneToNSecond(4) {
  if (4 < 1) return;
  oneToNSecond(4- 1); //3
  console.log(4);

III) 
function oneToNSecond(3) {
  if (3 < 1) return;
  oneToNSecond(3- 1); //2
  console.log(3);
}

IV)
function oneToNSecond(2) {
  if (2 < 1) return;
  oneToNSecond(2- 1); //1
  console.log(2);
}

V)
function oneToNSecond(1) {
  if (1 < 1) return;
  oneToNSecond(1- 1); //0
  console.log(1);
}

VI)

function oneToNSecond(0) { 
  if (0 < 1) return; //condition met return
  oneToNSecond(1- 1); //0
  console.log(1);
}


*/
