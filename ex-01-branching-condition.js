const readline = require('readline');
const buffer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

buffer.question('Enter a year: ', handleInput);

function handleInput(year) {
    findResult();
    buffer.close();    

    // Internal helper function.
    function findResult() {
        debugger;
        let isLeapYear = false;
        

        let isDivisibleBy4 = year % 4 == 0;
        console.log("inspect isDivisbleBy4: " + isDivisibleBy4);
        if (isDivisibleBy4) {
            let isDivisibleBy100 = year % 100 == 0;
            console.log("inspect isDivisbleBy100: " + isDivisibleBy100);
            if (isDivisibleBy100) {
                let isDivisibleBy400 = year % 400 == 0;
                console.log("inspect isDivisbleBy400: " + isDivisibleBy400);
                if (isDivisibleBy400) {
                    isLeapYear = true;
                }
            } else {
                isLeapYear = true;
            }
        }

        if (isLeapYear) {
            console.log(year + " is a leap year");
        } else {
            console.log(year + " is NOT a leap year");
        }
    }
}