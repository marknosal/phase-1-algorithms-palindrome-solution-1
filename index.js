function reverseString(word) {
  const reversedWord = word.split('').reverse().join('')
  return reversedWord
}

function isPalindrome(word) {
  const reversedWord = reverseString(word)
  return word === reversedWord
}

/* 
  Add your pseudocode here
  reverse the word
  function reverseWord(word)
  return true if word === reversed word
  if (word === reversed word) {return true}
  return false if word !== reversed word
  else {return false}
*/

/*
  Add written explanation of your solution here
  reverse the word
  return true if word === reversed word
  return false if word !== reversed word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
