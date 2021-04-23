/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
 

Constraints:

-2^31 <= x <= 2^31 - 1

*/

var reverse = function(x) {
  let isNegative = false;
  if (x < 0) {
    isNegative = true;
    x = Math.abs(x);
  }


  let stringify = x.toString();
  let reverse = '';
  for (let i = stringify.length - 1; i >= 0; i--) {
    reverse += stringify[i];
  }

  let result = Number(reverse);
  if (isNegative) {
    result *= -1;
  }

  if (result > (2 ** 31 - 1) || result < (-2) ** 31) {
    return 0;
  } else {
    return result;
  }
}