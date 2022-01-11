/* eslint-disable no-console */
// Javascritp Data Types

/********** Javascript Types ***********/

let a;                  // undefined
console.log(typeof(a))

let b = true;           // boolean
console.log(typeof(b))
let c = 1;              // number
console.log(typeof(c))
let d = "hello";        // string
console.log(typeof(d))
let e = 100n;           // big int (starting ES2020)
console.log(typeof(e))
let f = Symbol("Sym");  // symbol  (starting ES2015)
console.log(typeof(f))
let g = function () {   // function
  return null;
};
console.log(typeof(g))
let h = null;           // null ( special primitive )
console.log(typeof(h))
let i = {};             // Object Literal
console.log(typeof(i))
let j = [];             // array
console.log(typeof(j))

class Product {
  // class
  //...
}
let k = new Product();
console.log(typeof(k))

/********** Why is it call dynamic type / weekly typed ? ***********/

// 1. No Declaration. Type automatically set based on value at runtime
// 2. Re-Assign
let num = 1
num = "hello"
num = [1,2,3]
num = true
console.log(typeof(num))


// 3. with dynamic type comes great responsiblity
function sum(a,b) {

return a + b
}

let result = sum(4,5)
console.log(result)