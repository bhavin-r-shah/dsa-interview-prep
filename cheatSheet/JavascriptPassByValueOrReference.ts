/** IS JS pass by value or reference? */

/**
 * JS has 7 primitive data types.
 * - string, number, boolean, undefined, null, bigint, symbol
 * - IMMUTABLE
 * - PASS BY VALUE.
 */

/**
 * JS Object is non primitive data type.
 * - Types of objects: object, array, function, date, map, set, class instances
 * - PASS BY REFERENCE.
 */


const swap = (x: any, y: any) => {
    let temp = x;
    x = y;
    y = temp;
    if (typeof x === 'object' && typeof y === 'object') {
        console.log("Inside function, after swap: x =");
        console.log(x);
        console.log("Inside function, after swap: y =");
        console.log(y);
    } else {
        console.log(`Inside function, after swap: x = ${x} and y = ${y}`);
    }
}

const modifyContent = (obj: object, key: string) => {
    obj[key] = 'Modified';
}

let a: any, b: any;

// number: Primitive Data Type, Passed by value
a = 5, b = 10;
console.log("number is a primitive data type and is passed by value");
console.log("------------------------------------------------------");
console.log(`Before swap: a = ${a} and b = ${b}`);
swap(a, b);
console.log(`After swap: a = ${a} and b = ${b}`);
console.log("x and y get the value of a and b i.e. 5 and 10.");
console.log("But there is no link between x and a or y and b. So swapping x and y has no effect on a and b.\n");

// string: Primitive Data Type, Passed by value
a = '5', b = '10';
console.log("string is a primitive data type and is passed by value");
console.log("------------------------------------------------------");
console.log(`Before swap: a = ${a} and b = ${b}`);
swap(a, b);
console.log("x and y get the value of a and b i.e. '5' and '10'.");
console.log("But there is no link between x and a or y and b. So swapping x and y has no effect on a and b.\n");

// boolean: Primitive Data Type, Passed by value
a = true, b = false;
console.log("boolean is a primitive data type and is passed by value");
console.log("------------------------------------------------------");
console.log(`Before swap: a = ${a} and b = ${b}`);
swap(a, b);
console.log("x and y get the value of a and b i.e. true and false.");
console.log("But there is no link between x and a or y and b. So swapping x and y has no effect on a and b.\n");

// Object: pass by reference
a = { id: '1', name: 'Jack' }, b = { id: '2', name: 'Jill' };
console.log("object is passed by reference");
console.log("---------------------------------------------");
console.log("Before swap: a =");
console.log(a);
console.log("Before swap: b =");
console.log(b);
swap(a, b);
console.log("After swap: a =");
console.log(a);
console.log("After swap: b =");
console.log(b);
console.log("Reference to to a & b are passed to x & y respectively. So x points to a and y points to b.");
console.log("In swap function, we change what x & y refer to. But we are never changing the content within that reference. So swapping x and y has no effect on content of objects a and b.\n");

console.log("Before modifying object, a =");
console.log(a);
modifyContent(a, 'name');
console.log("Before modifying object, a =");
console.log(a);
console.log("Reference to a is passed to obj. Within modifyContent() we are changing the content within this reference. Hence it affects object a.\n");

// array: pass by reference
a = [1, 2, 3], b = ['A', 'B', 'C'];
console.log("array is an object and is passed by reference");
console.log("---------------------------------------------");
console.log("Before swap: a =");
console.log(a);
console.log("Before swap: b =");
console.log(b);
swap(a, b);
console.log("After swap: a =");
console.log(a);
console.log("After swap: b =");
console.log(b);
console.log("Reference to to a & b are passed to x & y respectively. So x points to a and y points to b.");
console.log("In swap function, we change what x & y refer to. But we are never changing the content within that reference. So swapping x and y has no effect on content of arrays a and b.\n");

console.log("Before modifying object, a =");
console.log(a);
modifyContent(a, '0');
console.log("Before modifying object, a =");
console.log(a);
console.log("Reference to a is passed to obj. Within modifyContent() we are changing the content within this reference. Hence it affects array a.\n");
