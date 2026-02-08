/*
 A palindromic number reads the same both ways. 
 The largest palindrome made from the product of two 2-digit number is 9009 = 19*99.

 Find the largest palindrome made from the product of two 3-digit number.
 #Answer: 906609
 */

let numMax = 0;

// Check if a number reads the same forwards and backwards
const isPalindrome = num => {
    const str = String(num);
    return str === str.split('').reverse().join('');
}

// Start from 999 and work downwards
for (let i = 999; i >= 100; i--) {
    // Start j from i to avoid checking duplicates (e.g., 999×998 and 998×999)
    for (let j = i; j >= 100; j--) {
        const product = i * j;
        
        // If product is already smaller than our max, no point continuing this inner loop
        if (product <= numMax) break;
        
        if (isPalindrome(product)) {
            numMax = product;
        }
    }
}

console.log(numMax);