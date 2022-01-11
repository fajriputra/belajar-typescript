/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const */
export {}; // quick fix for global variable

/**
 * Array
 * 1. Array of Number
 * 2. Array of String
 * 3. Array with Union
 * 4. Tuple
 * 5. Array of Object
 * 6. Array multi dimension
 * 7. Destructuring
 */

/**
 * 1. Array of Number
 * [1,2,3,4]
 */

// type inference
let list1_1 = [1, 2, 3, 4];

// square bracket
let list1_2: number[];
list1_2 = [1, 2, 3, 4];

// generic array
let list1_3: Array<number>;
list1_3 = [1, 2, 3, 4];

/**
 * 2. Array of String
 * ['a', 'b', 'c']
 */

// type inference
let list2_1 = ['a', 'b', 'c'];

// square bracket
let list2_2: string[];
list2_2 = ['a', 'b', 'c'];

// generic array
let list2_3: Array<string>;
list2_3 = ['a', 'b', 'c'];

/**
 * 3. Array with Union =
 * ["hello", 1, 2, 3 ]
 */

// type inference
let list3_1 = ['hello', 1, 2, 3];

// square bracket
let list3_2: (string | number)[];
list3_2 = ['hello', 1, 2, 3];

// generic array
let list3_3: Array<string | number>;
list3_3 = ['hello', 1, 2, 3];

/**
 * 4. Tuple = Type data array yang fix dari segi tipe dan panjang
 * ['cordinat', 2, 4, 7]
 */

// don't use type inference for tuple, instead of square bracket
let list4_1: [string, number, number, number];
list4_1 = ['cordinat', 2, 4, 7];

/**
 * 5. Array of Object
 * [
 *   { color: 'blue', index: 1 },
 *   { color: 'red', index: 2 },
 * ]
 */

// inline interface
let list5_1: { color: string; index: number }[];
list5_1 = [
    { color: 'blue', index: 1 },
    { color: 'red', index: 2 },
];

// generic array
let list5_2: Array<{ color: string; index: number }>;
list5_2 = [
    { color: 'blue', index: 1 },
    { color: 'red', index: 2 },
];

/**
 * 6. Array multi dimension [[]]
 * matrix = [
 *  [1, 2],
 *  [3, 4],
 * ];
 */

// square bracket
let matrix6_1: number[][];
matrix6_1 = [
    [1, 2],
    [3, 4],
];

// generic array
let matrix6_2: Array<Array<number>>;
matrix6_2 = [
    [1, 2],
    [3, 4],
];

/**
 * 7. Destructuring
 * let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
 */

// type inference
let [a, b, c, d] = [1, 2, 3, 'four'];

// square bracket
let [e, f, g, h]: [number, number, number, string] = [1, 2, 3, 'four'];

// generic type
// let [i, j, k, l]: Array<number, number, number, string> = [1, 2, 3, 'four'];
