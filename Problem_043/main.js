/* 
Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
*/

function same_last_digit(x, y, z){
    return(x % 10 === y % 10) || (x % 10 === z % 10) || (y % 10 === z % 10);
}

console.log(same_last_digit(22, 32, 42));
console.log(same_last_digit(102, 302, 2));
console.log(same_last_digit(20, 22, 45));