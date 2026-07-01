# Base Conversion Cheat Sheet

## Decimal to Binary:
Divide the decimal number repeatedly by 2, record the remainders, and read them backward from bottom to top.

## Binary to Decimal:
Multiply each bit by its corresponding power of 2 (starting at 2^0 for rightmost, 2^1 for next on left and so on..) and sum the results.

## Decimal to Octal:
Divide the decimal number repeatedly by 8, record the remainders, and read them backward from bottom to top.

## Octal to Decimal:
Multiply each digit by its corresponding power of 8 (starting at 8^0 for rightmost, 8^1 for next on left and so on..) and sum the results.

## Decimal to Hexadecimal:
Divide the decimal number repeatedly by 16, convert remainders 10–15 into letters A–F, and read them backward from bottom to top.

## Hexadecimal to Decimal:
Converting letters A–F to 10–15, then multiply each digit by its corresponding power of 16 (starting at 16^0 for rightmost, 16^1 for next on left and so on..) and sum the results.

## Binary to Octal:
Group the binary bits into sets of three from right to left, then replace each group with the decimal value of those three bits.

## Octal to Binary:
Treat each octal digit as a decimal value, then replace it with its 3-bit binary form.

## Binary to Hexadecimal: 
Group the binary bits into sets of fours from right to left, then replace each group with the decimal value of those four bits.

## Hexadecimal to Binary:
Treat each hex digit as its decimal value (0–15), then replace it with its 4-bit binary form.

## Octal to Hexadecimal:
Octal --> binary --> Hexadecimal

## Hexadecimal to Octal:
Hexadecimal --> Binary --> Octal