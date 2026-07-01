/**
 * Remove duplicates from array.
 */

import readlinePromise from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rpi = readlinePromise.createInterface({ input, output});

const str = await rpi.question("Enter the array as a comma seperated string\n");
const arr = str.split(",").map(key => key.trim());

/**
 * Psuedo Code:
    1. In Js Object acts like a map of key value pairs.
    2. Create obj where key is a value within the array and value is the number of times it occurs in the array.
    3. Iterate through the array and for each element, check if it is already present in the obj or not.
        a. If it is not present, then add it to the obj with value 1.
        b. If it is already present, then increment the value by 1.
    4. Create a new array and iterate through the obj and for each key, add it to the new array.
    5. Return the new array.
 */
/**
 * Time Complexity: O(n) where n is the number of elements in the array.
 * - We are iterating through the array once to create the obj and 
 * then iterating through the obj once to create the new array.
 * 
 * Space Complexity: O(n) where n is the number of unique elements in the array.
 * - In worst case, all elements are unique and we are storing all elements in the obj and new array.
*/
const removeDuplicatesUsingObject = (arr: string[]): string[] => {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (!obj.hasOwnProperty(element)) {
            obj[element] = true;
        }
    }
    return Object.keys(obj);
}

/**
 * Psuedo Code:
    1. Iterate over the array and add each element to a Set.
    2. The set will keep only unique elements. So, at the end of iteration, we will have a set of unique elements.
    3. Create a new array and iterate through the set and for each key, add it to the new array.
    4. Return the new array.
 */
// Time Complexity: O(n) where n is the number of elements in the array.
// Space Complexity: O(n) where n is the number of unique elements in the array.
const removeDuplicatesUsingSet = (arr: string[]): string[] => {
    const uniqueElementsSet = new Set();
    for (let i = 0; i < arr.length; i++) {
        uniqueElementsSet.add(arr[i]);
    }
    // return Array.from(uniqueElementsSet);
    return [...uniqueElementsSet];
}

/** 
 * Psuedo Code:
 * 1. Sort the array so that duplicate elements will be next to each other.
 * 2. Create a write pointer and initialize it to 1.
 * 3. Iterate through the array from index 1 to end of the array and 
 * for each element, check if it is equal to the previous element or not.
 *   a. If it is not equal, then it means it is a unique element and we will write it at the index pointed by write pointer 
 * and increment the write pointer by 1.
 *   b. If it is equal, then it means it is a duplicate element and we will skip it.
 * 4. At the end of iteration, we will have all unique elements at the beginning of the array and write pointer will be pointing to the index next to the last unique element.
 * 5. Return slice of the array from index 0 to (write pointer - 1) as the array with unique elements.
 */
// Time complexity: O(nlogn) where n is the number of elements in the array.
//Space Cmplexity: O(1)
const removeDuplicatesFromSortedArrayInPlace = (sortedArr: string[]): string[] => {
    let write = 1;
    for (let read = 1; read < sortedArr.length; read++) {
        if (sortedArr[read] != sortedArr[read - 1]) {
            sortedArr[write] = sortedArr[read];
            write++;
        }
    }
    return sortedArr.slice(0, write);
}

console.log("Given Array with duplicates =");
console.log(arr);

console.log("\nUsing JS Object, array after removing duplicates =");
console.log(removeDuplicatesUsingObject(arr));

console.log("\nUsing JS Set, array after removing duplicates =");
console.log(removeDuplicatesUsingSet(arr));

console.log("\nSorted array after removing duplicates =");
// Send sorted array, so that duplicate elements are next to each other.
console.log(removeDuplicatesFromSortedArrayInPlace(arr.sort()));

rpi.close();