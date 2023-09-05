// Write a javaScript program to find out if 1st January will be a Sunday between 2014 to  2050.

for (let year = 2014; year <= 2050; year++){
    const d = new Date(year, 0, 1);
    if (d.getDay() === 0){
        console.log(`1st January is being a Sunday ${year}`);
    }
}