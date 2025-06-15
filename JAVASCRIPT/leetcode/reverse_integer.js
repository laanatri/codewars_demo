// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1

// My solution :

const checkIf32Bit = (number) => {
    return number > Math.pow(-2, 31) && number < Math.pow(2, 31) ? true : false
}

const reverseString = (string) => {
    return string.split("").reverse().join("")
}

const reverse = (x) => {
    let reverseX = x.toString();
    if (x < 0) {
        const negatif = parseInt("-" + reverseString(reverseX.replace("-", "")))
        return checkIf32Bit(negatif) ? negatif : 0
    }
    const positif = parseInt(reverseString(reverseX)) 
    return checkIf32Bit(positif) ? positif : 0
};