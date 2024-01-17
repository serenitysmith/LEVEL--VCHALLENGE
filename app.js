function filterAnagrams(arr, target) {
    //   filterAnagrams is the main function that takes an array arr and a target word target as parameters.

    // Helper function to check if two words are anagrams

    //Inside filterAnagrams, there's a helper function areAnagrams that checks if two words are anagrams. It does this by splitting the words into arrays of characters, sorting those arrays, and then joining them back into strings. If the resulting strings are equal, the words are anagrams.
    function areAnagrams(word1, word2) {
      return word1.split('').sort().join('') === word2.split('').sort().join('');
    }
  
    // Filter the array to keep only the anagrams of the target word
    return arr.filter(word => areAnagrams(word, target));
  }
  //   The main function then uses the filter method on the input array arr to keep only the words that are anagrams of the target word. It uses the areAnagrams helper function for this comparison.
  
//   Finally, the function returns the array of anagrams.
  const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
  const target = 'enlist';
  
  const anagrams = filterAnagrams(words, target);
  console.log(anagrams); // Output: ['listen', 'silent']

  

  

  
  
  
  
  
  
  