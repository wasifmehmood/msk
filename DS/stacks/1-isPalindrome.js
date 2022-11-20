// Example
// 1: Find words that are Palindrome(A word that is spelled the same forwards and backwards i.e BOB, Racecar)

function isPalindrome(word) {
  let letters = [];

  let rword = "";

  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
  }

  if (word === rword) return true;
  else return false;
}

let word = 'racecar';

console.log(`${word} is a Palindrome`, isPalindrome(word));