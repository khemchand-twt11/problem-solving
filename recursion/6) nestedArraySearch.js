/*
  Given a nested array with unknown depth, check if an element is present in that array or not

*/

let arr = [1, 2, [[[6], 7]]]
let k = 6

function checkElement(arr, k) {
  if (arr === k) return true
  let output = false

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) return true
    if (Array.isArray(arr[i])) {
      output = checkElement(arr[i], k)
    }
  }

  return output
}

let res = checkElement(arr, k)
console.log(res)
