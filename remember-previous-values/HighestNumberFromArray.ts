import readline from "readline";

const rI = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rI.question("Enter numbers in the array seperated by a comma\n", (input: string) => {
    // TODO: Input validation
    const arr = input.split(",");
    let maxSeenSoFar = -1;
    for (let i = 0; i <= arr.length - 1; i++) {
        const num = Number(arr[i]);
        if (num > maxSeenSoFar) {
            maxSeenSoFar = num;
        }
    }
    console.log(`${maxSeenSoFar} is the highest number from array ${input}`);
    rI.close();
});