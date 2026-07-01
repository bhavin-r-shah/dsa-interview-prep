import readlinePromise from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rpi = readlinePromise.createInterface({ input, output});

let matrix = [];
const rows = Number(await rpi.question("Enter the number of rows in the matrix\n"));
for (let i = 0; i < rows; i++) {
    const rowStr = await rpi.question(`Enter contents of row ${i + 1} as a comma seperated string\n`);
    matrix[i] = rowStr.split(",");
}

// Print Matrix
for (let i = 0;  i < matrix.length; i++) {
    let row = '';
    for (let j = 0; j < matrix[i].length; j++) {
        row = `${row}${matrix[i][j]} `;
    }
    console.log(row);
}

// If we do not close it, then after program ends the control does not come back to terminal unless press Ctrl + C
rpi.close();