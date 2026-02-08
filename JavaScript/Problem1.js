/*
 If we list all natural numbers below 10 that are multiples of 3 or 5 we get 3, 5, 6, 9.
 The Sum of these multiples is 23.

 Find the sum of all the  multiples of 3 or 5 below 1000
*/

let n = 1;
let sum = 0;

while(n < 1000)
{
    if(n % 3 == 0 || n % 5 ==0){
        sum += n;
    }
    n++;

}
console.log("The sum of all multiple of 3 or 5 below 1000 is: " + sum);