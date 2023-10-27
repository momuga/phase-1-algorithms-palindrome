
  const text = "abba" //can be changed to racecar, a, robot, ab

  function isPalindrome(word) {
    
    wordArray = word.split("");

    inverseArray = wordArray.reverse();

    word2 = inverseArray.join("");

    if (word.equals(word2))
    {
      return true;
    }
    else
    {
      return false;
    }

  }

  isPalindrome(text);

/* 
  Add your pseudocode here

  INIT text
  CALL isPalindrome with word
  INIT wordArray
  CALL split with word RETURNING wordArray
  INIT inverse ARRAY
  CALL reverse with wordArray RETURNING inverseArray
  INIT word2
  CALL join with inverseArray RETURNING word2
  IF word == word2 THEN
  SET true
  ELSE
  SET false
  END IF
*/

/*
  Add written explanation of your solution here

  The application first parses the desired word through the function
  The desired word is split into an array
  The array is then reversed
  The array is then merged into a string which is the reverse of the word
  A boolean is then performed to check whether the strings are the same to determine whether the word is a palindrome

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
