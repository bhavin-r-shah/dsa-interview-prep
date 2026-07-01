/** 
 * This program prints a pattern of stars in a right-angled triangle form.
 * The number of rows is determined by the user input.
 */
// else.g. For n = 5, the pattern filled with *` would be:
//     *
//    **
//   ***
//  ****
// *****
// Ascending order numbers pattern would be:
//     1
//    12
//   123
//  1234
// 12345

// Descending order numbers pattern would be:
//     1
//    21
//   321
//  4321
// 54321

import readline from "readline";

const rI = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rI.question("Enter a +ve integer greater than 0\n", (n: string) => {
    const num = Number(n);
    if(Number.isInteger(num) && num >= 1) {
        rI.question("Enter 1 to fill triangle with *, 2 to fill with ascending order numbers, 3 to fill with descending order numbers\n", (choice: string) => {
            if (num === 1) {
                console.log(`\nPattern:\n${choice === "1" ? "*" : "1"}`);
            } else {
                console.log("\nPattern:");
                for (let i = 1; i <= num; i++) {
                    let str = "";
                    let j = 1;;
                    for(j = 1; j <= num - i; j++) {
                        str = str + " ";
                    }
                    for (let k = j; k <= num; k++) {
                        switch(choice) {
                            case "1": // Fill with *
                                str = `${str}*`;
                                break;
                            case "2": // Fill with ascending order numbers
                                str = `${str}${k - j + 1}`;
                                break;
                            case "3": // Fill with descending order numbers
                                str = `${str}${num - k + 1}`;
                                break;
                        }
                        // str = `${str}${choice === "1" ? "*" : (choice === "2" ? (k - j + 1) : (num - k + 1))}`;
                    }
                    console.log(str);
                }
            }
            rI.close();
        });
    } else {
        console.error('Error: Input should be a +ve integer greater than 0');
        rI.close();
    }
});