/**
 * LeetCode Problem: 344: Reverse String
 * 
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 */

import readlinePromise from "readline/promises";
import {stdin as input, stdout as output} from "process";

const rpi = readlinePromise.createInterface({input, output});

const str = await rpi.question("Enter a string to reverse\n");

// Time Complexity: O(n/2) i.e. O(n) since we are iterating through the string once to reverse it.
// Space Complexity: O(1) since we are modifying the input array in-place without using any extra space.
const reverseStringInPlace = (strArr: string[]): string[] => {
    let left = 0;
    let right = strArr.length - 1;
    while (left < right) {
        // Swap characters at left and right indices
        const temp = strArr[left];
        strArr[left] = strArr[right];
        strArr[right] = temp;
        left++;
        right--;
    }
    return strArr;
}
console.log(`Reversed string in place =\n${reverseStringInPlace(str.split("")).join("")}`);

const reverseStringInPlaceUsingRecursion = (strArr: string[], left: number, right: number): string[] => {
    if (left >= right) {
        return strArr;
    } else {
        const temp = strArr[left];
        strArr[left] = strArr[right];
        strArr[right] = temp;
        return reverseStringInPlaceUsingRecursion(strArr, left + 1, right - 1);
    }
}
console.log(`Reversed string in place using recursion =\n${reverseStringInPlaceUsingRecursion(str.split(""), 0, str.length - 1).join("")}`);

console.log(`Reversed string using array reverse in built fn =\n${str.split("").reverse().join("")}`);

rpi.close();