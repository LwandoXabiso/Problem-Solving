// for(let i = 1; i <=100; i++)
// {
//     console.log(i);
// }

// Print the first 10 even numbers..
// for(let i = 2; i <= 100; i +=2){
//     console.log(i)
// }

// Palindrome
let word = "Lwando"
let reverseWord = ""

for(let pos = word.length - 1; pos >= 0; pos--)
{
    reverseWord = reverseWord + word[pos];
    
    console.log("Position", pos, "Character")
}
console.log(reverseWord);
if(word == reverseWord){
    console.log(word, "is a palindrome");
}else{
    console.log(word, "is not a palindrome");
}