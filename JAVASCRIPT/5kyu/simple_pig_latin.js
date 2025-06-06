// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// My solution :

function pigIt(str){
  //Code here
  const strArray = str.split(" ");
  strArray.map((word, i) => {
    const firstLetter = word.charAt(0);
    strArray[i] = word.substring(1) + firstLetter;
  })
  return strArray.join("ay ") + "ay";
}