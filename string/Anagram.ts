/**
 * Find if 2 given strings are anagrams of each other or not.
 */

/**
 * Time complexity: O(n) where n is the length of the strings.
 * Space Complexity: O(n) where n is the number of unique characters in the strings.
 */

import readlinePromise from "readline/promises";
import {stdin as input, stdout as output} from "process";

const rpi = readlinePromise.createInterface({input, output});

const str1 = await rpi.question("Enter the first string\n");
const str2 = await rpi.question("Enter the second string\n");

/**
 * Checks if two strings are anagrams of each other.
 * Returns true if both strings have exactly the same characters with the same frequency, false otherwise.
 * @param str1 First string
 * @param str2 Second string
 * @returns True if the strings are anagrams, false otherwise
 */
const isAnagram = (str1: string, str2: string): boolean => {
    if (str1.length !== str2.length) {
        return false;
    }

    const charArr1 = str1.split("");
    const charArr2 = str2.split("");

    let charCountObj: Record<string, number> = {};
    for (let i = 0; i < charArr1.length; i++) {
        let char = charArr1[i];
        if (charCountObj.hasOwnProperty(char)) {
            charCountObj[char]++;
        } else {
            charCountObj[char] = 1;
        }
    }

    for (let i = 0; i < charArr2.length; i++) {
        let char = charArr2[i];
        // If charCountObj has this char, then reduce its count.
        if (charCountObj.hasOwnProperty(char)) {
            charCountObj[char]--;
            // If count becomes -ve, then there is extra char in str2. So not anagram.
            if (charCountObj[char] < 0) {
                return false;
            }
        } else {
            // If charCountObj does not have this char, then there is extra char in str2. So not anagram.
            return false;
        }
    }
    // If there are less chars in str2, then count for that char will not be 0. Not anagram.
    for (let char in charCountObj) {
        if (charCountObj[char] !== 0) {
            return false;
        }
    }

    return true;
}

console.log(`Are "${str1}" and "${str2}" anagrams of each other? ${isAnagram(str1, str2)}`);

rpi.close();