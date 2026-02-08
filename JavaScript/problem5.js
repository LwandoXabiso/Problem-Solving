/**
 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

 What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20

 #Answer: 232792560
 */

 let ans = 1;

 const gcd = (num1, num2) =>{
    if(num2 === 0) return num1
    return gcd(num2, num1 % num2)
 }

 for (let i = 2; i < 20; i++)
 {
    ans = ans * i / gcd(i, ans)
 }

 console.log(ans);