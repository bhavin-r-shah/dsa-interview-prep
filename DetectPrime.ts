import readline from 'readline';

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter a number to check if prime or not\n", (num) => {
    detectPrime(Number(num));
    r1.close();
});

// A prime number is divisble only by 1 and itself.
const detectPrime = (num: number) => {
    // 0 and 1 are not prime numbers
    if (num <= 1) {
        console.log(`Number ${num} is not prime`);
    } else {
        /* Time Complexity O(n) solution */
        /**
         * For a non-prime number, loop will run till we find the 1st number divides num.
         * E.g. 100 is divisible by 2, so loop will run only once and we will find that 100 is not prime.
         * But since prime number is divisble only by 1 and itself, we will have to run the loop till
         * num-1
         * So worst case time complexity = O(n)
         */
        // for (i = 2; i < num; i++) {

        /* Time Complexity O(sqrt(n)) solution */
        /**
         * Sqrt is the number which when multiplied by itself gives you num (the original number).
         * e.g. 10 * 10 = 100 i.e. sqrt(100) = 10. If any other factor is > 10, product will be > 100.
         * e.g. 11 * 10 = 110, 10 * 12 = 120, 11 * 11 = 121, 12 * 12 = 144.
         * 
         * Now any factor of num > sqrt(num) will itself be divisble by a smaller number.
         * Highest factor of 100 is 50, so we could run the loop till 50.
         * But 50 is already divisible by 2, 5 and 10. So it means any multiple of 50 like 100 will also 
         * be divisible by 2, 5 and 10.
         * So we can just run the loop till sqrt(num).
         * 
         * For non-prime number, loop will run till we find the 1st number divides num or max sqrt(num).
         * For prime number also, loop will run till max sqrt(num).
         * 23 is prime, sqrt(23) = 4.7958, so loop will run till 4.
         */
        var sqrt = Math.sqrt(num);
        for (var i = 2; i < sqrt; i++) {
            if (num % i === 0) {
                console.log(`Number ${num} is not prime`);
                return;
            }
        }
        console.log(`Number ${num} is prime`);
    }
}

