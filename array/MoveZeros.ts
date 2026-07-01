/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 *
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * 
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 */

/**
 * Psuedo Code:
 * - Whenever we encounter a 0, we want to move it to the back of the array.
 * - For doing so, we will have to move a non-zero element in the place of 0 and 
 *   place 0 at the back of the array.
 * - After doing so, each non-zero number will come to the start of the array and the 
 *   remaning space will be filled with 0's.
 * - So in other words, we are moving non-zero numbers to the start of the array and 
 *   then filling the rest of the array with 0's.
 * - Since we have to maintain the relative order of non-zero numbers,
 *   - Moving from left to right in the array,
 *   - Place the 1st non-zero element at the 0the position,
 *   - Then place the 2nd non-zero element at 1st poistion,
 *   - Then place the 3rd non-zero element at 2nd position and so on.
 *   - Once all non-zero numbers have been placed at the required positions,
 *     if we have not filled the entire array, then fill the rest of the array with 0's.
 */

/** 
 * Time Complexity: O(n) where n is the number of elements in the array.
 * Space Complexity: O(1) since we are not using any extra space.
  * 
 */

import readlinePromise from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rpi = readlinePromise.createInterface({ input, output});

const str = await rpi.question("Enter the array of numbers as a comma seperated string\n");
const arr = str.split(",").map((i: string) => {
    i = i.trim();
    if (isNaN(Number(i))) {
        console.error(`Error: ${i} is not a valid number`);
        // Exit program
        process.exit(1);
    }
    return Number(i);
});

const moveZeros = (arr: number[]): number[] => {
    // Place 1st non-zero number at 0th poisiton in array
    let insertAtPosition = 0;
    // Iterate from left to right.
    // Place each non-zero number at position insertAtPosition and then increment insertAtPosition by 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[insertAtPosition] = arr[i];
            insertAtPosition++;
        }
    }
    // If we have not filled the entire array, then fill the rest of the array with 0's.
    while (insertAtPosition < arr.length) {
        arr[insertAtPosition] = 0;
        insertAtPosition++;
    }
    return arr;
}

console.log("Given array: ");
console.log(arr);
console.log("Array after moving 0's to the end: ");
console.log(moveZeros(arr));

// If we do not close it, then after program ends the control does not come back to terminal unless press Ctrl + C
rpi.close();