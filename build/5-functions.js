"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y, z) {
    return x + y;
}
console.log(add(5, 4));
const addEx = function (x, y) {
    return x + y;
};
console.log(addEx(5, 4));
const addArrow = (x, y) => x + y;
console.log(addArrow(5, 4));
const hello = (name) => console.log('hello ' + name);
console.log(hello('test'));
function request(url, cb) {
    cb(url);
}
let fn = (str) => console.log(str);
request('https://typescriptlang.org', fn);
function submitContact(firstName, lastName, languange = 'english', gender) {
    return {
        firstName: firstName,
        lastName: lastName,
        languange,
        ...(gender && { gender }),
    };
}
let result = submitContact('fajri', 'putra', 'english', 'male');
console.log(result);
function fruitsCollection(item, ...restItems) {
    return item + ' ' + restItems.join(' ');
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado', 532);
console.log(fruits);
function CT(param) {
    return param;
}
console.log(CT('test'));
console.log(CT(123));
function CT_generic(param) {
    return param;
}
console.log(CT_generic('TEST'));
console.log(CT_generic(123));
console.log(CT_generic([1, 2, 3]));
console.log(CT_generic(['a', 'b', 'c']));
function CT_Overloading(param) {
    return param;
}
console.log(CT_Overloading('TEST'));
console.log(CT_Overloading(123));
