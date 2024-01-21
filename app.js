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

  
  function sortByMultipleCriteria(people) {
    // Sorting by age in ascending order, and then by name in ascending order
    people.sort((a, b) => {
      // First, compare by age
      if (a.age !== b.age) {
        return a.age - b.age;
      }
      // If ages are equal, compare by name
      return a.name.localeCompare(b.name);
    });
  
    // The array is now sorted by age and then by name
    return people;
  }
  
  const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 25 },
  ];
  
  const sortedPeople = sortByMultipleCriteria(people);
  console.log(sortedPeople);
  
  // Expected outcome: [
  //  { name: 'Bob', age: 25 },
  //  { name: 'David', age: 25 },
  //  { name: 'Alice', age: 30 },
  //  { name: 'Charlie', age: 35 }
  // ]
  
  
  function calculateTotalPrice(products) {
    return products.map(product => ({
        name: product.name,
totalPrice: product.quantity * product.price
    }))
  
  }
  
  const products = [
    { name: 'Apple', price: 1.5, quantity: 3 },
    { name: 'Banana', price: 0.75, quantity: 5 },
    { name: 'Orange', price: 1.25, quantity: 2 },
  ];
  
  const totalPrice = calculateTotalPrice(products);
  console.log(totalPrice)
  
  
  
//   Write a function called **`calculateTotalPrice`** that calculates the total price for each product in an array of objects representing products, where each object has a **`name`** (string), **`price`** (number), and **`quantity`** (number) property. The function should return a new array containing objects with the **`name`** and **`totalPrice`** properties, where **`totalPrice`** is the result of multiplying the **`price`** with the **`quantity`** for each product.
  
  
  