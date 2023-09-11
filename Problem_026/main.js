/* 
Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.
*/

function test(str){
    if(str.length >= 3){
        str_len = 3;
        back = str.substring(str.length-3);
        return back + str + back;
    }
    else{
        return false;
    }
}

console.log(test("abc"));
console.log(test("ab"));
console.log(test("abcd"));