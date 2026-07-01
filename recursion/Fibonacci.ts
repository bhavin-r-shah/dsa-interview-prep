/**
 * Program to get Fibonacci number of a given positive integer using recursion
 */

/** 
 * Fact:
 * Fibonacci sequence is a series of numbers where a number
 * is the sum of the two preceding ones, usually starting with 0 and 1.
 * Index:  0 1 2 3 4 5 6 7  8  9  10 11 12  ...
 * Series: 0 1 1 2 3 5 8 13 21 34 55 89 144 ...
 * fibonacci(0) = 0
 * fibonacci(1) = 1
 * fibonacci(2) = 1 = 1 + 0 = fibonacci(1) + fibonacci(0)
 * fibonacci(3) = 2 = 1 + 1 = fibonacci(2) + fibonacci(1)
 * fibonacci(4) = 3 = 2 + 1 = fibonacci(3) + fibonacci(2)
 * fibonacci(5) = 5 = 3 + 2 = fibonacci(4) + fibonacci(3)
 * and so on...
 */

/**
 * Time Complexity: O(2^n)
 * fibonacci(5)
   ├── fibonacci(4)
   │   ├── fibonacci(3)
   │   │   ├── fibonacci(2)
   │   │   ├── fibonacci(1)
   │   └── fibonacci(2)
   └── fibonacci(3)
       ├── fibonacci(2)
       └── fibonacci(1)
 * fibonacci(3), fibonacci(2), fibonacci(1) are calculated again and again.
    This causes exponential time.
 *
 * Space Complexity: O(n)
 * Recursion call stack looks like:
 * fibonacci(n)
   fibonacci(n - 1)
   fibonacci(n - 2)
   ...
   fibonacci(1)
* Max call stack depth is n, so space complexity is O(n)
 */

import readlinePromise from "readline/promises";
import {stdin as input, stdout as output} from "process";

const rpi = readlinePromise.createInterface({input, output});

const num = Number(await rpi.question("Enter a +ve integer to find its fibonacci number\n"));

const getFibonacci = (num: number): number => {
    if (num === 0  || num === 1) {
        return num;
    } else {
        return getFibonacci(num - 1) + getFibonacci(num - 2);
    }
}

console.log(`Fibonacci of number ${num} = ${getFibonacci(num)}`);

rpi.close();