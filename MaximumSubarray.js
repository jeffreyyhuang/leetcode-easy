/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
 

Constraints:

1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

let maxSubArray = (nums) => {
  /*
  Input: An array of numbers
  Output: Largest sum out of all possible contiguous subarrays
  Constraints: O(N) time complexity
  Edge cases: Guaranteed that the input is an array of numbers

  1. Declare a variable that tracks largest current contiguous sum in iteration
  2. Declare a variable that tracks largest contiguous sum so far
  3. Traverse through input array and update each of the above 2 variables until the end
  */
  let maxSoFar = nums[0];
  let maxSum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    let sum = nums[i];
    let tempSum = sum + maxSoFar;
    
    maxSoFar = Math.max(sum, tempSum);
    maxSum = Math.max(maxSoFar, maxSum);
  }
  return maxSum;
}