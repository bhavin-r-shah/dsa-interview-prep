# DSA Patterns

## 1. Remember previous value
### How it works?
In this pattern, for a current operation we remember an older operation.
e.g. remembering a value computed in an older run of the for loop
### Used For:
#### Array Manipulation
- Find the 2nd largest number from the given array
- Find SUM, MIN, MAX, AVG of array
#### Running sum
1. For sum of all numbers upto n.
2. Find sum of factorial of all numbers upto n.

## 2. Print Patterns
### How it works?
In this pattern, you are printing a pattern like a christmas tree or a triangle etc.
Typically acheived by using nested loops.
### Patterns:
- Print Pascal Triangle of height h.
- Print a right hand triangle.
- Print christmas tree of height h.

## 3. 2 pointer
### How it works?
- Point 2 variables to 2 points in the data structure you are dealing with.
- Move these pointers around to read elements at that pointer.
### Used For:
#### String Manipulation
- Reversing a string
- Find whether string is a palindrome
#### Array Manipulation
- Merging 2 sorted arrays


## 4. Using helper data structures
### How it works?

### Used For:
#### String Manipulation
- Find whether string is an Anagram using JS Object
- Find frequency of a character in a string using JS MAP.
#### Array Manipulation
- Removing duplicates from array using MAP or SET


## 5. Moving element to its required position
-  Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

## 6. Sorting
- Removing duplicates from array by sorting it


## 7. Recursion
### How it works?
- Recursion is a process in which a function operates on itself.
- Whenever a function returns the control comes back to the caller.
- Every recusive function has 2 components:
    1. Base Component: Always returns a direct value
    2. Recursive Component: Calls the same function with a modified parameter so that it may reach the base component in a susequent call
- The base component ultimately stops the recursion.
### Used For:
- Get fibonacci of a number using recursion.
- Euclid's Algo to find G.C.D. (greatest common divisor) / H.C.F. (highest common factor)
- Dijkstra'a Algo to find G.C.D.