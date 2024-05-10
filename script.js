function firstNonRepeatedChar(str) {
 // Create an object to store the count of each character
  const charCount = {};

  // Iterate through the string and count the occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the string again to find the first non-repeated character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char; // Return the first non-repeated character
    }
  }

  // If all characters are repeated or the string is empty, return null
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
