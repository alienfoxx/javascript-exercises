const reverseString = function(str) {
const arrayStrings = str.split("");
const reversingArray = arrayStrings.reverse();
const joinArray = reversingArray.join("");

return joinArray;
};


// Do not edit below this line
module.exports = reverseString;
