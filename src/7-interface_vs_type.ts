/* eslint-disable */

export {}; // quick fix for global variable

/**
 * Object
 */

// user => name, age

interface User {
    name: string;
    age: number;
}

type TUser = {
    name: string;
    age: number;
};

/**
 * Merge
 */

interface Song {
    songName: string;
}
interface Song {
    artistName: string;
}

const mySong: Song = {
    artistName: 'Metallica',
    songName: 'Enter Shandman',
};
console.log(mySong);

/**
 * Intersection & Union
 */

type typeA = {
    id: number;
    propA: string;
};

type typeB = {
    id: number;
    propB: string;
};

// intersection
type intersectionAB = typeA & typeB;

let myIntersection: intersectionAB = {
    id: 1,
    propA: 'A',
    propB: 'b',
};
console.log(myIntersection);

// union type
type unionAB = typeA | typeB;

let myUnion: unionAB = {
    id: 1,
    propA: 'A',
    // propB: 'B',
};
console.log(myUnion);

/**
 * Implements & Extends
 */

interface Address {
    street: string;
}

interface Person extends Address {
    name: string;
    age: number;

    getName(id: number): string;
}

class People implements Person {
    name: string;
    age: number;
    street: string;
    constructor(name: string, age: numbe) {
        this.name = name;
        this.age = age;
        this.street = '';
    }

    getName(id: number) {
        return 'yess';
    }
}
