function SumDigits(inputNum)
{
    if(inputNum < 1)
    {
        throw new Error ("Input number must be a positive..")
    }

    const inputAsString = inputNum.toString();
    const splittedInput = inputAsString.split('');
    console.log(splittedInput);
    let sumOfDigit = 0;
    splittedInput.forEach(num => {
        console.log(parseInt(num));
        sumOfDigit = sumOfDigit + parseInt(num);
    })
    return sumOfDigit;

}
console.log("The sum of digits is : ", SumDigits(2456));