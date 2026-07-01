/**
 * Given 2 numbers, find their greatest common divisor (GCD) using Euclid's algorithm.
 */

/**
 * Fact:
 * Euclid's Algo:
 * 1. Divide the 2 numbers a and b and get the remainder.
 * 2. If remainder is 0, return b. B is the GCD of a and b.
 * 3. Else,
 *    3.1 Set a = b
 *    3.2 Set b = remainder
 *    3.3 Go to step 1.
 */

/**
 * Time Complexity:
 * Best Case: O(1)
 * If a is divisible by b, then we will get remainder as 0 in the first step and return b as GCD.
 * e.g. a = 135, b = 1.
 * 
 * Average Case: O(log(min(a, b)))
 * In each step, we are dividing the larger number by the smaller number.
 * When b >= 2, we are reducing the larger number by at least half,
 * so the number of steps is proportional to the logarithm of the smaller number.

* Worst Case: O(log(min(a, b)))
 * The worst case occurs when a and b are consecutive Fibonacci numbers.
 * 
 * Space Complexity: O(log(min(a, b)))
 * The maximum depth of the call stack is proportional to the logarithm of the smaller number.
 */

import readlinePromise from "readline/promises";
import {stdin as input, stdout as output} from "process";

const rpi = readlinePromise.createInterface({input, output});

const num1 = Number(await rpi.question("Enter the first number\n"));
const num2 = Number(await rpi.question("Enter the second number greater than 0\n"));

if (num2 === 0) {
    console.error("Error: Second number cannot be 0");
    rpi.close();
    process.exit(1);
}
const getGCD = (a: number, b: number): number => {
    const remainder = a % b;
    if (remainder === 0) {
        return b;
    } else {
        a = b;
        b = remainder;
        return getGCD(a, b);
    }
}

console.log(`GCD of ${num1} and ${num2} using Euclid's algorithm = ${getGCD(num1, num2)}`);

rpi.close();