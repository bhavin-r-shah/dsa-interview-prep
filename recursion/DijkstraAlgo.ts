/**
 * Given 2 numbers, find their greatest common divisor (GCD) using Dijkstra's algorithm.
 */

/**
 * Fact:
 * Dijkstra's Algo:
 * 1. If both numbers are equal, that is the G.C.D.
 * 2. If not, subtract smaller number from the greater number.
 * 3. Replace the greater number by the difference.
 * 4. Repeat the process until both numbers are equal.
 */

/**
 * Time Complexity:
 * Best Case: O(1)
 * If both numbers are equal, then we can directly return the GCD without any iterations.
 * 
 * Worst Case: O(max(a, b))
 * For e.g. if a = 100 and b = 1, then we will have to do 99 iterations to get the GCD.
 * 
 * Space Complexity: O(max(a,b))
 * The recursive function will be called at most max(a,b) times.
 * So call stack will be at most max(a,b), so space complexity is O(max(a,b)).
 */

import readlinePromise from "readline/promises";
import {stdin as input, stdout as output} from "process";

const rpi = readlinePromise.createInterface({input, output});

const num1 = Number(await rpi.question("Enter the first number\n"));
const num2 = Number(await rpi.question("Enter the second number\n"));

if (num1 <= 0 || num2 <= 0) {
    console.log("Error: Please enter positive integers only");
    rpi.close();
    process.exit(0);
}

const getGCD = (a: number, b: number): number => {
    if (a === b) {
        return b;
    } else {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
        return getGCD(a, b);
    }
}

console.log(`GCD of ${num1} and ${num2} using Dijkstra's algorithm = ${getGCD(num1, num2)}`);

rpi.close();