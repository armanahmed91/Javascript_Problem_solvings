/* 
Write a JavaScript program to check a student's total marks in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. If the student gets an A+ grade, return true, otherwise return false.
*/

function exam_status(marks, exam){
    if(exam){
        return marks >= 90;
    }
    return (marks >= 90 && marks <= 100);
}

console.log(exam_status("78", " "));
console.log(exam_status("98", " "));
console.log(exam_status("95", "true"));