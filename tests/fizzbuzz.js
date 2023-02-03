// This file has 12 lines total

/**
 * Takes in an integer value and returns the fizzbuzz value for that number.
 * Fizz means divisible by 3, buzz means divisible by 5, and neither just returns the number
 * as a string.
 */
function fizzbuzz(n) {
   if (n % 15 === 0) {
      return "fizzbuzz";
   }
   if (n % 3 === 0) {
      return "fizz";
   }
   if (n % 5 === 0) {
      return "buzz";
   }
   return n.toString();
}
