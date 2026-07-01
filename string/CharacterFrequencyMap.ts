/**
 * Given a string s, sort it in decreasing order based on the frequency of the characters.
 * The frequency of a character is the number of times it appears in the string.
 * Return the sorted string. If there are multiple answers, return any of them.
 * 
 * Example 1:
 * Input: s = "tree"
 * Output: "eert"
 * Explanation: 'e' appears twice while 'r' and 't' both appear once.
 * So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
 * 
 * Example 2:
 * Input: s = "cccaaa"
 * Output: "aaaccc"
 * Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
 * Note that "cacaca" is incorrect, as the same characters must be together.
 * 
 * Example 3:
 * Input: s = "Aabb"
 * Output: "bbAa"
 * Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
 * Note that 'A' and 'a' are treated as two different characters.
 */

/**
 * Psudeo Code:
 * 1. Take the input string and convert it to a char array i.e. strArr = str.split("").
 * 2. Create a map of char to its count.
 * 3. Iterate over each char in the array,
 *    if not present add to map with count 1 else
 *    increment its count.
 * 4. Sort map by values in descending order.
 *   Now char with max occurence is 1st key of the map.
 * 5. Create output string.
 * 6. Iterate over each key in map and read its value.
 *    Append that char as many times to the output string
 */

/** 
 * Time Complexity: ??
 */

import readlinePromise from "readline/promises";
import {stdin as input, stdout as output} from "process";

const rpi = readlinePromise.createInterface({input, output});

const str = await rpi.question("Enter the string\n");

const getStrinWithDecreasingFrequencyOfCharacters = (str: string): string => {
    const charArr = str.split("").map((char: string) => char.trim());
    
    let charFrequencyMap = new Map<string, number>();
    for (let i = 0; i < charArr.length; i++) {
        let char = charArr[i];
        if (charFrequencyMap.has(char)) {
            charFrequencyMap.set(char, charFrequencyMap.get(char) + 1);
        } else {
            charFrequencyMap.set(char, 1);
        }
    }

    /* Sort the map in descending order of values.
    Map does not have sort(). So convert it to array.
    */
    // Get iterator of map entries
    const mapEntriesIterator = charFrequencyMap.entries();
    // convert iterator to array of entries: [ [key1, value1], [key2, value2], ... ]
    const mapEntriesArr = [...mapEntriesIterator]; 
    // Sort the array by count in descending order.
    // Each entry is [key, value]. So key is entry[0] and value is entry[1].
    const sortedCharFrequencyArr = mapEntriesArr.sort((entry1, entry2) => {
        // Descending sort
        return entry2[1] > entry1[1] ? 1 : (entry2[1] === entry1[1] ? 0 : -1);
    });

    let output = "";
    for (let i = 0; i < sortedCharFrequencyArr.length; i++) {
        let char = sortedCharFrequencyArr[i][0];
        let count = sortedCharFrequencyArr[i][1];
        while (count > 0) {
            output = output + char;
            count--;
        }
    }
    return output;
}

console.log("String with decreasing frequency of characters = ");
console.log(getStrinWithDecreasingFrequencyOfCharacters(str));

rpi.close();