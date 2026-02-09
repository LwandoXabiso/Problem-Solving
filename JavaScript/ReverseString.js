function Reverse(inputString)
{
    if( typeof inputString !== 'string'){
        throw new Error ("Only string are allowed as input");
    }
    let result = ""
    for(let i = inputString.length - 1; i >= 0; i--){
        // result = result + inputString[i];
        result += inputString[i];
        
    }
    return result;
}
console.log("ReverseString 1 !!");

console.log(Reverse("Lwando is a Software Developer"));
console.log(Reverse("Lwando"));
console.log(Reverse("Lwando is a Software Developer"));

//Different method of doing it...
function Reverse2(inputString)
{
    const splittedInput = inputString.split('');
    const reverseArray = splittedInput.reverse(); 
    const result = reverseArray.join('');
    // console.log(splittedInput);
    console.log(reverseArray)
    console.log(result);
}
console.log("ReverseString 2 !!");

console.log(Reverse2("Lwando"));
// console.log(Reverse2("Lwando is a Software Developer"));