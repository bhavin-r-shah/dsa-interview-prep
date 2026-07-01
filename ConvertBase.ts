/**
 * Given a number n and base b, convert that number to that base.
 * Bases:
 * Binary (base 2), Decimal (base 10)
 * Octal (base 8), Hexadecimal (base 16)
 */

//TODO: Input Validation

import readlinePromise from "readline/promises";
import { stdin as input, stdout as output } from "process";

// Interface interact with standard input and output via promises
const rpi = readlinePromise.createInterface({ input, output });

const numToHex = {
    10: 'A', 11: 'B', 12: 'C', 13: 'D', 14:'E', 15: 'F'
}

/**
 * Converts a decimal number to the required base.
 * If outputBase = 2, converts to binary
 * If outputBase = 8, converts to octal
 * If outputBase = 16, converts to hexadecimal
 * 
 * @param decimal Decimal number to be converted
 * @param outputBase Base to which the input number is to be conveted to
 * @returns Decimal number in the requested base
 */
const convertDecimal = (decimal: string, outputBase: string): string => {
    let output = '';
    let num = Number(decimal);
    let base = Number(outputBase);
    while (num !== 0) {
        let remainder = `${num % base}`;
        if (base === 16 && Number(remainder) >= 10) {
            remainder = numToHex[remainder];
        }
        output = `${remainder}${output}`;
        num = Math.floor(num / base); // IMP: Use Math.floor() else fraction will be used and logic will fail
    }
    return output;
}

/* Multiply each bit by its corresponding power of 2 
 * (starting at 2^0 for rightmost, 2^1 for next on left and so on..) 
 * and sum the results.
*/ 
const convertBinaryToDecimal = (arr: string[]): number => {
    let group = 0;
    for (let i = 1; i <= arr.length ; i++) {
        const product = Math.pow(2, arr.length - i) * Number(arr[i - 1]);
        group = group + product;
    }
    return group;
}

/**
 * Converts a binary number to the required base.
 * If outputBase = 10, converts to decimal
 * If outputBase = 8, converts to octal
 * If outputBase = 16, converts to hexadecimal
 * 
 * @param decimal Binary number to be converted
 * @param outputBase Base to which the input number is to be conveted to
 * @returns Binary number in the requested base
 */
const convertBinary = (binary: string, outputBase: string): string => {
    let output = '';
    const bitsArr = binary.split('');
    // For Decimal, entire binary has to be conveted to decimal
    if (outputBase === '10') {
        return `${convertBinaryToDecimal(bitsArr)}`;
    } else {
        /* For octal create groups of 3 binary bits, convert them to decimal
         and append to output string */
        /* For hexadecimal create groups of 4 binary bits, convert them to decimal and hex alphabet
         and append to output string */
        let groupLength = outputBase === '8' ? 3 : 4;
        let groupArr = [];
        // If we cannot break into equal groups of 3 / 4, then append 0 as leading bit
        while (binary.length % groupLength !== 0) {
            binary = `0${binary}`;
        }
        for (let i = 0; i < binary.length; i++) {
            groupArr.push(binary[i]);
            if ( (i + 1) % groupLength === 0) {
                const groupDecimal = convertBinaryToDecimal(groupArr);
                if (outputBase === '8') {
                    output =`${output}${groupDecimal}`;
                } else {
                    if (groupDecimal <= 9) {
                        output = `${output}${groupDecimal}`;
                    } else {
                        output = `${output}${numToHex[groupDecimal]}`;
                    }
                }
                groupArr = [];   
            }
        }
        return output;
    }
}

type UserInput = {
    number: string,
    inputBase: string,
    outputBase: string,
}
let userInput: UserInput = {};

// Wait for user to enter the number
userInput.number = await rpi.question("Enter a number\n");
// Wait for user to enter its current base
userInput.inputBase = await rpi.question("What is its current base? Enter 10 for decimal, 2 for binary, 8 for octal and 16 for hexadecimal\n");
// Wait for user to enter the output base
userInput.outputBase = await rpi.question("Which base do you want to convert it to? Enter 10 for decimal, 2 for binary, 8 for octal and 16 for hexadecimal\n");

if (userInput.inputBase === '10') {
    console.log(`Decimal number ${userInput.number} in base ${userInput.outputBase} = ${convertDecimal(userInput.number, userInput.outputBase)}`);
}

if (userInput.inputBase === '2') {
    console.log(`Binary number ${userInput.number} in base ${userInput.outputBase} = ${convertBinary(userInput.number, userInput.outputBase)}`);
}

rpi.close();
