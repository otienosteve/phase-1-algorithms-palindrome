function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  I am going to take a string convert it into an array and reverse the array after trhat I am going to convert that array onto a string

*/

// You can run `node index.js` to view these console logs



function isPalindrome(str){
var palindrome=str.split('').reverse().join('')
return palindrome===str
}
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
