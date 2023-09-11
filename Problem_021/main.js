/* Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string. */

function string_check(str){
    if (str === null || str === undefined || str.substring(0, 2) == 'Py'){
        return str;
    }
    return `Py${str}`;
}

console.log(string_check("Python"));
console.log(string_check("thon"));