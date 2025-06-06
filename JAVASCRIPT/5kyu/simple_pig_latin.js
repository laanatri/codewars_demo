function pigIt(str){
  const strArray = str.split(" ");
  strArray.map((word, i) => {
    strArray[i] = word.substring(1) + word.charAt(0) + (strArray[i].match(/^[.,:!?]/) ? "" : "ay");
  })
  return strArray.join(" ");
}