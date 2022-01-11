/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const */
export {}; // quick fix for global variable

// type inference(Implicit)
const ti = 'hello';

// type annotation(Explicit)
const ta = 'hello ts';

/* eslint-disable no-console */
// Javascritp Data Types

/********** Javascript Types ***********/

let a; // undefined

let b: boolean;
b = true; // boolean

let c: number;
c = 1; // number

let d: string;
d = 'hello'; // string

let e: bigint;
e = 100n; // big int (starting ES2020)

let f: symbol;
f = Symbol('Sym'); // symbol  (starting ES2015)

let g: () => void;
g = () => {
    return null;
};

let h: null; // null ( special primitive )
h = null;

let i: Record<string, unknown>;
i = {}; // Object Literal

let j: []; // array
j = [];

class Product {
    // class
    //...
}
const k = new Product();

let test: any;
test = 'test';
test = 123;
test = [1, 2, 3];

function sum(a: number, b: number): void {}

const arg1 = 4;
const arg2 = 5;
const result = sum(arg1, arg2);
console.log(result);

// union type = multi types
let multi: string | number;
multi = 'hello';
multi = 123;
// multi = true;

// type aliases = custome type
type CustomType = string | number;
let myType: CustomType;
myType = 'hello';
myType = 123;
// myType = false;
