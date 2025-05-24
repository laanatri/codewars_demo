// Complete the method so that it'll find the greatest product of five consecutive digits in the given string of digits.

// For example: the greatest product of five consecutive digits in the string "123834539327238239583" is 3240.

// The input string always has more than five digits.

// Adapted from Project Euler.

// My solution :

function greatestProduct(input) {
  let product = 0;
  for (let i = 0; i < input.length; i++) {
    let tempProduct = 0;
    tempProduct = input.charAt(i);
    for(let e = 1; e < 5; e++) {
      tempProduct *= input.charAt(i + e);
    }
    if (tempProduct > product) product = tempProduct;
  }
  return product;
}