const palindromes = function (str) {
    str = str.toLowerCase();
  
    // Declare variables to hold left and right indices
    let left = 0;
    let right = str.length - 1;
    
    // Loop through string from left and right, checking for equality
    while (left < right) {
      // If left character is not alphanumeric, move to next character
      if (!str[left].match(/[a-z0-9]/i)) {
        left++;
      }
      // If right character is not alphanumeric, move to previous character
      else if (!str[right].match(/[a-z0-9]/i)) {
        right--;
      }
      // If left and right characters are alphanumeric and not equal, return false
      else if (str[left] !== str[right]) {
        return false;
      }
      // Otherwise, move to the next pair of characters
      else {
        left++;
        right--;
      }
    }
    
    // If we've reached the end of the loop, the string is a palindrome
    return true;
};

// Do not edit below this line
module.exports = palindromes;
