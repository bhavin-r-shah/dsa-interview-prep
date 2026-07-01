/**
 * Psuedo Code:
 * Inputs:
 * 1. String to convert. Datatype: string
 * 2. case to convert to. Datatype: string. Possible values: 'upper' or 'lower'
 * 
 * Output:
 * Converted string. Datatype: string
 * 
 * Steps:
 * 1. Create a readline interface to take input from user
 * 2. Take string input and case to convert to input from user
 * 3. Split the string into char array.
 * 4. Create an output string and initialize it to empty string.
 * 5. Loop through each char and check if it is lower or upper case using its ASCII code. If ASCII code is between 97 and 122, it is lower case.
 *    ASCII code for 'A" is 65, 'Z', is 90, 'a' is 97 and 'z' is 122.   
 * 6. If char is upper case and users asks to convert to lower case, add 32 to its ASCII code. Then add the converted char to output string.
 *    Else if char is lower case and users asks to convert to upper case, subtract 32 from its ASCII code. Then add the converted char to output string.
 *    Else add the char as it is to output string.
 * 8. Print the output string.
 * 9. Close the readline interface.
 * 
 * Questions:
 * 1. How to handle non-alpabetic characters? Add them to output as is or throw error?
 * 2. Input Validation:
 *      - If input string is empty, do we give empty string as output or ask user to re-enter?
 *      - If case given is "" or not "upper" or "lower", do we give error message?
 */
import readline from "readline";

const rI = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rI.question("Enter the string\n", (input) => {
    rI.question("Enter the case to convert to\n",(caseToConvertTo) => {
        console.log(`Converting string ${input} to ${caseToConvertTo} case`);
        const charArr = input.split('');
        // console.log('Character array is ', charArr);
        let output = "";
        for(let i = 0; i < charArr.length; i++) {
            /* NOTE: Since charArr[i] is a string of 1 character, we need to use 
            charCodeAt(0) i.e. the 0th place */
            let isUpper = charArr[i].charCodeAt(0) >= 65 && charArr[i].charCodeAt(0) <= 90;
            let isLower = charArr[i].charCodeAt(0) >= 97 && charArr[i].charCodeAt(0) <= 122;
            // console.log(`Character ${charArr[i]} is ${isLower ? `lower` : `upper`} case`);
            if(isUpper && caseToConvertTo === "lower") {
                output = output + String.fromCharCode(charArr[i].charCodeAt(0) + 32);
            } else if(isLower && caseToConvertTo === "upper") {
                output = output + String.fromCharCode(charArr[i].charCodeAt(0) - 32);
            } else {
                // If ASCII code is not for an upper or lower case char, it might be a number or speccial char. Add it to output as it is.
                output = output + charArr[i];
            }
        }
        console.log(`Output string is ${output}`);
        rI.close();
    });
});