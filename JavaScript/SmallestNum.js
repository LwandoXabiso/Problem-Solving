function SmallNum(a, b, c)
{
    if(a < b && a < c){
        return a;
    }else if(b < a && b < c){
        return b;
    }else if(c < a && c < b){
        return c;
    }

    return a, b, c;
}
console.log("Smalest number from 25, 49, 89 is: ", SmallNum(25, 49, 89));
console.log("Smalest number from 30, -49, 89 is: ", SmallNum(30, -49, 89));

console.log("Smalest number from 25, 25, 25 is: ", SmallNum(25, 25, 25));


function SmallNum2(a, b, c)
{
    let smallest = a < b ? (a < c ? a : c) : (b < c ? b : c);
    return smallest;
}
console.log(SmallNum2(4, 9, -123));

function SmallNum3(a, b, c)
{
    let smallnum = a;
    if(b < smallnum)
        smallnum = b;
    if(c < smallnum)
        smallnum = c;

    return smallnum
}

console.log(SmallNum3(-450, 400, -300))