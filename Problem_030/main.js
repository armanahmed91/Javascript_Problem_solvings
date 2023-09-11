/* 
Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.
*/

function check_scrip(str){
    if (str.length < 6){
        return str;
    }
    let result_str = str;

    if(str.substring(10, 4) == 'Script'){
        result_str = str.substring(0, 4) + str.substring(10, str.length);
    }
    return result_str;
}

console.log(check_scrip("JavaScript"));
console.log(check_scrip("CoffeeScript"));