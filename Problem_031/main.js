/* 
Write a JavaScript program to find the largest of three given integers.
*/

function max_number(x, y, z){
    max_val = 0;
    if(x > y){
        max_val = x;
    }
    else{
        max_val = y;
    }
    if(z > max_val){
        max_val = z;
    }
    return max_val;
}

console.log(max_number(1, 0, 1));
console.log(max_number(0, -10, -20));
console.log(max_number(1000, 510, 450));