function EvenOdd1(num)
{
    
  if(num % 2 ===0)
  {
    console.log(" Number is even:");
  }else{
    console.log(" Number is odd");
  }
}
EvenOdd1(130)

function EvenOdd2(num){
    const rem = num % 2;
    if(rem === 0)
    {
        return "Even"
    }else{
        return "Odd"
    }
}
console.log(EvenOdd2(130))

function EvenOdd3(num)
{
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(EvenOdd3(11));