/** 
 * Add 1 * after 1 element, 2 commas after 2 elements repeated 2 times, 3 commas after 3 elements repeated 3 times and so on.
 * 
 * Input: [1, 2,3, 4,5 ,6,7,8,9,10 ,11,12, 13,14,15,16 ,17 ,18,19,20,21,22,23]
 * Output: 1*23*45*678*91011*121314*15161718*19202122*23
 * 
 * Input: [1, 2,3, 4,5 ,6,7,8,9,10 ,11]
 * Output: 1*23*45*678*91011*
*/

import readlinePromise from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rpi = readlinePromise.createInterface({ input, output});

const arrayStr = await rpi.question('Enter the comma seperated array:\n');
const array = arrayStr.split(",").map(str => str.trim());

let delimiterSpacesCount = 1, delimiterEntered = 0, delimiterResetCount = 1, spacesSoFar = 0;
let outputStr = '';
for (let i = 0; i < array.length; i++) {
    outputStr = `${outputStr}${array[i]}`;
    spacesSoFar++;
    if (spacesSoFar === delimiterSpacesCount) {
        outputStr = `${outputStr.trim()}*`;
        spacesSoFar = 0;
        delimiterEntered++;
        delimiterResetCount--;
        if (delimiterEntered === delimiterSpacesCount) {
            if (delimiterResetCount === 0) {
                delimiterSpacesCount++;
                delimiterResetCount = delimiterSpacesCount;
                delimiterEntered = 0;
            }
        }
    }
}

console.log(outputStr);
rpi.close();