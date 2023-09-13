/* 
Write a JavaScript program to check whether a given number exists in the range 40..10000.
For example 40 presents in 40 and 4000.
*/

function test_digit(x, y, n){
if(n < 40 || n > 10000){
    return false;
}
else if(n >= x && n <= y){
    return true;
}
else 
return false
}

console.log(test_digit(40, 4000, 45));  
console.log(test_digit(80, 320, 79));  
console.log(test_digit(89, 4000, 30));