/*
Given an array fine the average of all contigous subarrays of size "k" in it

For an array of size n total number of subarrays of size k will be (n-k+1)

*/

/*Brute Force Approach*/
const arr = [1, 2, -1, 4, 5, 7, 8, 10];
const k = 3;
function averageOfSubarrayOfSizeK(arr, k) {
  const result = [];
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    result[i] = sum / k;
  }
  return result;
}

const result = averageOfSubarrayOfSizeK(arr, k);

console.log(result);
/*
 Time Complexity: O(N*K)
 Space Complexity: O(N-K+1)
*/

/*

 Sliding Window Approach:

 In sum there are lot of overlapping elements for every subsequent subarray after the first subarray of size k we are just removing the element which is out of the window and adding the new element to the window
*/

function averageOfSubarrayOfSizeKOptimal(arr, k) {
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      result[windowStart] = windowSum / k;
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return result;
}
const newresult = averageOfSubarrayOfSizeKOptimal(arr, k);
console.log(newresult);

/*

*/
