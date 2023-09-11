/* 
Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.
*/

function check_number(x, y) {
    if((x >= 50 && x <= 99) || (y >= 50 && y <= 99)){
        return true;
    }
    else{
        return false;
    }
}

console.log(check_number(12, 101));
console.log(check_number(52, 80));
console.log(check_number(15, 99));