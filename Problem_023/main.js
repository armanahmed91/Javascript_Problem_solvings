/* 
Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.
*/

function first_last(str){
    if(str.length <= 1){
        return str;
    }
    mid_Char = str.substring(1, str.length - 1);
    return (str.charAt(str.length - 1)) + mid_Char + str.charAt(0);
}
console.log(first_last("arman"));
console.log(first_last("amin"));
console.log(first_last("jaman"));