/*
 The prime factors of 13195 are 5, 7, 13 and 29.

 What is the largest prime factor of the number 600851475143
 */

 // The number we want the largest prime factor of.
 let value = 600851475143;

 // Start checking factors from the smallest prime.
 let count = 2;
 // Track the largest prime factor found so far.
 let numHigh = 1;

 // Only need to check up to the square root of the remaining value.
 while (numHigh * numHigh <= value)
 {
    if (value % count === 0) {
        // count is a factor; record it and divide it out to keep factoring.
        numHigh = count;
        value /= count;
    } else {
        // Try the next possible factor.
        count++;
    }
 }

 // If a prime factor larger than sqrt remains, it is the largest.
 if (value > 1) {
    numHigh = value;
 }
console.log(numHigh);