/**
 Multiply a given number by 8 if it is even and by 9 if otherwise
 */

let number = 150;
let result;

if (number % 2 === 0) {
    result = number * 8;  // Even: multiply by 8
} else {
    result = number * 9;  // Odd: multiply by 9
}

console.log(result);