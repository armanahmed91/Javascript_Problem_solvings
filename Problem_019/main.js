function testHundred(x){
    return ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20));
}

console.log(testHundred(10));
console.log(testHundred(90));
console.log(testHundred(70));
console.log(testHundred(200));
console.log(testHundred(80));