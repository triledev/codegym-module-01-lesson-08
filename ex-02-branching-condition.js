const readline = require('node:readline');
const buffer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

buffer.question('What is the "official" name of Javascript?\n', handleInput);

function handleInput(ans) {

    findResult();
    buffer.close();

    function findResult() {
        if (ans == 'ECMAScript') {
            console.log("Right!");
        } else {
            console.log("You don't know ECMAScript!");
        }
    }
}