/* eslint-disable */

export {}; // quick fix for global variable

/**
 * Partial => Partial<T>
 * Required => Required<T>
 * Readonly => Readonly<T>
 * Pick => Pick<T, K>
 * Omit => Omit<T, K>
 */

// use case : transform existing interface to new interface without modify existing interface

interface User {
    id: number;
    name: string;
    age?: number;
    createdAt: Date;
}

// function CreateUser(data: Partial<User>) {}
// function CreateUser(data: Required<User>) {}
// function CreateUser(data: Readonly<User>) {
//     data.id = 2;
// }
// function CreateUser(data: Pick<User, "id"| "name">) {}
function CreateUser(data: Omit<User, 'id' | 'name'>) {}

CreateUser({
    // id: 1,
    // name: 'doe',
    age: 20,
    createdAt: new Date(),
});

/**
 * Record  => Record<K,T>
 */
/*

/*
usecase : object of object
  {
    propA: {id,name,age},
    propB: {id,name,age}
  }
*/
type Response = Record<'id', string>;
const message: Response = {
    id: '1',
    // name: 'doe',
};

type Users = Record<string, User>;
const allusers: Users = {
    '1': { id: 1, name: 'doe', createdAt: new Date(), age: 20 },
    '2': { id: 2, name: 'foe', createdAt: new Date(), age: 20 },
};

/**
 * Extract => Extract<T, U> // find the same properties
 * Exclude => Exclude<T, U> // opposite of Extract = take unequal properties
 */

interface Post {
    id: string;
    title: string;
    createdAt: Date;
}

// type extractType = Extract<'id' | 'name', 'id' | 'title'>;
type a = keyof User;
type extractType = Extract<keyof User, keyof Post>;
type myNewTypeExt = Record<string, extractType>;

type excludeType = Exclude<keyof User, keyof Post>;
type myNewTypeExc = Record<string, excludeType>;
