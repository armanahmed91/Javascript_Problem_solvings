/* Write a JavaScript program where the program takes a random integer between 1 and 10, and the user  is then  prompted to input a guess Number. The program displays a  message "Good Work" if the  input matches the guess number otherwise "Not matched". */

//  Get a random integer from 1 to 10 inclusive

const num = Math.ceil(Math.random() * 10);
document.getElementById("pnum").innerText = num;

const gnum = prompt("Guess the number between 1 and 10 inclusive");

if (gnum == num){
    document.getElementById("gnum").innerText = "Matched";
}
else{
    document.getElementById("gnum").innerText = "Not Matched, the number was " + gnum;
}
