import readlinePromise from "readline/promises";
import {stdin as input, stdout as output} from "process";

const rpi = readlinePromise.createInterface({input, output});
const str = await rpi.question("Enter the string\n");

const firstUniqChar = function(s) {
    const charArr = s.split("");
    var uniqueCharIndexMap = new Map();
    for (let i = 0; i < charArr.length; i++) {
        const char = charArr[i];
        if (uniqueCharIndexMap.has(char)) {
            // If a char repeats, set its index to Infinity
            uniqueCharIndexMap.set(char, Infinity);
        } else {
            // Index is preserved only for unique chars
            uniqueCharIndexMap.set(char, i);
        }
    }
    // Results in [[key1, value1], [key2, value2],...]
    const mapEntriesArr = [...uniqueCharIndexMap.entries()];
    const sortedMapEntriesArr = mapEntriesArr.sort((a, b) => {
        const charAIndex = a[1];
        const charBIndex = b[1];
        return charBIndex < charAIndex ? 1 : (charBIndex > charAIndex ? -1 : 0);
    });
    // If no unique characters, 1st element will have index as Infinity
    if (sortedMapEntriesArr[0][1] === Infinity) {
        return -1;
    } else {
        // 1st element in array is the 1st non-repeating (unique) character
        return sortedMapEntriesArr[0][1];
    }
};

console.log(`Index of 1st unique character in string ${str} is ${firstUniqChar(str)}`);
rpi.close();