import readlinePromise from "readline/promises";
import {stdin as input, stdout as output} from "process";

const rpi = readlinePromise.createInterface({input, output});

const height = Number(await rpi.question("Enter a +ve integer greater than 0 for the height of the pascal triangle\n"));

/**
 * Pascal’s Triangle is a triangular pattern of numbers where:
 * The first and last number of every row is 1
 * Every inner number is the sum of the two numbers directly above it
 */
let matrix = [];
for (let row = 0; row < height; row++) {
    // Row 1 has 1 column, row 2 has 2 columns and so on.
    let columnData = [];
    columnData.push(1); // 1st number of each row is 1
    // Inner numbers = sum of the two numbers directly above it
    for (let column = 1; column <= row - 1; column++) {
        columnData[column] = matrix[row - 1][column - 1] + matrix[row -1][column];
    }
    // Last number of each row is 1
    if (row != 0) {
        columnData.push(1);
    }
    matrix[row] = columnData;
}
console.log(`Pascal triangle of height ${height}:`);
console.log(matrix);

rpi.close();