//This iterate over the numbers

function Factorial(inputNum)
{

    if(inputNum < 0)
    {
        throw new Error("Number should be greater than or equal to Zero");
    }
 
    let result  = 1;
    for( i = 1; i <= inputNum; i++)
    {
        result = result * i;
        // console.log(i)
        
    }
    return result;
}

console.log("The normal Factorial Function")
console.log(Factorial(10))

//This is the recursion method

function Factorial2(inputNum)
{
    if(inputNum < 0)
    {
        throw new Error("Number should be greater than or equal to Zero");
    }

    if(inputNum === 0 || inputNum === 1)
    {
        return 1;
    }

    return inputNum * Factorial2(inputNum - 1)

}
console.log("Recursive Factorial function")
console.log(Factorial2(9))