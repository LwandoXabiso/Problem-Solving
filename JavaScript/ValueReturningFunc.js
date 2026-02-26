function factorial(number )
{
    var product = 1;
    for(var i = number; i >= 1; --i){
        product *= i;
    }
    return product;

}
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(6));
console.log(factorial(8));
console.log(factorial(10));