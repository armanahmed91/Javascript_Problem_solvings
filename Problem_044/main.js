/* 
Write a JavaScript program to check from three given integers whether a number is greater than or equal to 20. It is less than the others.
*/

function lessby20_others(x, y, z){
    return (x >= 20 && (x < y || x < z)) || (y >= 20 && (y < x || y < z)) || (z >= 20 && (z < x || z < y));
}

console.log(lessby20_others(23, 45, 10));
console.log(lessby20_others(23, 23, 10));
console.log(lessby20_others(21, 66, 75));