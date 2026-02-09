// function isLeapYear(inputYear)
// {
//     if(inputYear <= 0){
//         throw new Error("Year cannot be zero or negative");
//     }
//   if(inputYear % 4 === 0 && inputYear % 100 !== 0)
//   {
//     console.log(inputYear + " : Is a Leap Year")
//   }
//   else if(inputYear % 4 === 1)
//     console.log(inputYear + " : Is not a Leap Year");
// }
// isLeapYear(2000);

//My function
function isLeapYear2(inputYear)
{
    if(inputYear <= 0){
        throw new Error("Year cannot be zero or negative");
    }

    if(inputYear % 400 === 0)
    {
        return true;
    }else if(inputYear % 100 === 0)
    {
        return false;
    }
    else if(inputYear % 4 === 0)
    {
        return true
    }
    else
        return false;
}
console.log(isLeapYear2(2100));

//New function
function isLeapYear(inputYear){
    if(inputYear % 4 === 0)
    {
        return true;
    }
    else
        return false;
}
console.log("New function for leap year:")
console.log(isLeapYear(2100))

// Optimized Function
function isLeapYear3(inputYear) {
    if (inputYear <= 0) {
        throw new Error("Year must be a positive number");
    }

    return (inputYear % 400 === 0) ||
           (inputYear % 4 === 0 && inputYear % 100 !== 0);
}
console.log("Optimized Code for leap year")
console.log(isLeapYear3(2100));

// YouTube comments function
function isLeapYear4(year){
    if((year % 4 === 0 && year % 100 !== 0)|| (year % 400 === 0)){
        return true
    }
    return false
}
console.log("Functrion from YouTube Comments");
console.log(isLeapYear4(2100));
