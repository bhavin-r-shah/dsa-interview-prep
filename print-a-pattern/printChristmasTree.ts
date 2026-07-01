/**
 * Write a program to primt a christmas of height H,
 * where H is given by user.
 */
/**
 * Questions:
 * If height is not a integer >= 1, can we throw error?
 * 
 * Assumptions:
 * Height is a +ve integer greater than or equal to 1.
 * H = 1, output = *
 * 
 * H = 2, output =  *
 *                 ***
 * 
 * H = 3, output =   *
 *                  ***
 *                 *****
 */

/**
 * Pseudo Code:
 * 1. At each row we have odd number of stars.
 *    row 1 = 1 star, row 2 = 3 stars, row 3 - 5 stars, row 4 = 7 stars and so on.
 * 2. We can infer that:
 *    2.1 At each row, noOfStars = previousNoOfStars + 2
 *    2.2 At height h, no of stars i.e. width of the tree base = h + (h -1)
 *    Height 1: baseWidth = 1 + (1 - 1) = 1
 *    Height 2: baseWidth = 2 + (2 - 1) = 3
 *    Height 3: baseWidth = 3 + (3 - 2) = 5
 * 3. To form a christmas tree, at each row there will be certain number of spaces 
 *    and certain number of '*'
 * 4. As the height increases, on each row the number of spaces reduces and the number 
 *    of '*' increases.
 * 4. On row 1, there will be baseWidth / 2 spaces and then 1 star.
 *    On row 2, no of spaces reduces by 1 and no of stars changes.
 * 5. Steps:
 *    5.1 Run a loop from 0 to height - 1
 *    5.1 At each row, first print the spaces and then the stars.
 */

/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
import readline from "readline";

const rI = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rI.question("Enter height of christmas tree\n", (h: string) => {
    const height = Number(h);
    console.log("Christmas Tree of height " + height + ":");
    if (Number.isInteger(height) && height > 0) {
        const baseWidth = height + (height - 1);
        let noOfStars = 1, row;
        for (row = 0; row < height; row++) {
            let str = '';
            for (let j = (Math.floor(baseWidth / 2)) - row; j > 0; j--) {
                str = `${str} `;
            }
            noOfStars = row === 0 ? 1 : noOfStars + 2;
            for (let k = 1; k <= noOfStars; k++) {
                str = `${str}*`;
            }
            console.log(str);
        }
        rI.close();
    } else {
        console.error("Enter a +ve integer greater than 0 for height");
        rI.close();
    }
});