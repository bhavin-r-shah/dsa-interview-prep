/**
 * Find the 2nd largest number from the given array
 */

import readlinePromise from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rpi = readlinePromise.createInterface({ input, output});

const str = await rpi.question("Enter the array of numbers as a comma seperated string\n");
const arr = str.split(",").map((i: string) => {
    if (isNaN(Number(i))) {
        console.error(`Error: ${i} is not a valid number`);
        // Exit program
        process.exit(1);
    }
    return Number(i)
});

const get2ndLargest = (arr: number[]): number => {
    if (arr.length < 2) {
        console.error("Error: Array must have alteast 2 elements to find 2nd largest number");
        // Exit program
        process.exit(1);
    } else {
        let largest = -Infinity;
        let secondLargest = -Infinity;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > largest) {
                secondLargest = largest;
                largest = arr[i];
            } else if (arr[i] > secondLargest && arr[i] < largest) {
                secondLargest = arr[i];
            }
        }
    }
    return secondLargest;
}

console.log(`2nd largest number in the array is ${get2ndLargest(arr)}`);

// If we do not close it, then after program ends the control does not come back to terminal unless press Ctrl + C
rpi.close();