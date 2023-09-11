/* 
Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.
*/

function test(str){
    if(str.length < 4){
        return false;
    }
    front = str.substring(0, 4);
    if(front == 'Java'){
        return true;
    }
    else{
        return false;
    }
}

console.log(test("Javascript"));
console.log(test("Java"));
console.log(test("python"));