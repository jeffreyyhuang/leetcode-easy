/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1) Open brackets must be closed by the same type of brackets.
2) Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 

Constraints:

1 <= s.length <= 10^4
s consists of parentheses only '()[]{}'.

*/

let isValid = (s) => {
  let tracker = [];
  let closers = {
    "(": ")",
    "[": "]",
    "{": "}"
  }

  for (let i = 0; i < s.length; i++) {
    if (closers[s[i]]) {
      tracker.push(closers[s[i]])
    } else {
      if (tracker.pop() !== s[i]) {
        return false;
      }
    }
  }
  
  if (tracker.length > 0) {
    return false;
  }
  return true
}