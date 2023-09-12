/* 
Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.
*/

function check_char(str, char){
    ctr = 0;
    for(let i = 0; i < str.length; i++){
        if((str.charAt(i) == char) && (i >= 1 && i <= 3)){
            ctr = 1;
            break;
        }
    }
    if(ctr == 1) return true;
    return false;
}

console.log(check_char("Python", "y"));
console.log(check_char("JavaScript", "a"));
console.log(check_char("JavaScript", "s"));
console.log(check_char("Console", "o"));
console.log(check_char("Console", "C"));