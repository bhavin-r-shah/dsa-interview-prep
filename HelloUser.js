// const readLine = require("readline");

import readline from "readline";

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter you name:", (name) => {
    console.log("Hello " + name);
    r1.close();
});