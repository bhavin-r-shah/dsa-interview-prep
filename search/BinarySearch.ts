/**
 * Problem:
 * Use Binary Search to find the index of the number to be searched in the given array.
 * 
 * Input: [1, 2, 3, 4, 5, 6, 7, 8, 9], numberToSearch = 5
 * Output: 4
 * 
 * Input: [1, 2, 3, 4, 5, 6, 7, 8, 9], numberToSearch = 10
 * Output: -1 
 */

/**
 * Questions:
 * 1. Does the array contain only numbers? If aplhanumeric value, do we use its ascii value or error out?
 * 2. Will the number to search be a number? If aplhanumeric value, do we use its ascii value or error out?
 * 
 * Fact:
 * Binary Search can be applied only on sorted arrays.
 * 
 * Assumptions:
 * 1. Given array is sorted in ascending order.
 * 2. Array contains only numbers i.e. +ve or -ve integers and decimal point numbers.
 */

/**
 * Pseudo Code:
 * 1. Take the array to search input from user, trim each element and convert it to a string. This returns a numer array.
 * 2. Take the number to search input and convert it to a number.
 * 3. Define variables low = 0, high = array.length - 1 and numberFoundAtPosition = -1.
 * 4. Run a while loop till high >= low:
 *    4.1 Take the 2 extreme values and find their mid. Mid = (low + high) / 2
 *    4.1 If value at mid is the number to find,
 *        update numberFoundAtPosition = mid. Break from loop.
 *    4.2 If value at mid is more than the number to find,
 *        then search the left side of the array by setting high = mid - 1
 *    4.3 If value at mid is less than the number to find,
 *        then search the right side of the array by setting low = mid + 1
 * 5. If numberFoundAtPosition != -1, the number was found. Print its position.
 * 6. If numberFoundAtPosition = -1,  means number is not found.
 */

/**
 * Time Complexity: O(log n) since in each iteration we are cutting the search area in half.
 * Space Complexity: O(1) since we are using only constant space to store the variables.
 */

import readlinePromise from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rpi = readlinePromise.createInterface({ input, output});

const binarySearch = (arr: number[], numberToSearch: number): number => {
    let low = 0, high = arr.length - 1, numberFoundAtPosition = -1;
    while (high >= low) {
        const mid = Math.floor((low + high) / 2);
        let midNum = arr[mid];
        if (midNum === numberToSearch) {
            numberFoundAtPosition = mid;
            break;
        } else if (midNum > numberToSearch) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return numberFoundAtPosition;
}

// Parse inputs
const string = await rpi.question('Enter an comma seperated array sorted in ascending order:\n');
const arr = string.split(",").map(str => Number(str.trim()));
const numberToSearch = Number(await rpi.question('Enter the number to be searched:\n'));

// Perform binary search
const numberFoundAtPosition = binarySearch(arr, numberToSearch);
console.log(`${numberFoundAtPosition !== -1 ? `Number found at position ${numberFoundAtPosition}` : 'Number not found in the array'}`);

// Close interface
rpi.close();