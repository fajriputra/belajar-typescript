/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

export {}; // quick fix for global variable

/**
 * 1. function declaration, expression, arrow
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overlods
 */

/********** 1. Basic Function  ***********/
/* Function Declaration, Expession, Arrow
 */

// function declaration = ? before type is optional value
function add(x: number, y: number, z?: number): number {
    return x + y;
}
console.log(add(5, 4));

// function expression
const addEx = function (x: number, y: number): number {
    return x + y;
};
console.log(addEx(5, 4));

// arrow function
const addArrow = (x: number, y: number): number => x + y;
console.log(addArrow(5, 4));

// function with no return value
const hello = (name: string): void => console.log('hello ' + name);
console.log(hello('test'));

// type aliases
type Greeter = (message: string) => void;
// function with callback
function request(url: string, cb: Greeter) {
    cb(url);
}
let fn = (str: string) => console.log(str);
request('https://typescriptlang.org', fn);

/********** 2. optional & default parameters  ***********/
/*
| parameters | required | default value |
| ---------- | -------- | ------------- |
| firstName  | Yes      |               |
| lastName   | Yes      |               |
| gender     | No       |               |
| languange  | No       | english       |
*/

type Contact = {
    firstName: string;
    lastName: string;
    gender?: string;
    languange?: string;
};

function submitContact(firstName: string, lastName: string, languange = 'english', gender?: string): Contact {
    return {
        firstName: firstName,
        lastName: lastName,
        languange,
        ...(gender && { gender }),
    };
}
let result = submitContact('fajri', 'putra', 'english', 'male');
console.log(result);

/********** 3. Rest Parameter  ***********/

function fruitsCollection(item: string, ...restItems: (string | number)[]) {
    return item + ' ' + restItems.join(' ');
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado', 532);
console.log(fruits);

/********* 4. conditional type with union ***********/
/*
  - accept parameter either string or number
  - return either string or number
  - don't use `any`
*/

// solution 1 = union type
function CT(param: string | number): string | number {
    return param;
}
console.log(CT('test'));
console.log(CT(123));

// solution 2 = generic array
// T = type variable untuk mendeteksi data dari caller
function CT_generic<T>(param: T): T {
    return param;
}

console.log(CT_generic<string>('TEST'));
console.log(CT_generic<number>(123));
console.log(
    CT_generic<number[]>([1, 2, 3]),
);
console.log(
    CT_generic<string[]>(['a', 'b', 'c']),
);

// solution 3 = overloading
function CT_Overloading(param: string): string;
function CT_Overloading(param: number): number;
function CT_Overloading(param: any): any {
    return param;
}

console.log(CT_Overloading('TEST'));
console.log(CT_Overloading(123));
