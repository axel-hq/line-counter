// This file has 12 lines of code

/**
 * Takes in an integer value and returns the fizzbuzz value for that number.
 * Fizz means divisible by 3, buzz means divisible by 5, and neither just returns the number
 * as a string.
 */
function fizzbuzz(n) {
	// Tabs are possible too
   
   // First we check divisible by 3 and divisible by 5.
   if (n % 15 === 0) {
      return "fizzbuzz"; // Case 1
   }
   
   // Then we check divisible by 3, not divisible by 5.
   if (n % 3 === 0) {
      return "fizz"; // Case 2
   }
   
   // Then we check not divisible by 3, though divisible by 5.
   if (n % 5 === 0) {
      return "buzz"; // Case 3
   }
   
   /* Otherwise, it's not divisible by 3 or 5. */
   return n.toString(); // Default case
}
