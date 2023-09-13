/* 
Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.
*/

function valCheck(x, y){
    if(!((x % 7 == 0 || x % 11 == 0) && (y % 7 == 0 || y % 11 == 0))){
        return ((x % 7 == 0 || x % 11 == 0) || (y % 7 == 0 || y % 11 == 0));
    }
    else
    return false;
}

console.log(valCheck(14, 21));
console.log(valCheck(14, 20));
console.log(valCheck(16, 20));