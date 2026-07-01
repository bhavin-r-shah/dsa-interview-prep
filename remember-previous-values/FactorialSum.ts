/**
 * Problem:
 * Write a prgram to give sum of the factorial of each number upto n. n is given by user.
 * e.g. if n = 4, then return sum = 4! + 3! + 2! + 1!
 */

/**
 * Questions:
 * 1. If user enters a string, shall we throw error?
 * 2. Is n a +ve intteger? If not how to handle a -ve integer or or a floating number?
 * 3. If n = 0, return 0 or error?
 * 4. What is the range of n? JS max integer is 2^53 - 1 i.e. Number.MAX_SAFE_INTEGER
 * Factorial of higher numbers can go beyond Number.MAX_SAFE_INTEGER. So should we limit n to saffe integer or use BinInt?
 * 
 * Assumptions:
 * n is a positive integer with max value being Number.MAX_SAFE_INTEGER.
 */

/**
 * Pattern: Remember previous loop values to calculate the next loop value.
 * 
 * Pseudo Code:
 * 1. Take input number from user and covert it to Number.
 * 2. If the number is not a +ve integer greater than 0, print error message and exit.
 * 3. Else move to mext steps.
 * 4. Initialize 2 variables: sum to 0 and previousFactorial to 1.
 * 5. Run a loop from i = 1 to i = n and increment i by 1 in each run
 * 6. In each run:
 *      6.1 Set prevFact = prevFact * i;
 *      6.2 Set sum = sum + prevFact;
 * 7. After the loop ends, print sum. That is the required output.
 * 
 * Time Complexity: O(n) since we are running a loop from n to 1.
 * Space Complexity: O(1) since we are using only constant space to store sum and prevFact.
 */

import readline from "readline";

const rI = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rI.question("Enter a +ve integer\n", (n: string) => {
    const num = Number(n);
    // if (isNaN(Number(n)) || Number(n) === 0) { // Misses 2 cases: n is -ve and n is a floating number.
    if (!Number.isInteger(num) || num < 1) {
        console.error('Error: Input should be a +ve integer greater than 0');
        rI.close();
        return;
    }
    // Get factorial sum
    console.log(`Sum of factorial of all numbers upto ${n} is ${getFactorialSum(num)}`);
    rI.close();
});

const getFactorialSum = (n: number) => {
    let sum = 0, prevFact = 1;
    for (let i = 1; i <= n; i++) {
        prevFact = prevFact * i;
        sum = sum + prevFact;
    }
    return sum;
}

/**
 * 
 * If n value can go above Number.Max_SAFE_INTEGER i.e. 2^53 - 1,
 * use bigint data type.
 * 3 ways to create a bigint:
 * 1. By appending n with n. E.g. 123n is a bigint.
 * 2. By using BigInt constructor. E.g. BigInt(123) is a bigint.
 * 3. By using BigInt function with string input. E.g. BigInt("123") is a bigint.
 * 
 * Note: bigint is Datatype and BigInt is a function to create bigint. 
 */
const getFactorialSumBigInt = (n: bigint) : bigint => {
    let sum = BigInt(0), prevFact = BigInt("1");
    for (let i = 1n; i <= n; i++) {
        prevFact = prevFact * i;
        sum = sum + prevFact;
    }
    return sum;
}