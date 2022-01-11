/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

export {};
/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */

/**
 * 1. Object Literal
 */

// type inference
let product1 = {
    id: 'ID-1',
    productName: 'Macbook Air',
    price: 2000,
    note: '',
};

// inline interface
let product2: {
    id: string;
    productName: string;
    price: number;
    note: string;
};
product2 = {
    id: 'ID-1',
    productName: 'Macbook Air',
    price: 2000,
    note: '',
};

// dynamic interface
interface Product {
    id: string;
    productName: string;
    price: number;
    note: string;
}
let product3: Product;
product3 = { id: 'ID-1', productName: 'Macbook Air', price: 2000, note: '' };

/**
 * 2. Nested Object
 */

interface Item {
    id: string;
    productName: string;
    price: number;
    productDetail: ItemDetail;
}
interface ItemDetail {
    year: number;
    storage: number;
}
let product4: Item;
product4 = {
    id: 'ID-1',
    productName: 'MacBook 1',
    price: 300000,
    productDetail: {
        year: 2019,
        storage: 256,
    },
};

/*

/**
 * 3. Nested, Array of Object
 */
interface User {
    id: string;
    name: string;
    address: Array<Address>; // generic array
}
interface Address {
    street: string;
    city: string;
}
let user: User;
user = {
    id: 'U-1',
    name: 'Adi dodi',
    address: [
        {
            street: 'Jln. Setapak No.2',
            city: 'Jakarta',
        },
        {
            street: 'Jln. Lebar sekali no 10',
            city: 'Medan',
        },
    ],
};

/**
 * 4. Nested, Object of Object
 */
interface CartItem {
    id: string;
    name: string;
    qty: number;
}
interface Cart {
    idCart: string;
    dateOrdered: Date;
    items: {
        [key: string]: CartItem; // [key: string] for dynamic properties of object
    };
}
let keyboard: Cart;
keyboard = {
    idCart: 'C1',
    dateOrdered: new Date('2020-05-20'),
    items: {
        p1: {
            id: 'P-1',
            name: 'Mechanical Keyboard',
            qty: 2,
        },
        p2: {
            id: 'P-2',
            name: 'USB Hub',
            qty: 1,
        },
    },
};

/**
 * 5. Object Destructuring
 */

let fullName = {
    firstName: 'Sastra',
    lastName: 'Nababan',
};

let myBorn = {
    born: new Date('2020-05-20'),
};

// type inference
let { firstName, lastName } = fullName;

//  inline interface
let { born }: { born: Date } = myBorn;
