var mid = 213;
var low = 1;
var high = 50;
var current = 213;
var found = -1;

if (current < mid) {
 mid = (current-low) / 2;
 console.log(mid);
}
else if (current > mid) {
 mid = (current+high) / 2;
 console.log(mid);
}
else{
    found = current
    console.log(found);
}
