/**
 * Problem: Given a +ve integer n, print the fibonnacci series upto n.
 */

/**
 * Questions:
 * Nil
 * 
 * Assumptions:
 * Nil
 * 
 * Fact:
 * In a Fibonaci series each number is the sum of the previous 2 numbers in the series,
 * starting from 0 and 1.
 */

/**
 * Pseudo Code:
 * 1. Take n from user and convert it to number.
 * 2. Input Validation:
 *     2.1 If n is not a +ve integer, throw error and exit.
 * 3. Initialize 2 variables called nMinus1 and nMinus2.
 * 4. Run a for loop where i starts from 0 to n and increment i by 1 in each run.
 * 5. Exception:
 *     5.1 If i is 0, print 0 and set nMinus1=0 & nMinus2 = 0.
 *     5.2 If i is 1, print 1 and set nMinus1 = 1 & nMinus2 = 0.
 * 5. In each run except the exception cases above, do the following:
 *     5.1 print the output = nMinus1 + nMinus2
 *     5.2 Set nMinus1 and nMinus2 for the next iteration. For the next iteration,
 *       nMinus2 = current nMinus1 and nMinus1 = current output.
 */

/**
 * Time Complexity: O(n) since we are running a loop from 0 to n.
 * Space Complexity: O(1) since we are using only constant space to store nMinus1 and nMinus2.
 */

import readline from "readline";

const rI = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rI.question("Enter a +ve integer\n", (n: string) => {
    const num = Number(n);
    if(Number.isInteger(num) && num >= 0) {
        let nMinus1 = 0, nMinus2 = 0;
        let series = "";
        for(let i = 0; i <= num; i++) {
            if (i==0) {
                series = `0`;
            } else if (i == 1) {
                series = `${series} 1`;
                nMinus1 = 1;
                nMinus2 = 0;
            } else {
                const output = nMinus1 + nMinus2;
                series = `${series} ${output}`;
                nMinus2 = nMinus1;
                nMinus1 = output;
            }
        }
        console.log(series);
    } else {
        console.error("Error: input should be a +ve integer");
    }
    rI.close();
});

