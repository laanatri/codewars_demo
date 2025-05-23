// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// My solution :

function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0;
  input?.forEach(element => element > 0 ? count += 1 : sum += element);
  return count === 0 && sum === 0 ? [] : [count, sum];
};