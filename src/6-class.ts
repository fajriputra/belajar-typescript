/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

/**
 * Object User :
 * - User have personal like such id, firstName, lastName
 * - User have method such as login(), register()
 * - Max Failed login = 5
 */

abstract class Root {
    abstract done: boolean;
}

class User extends Root {
    // access modifiers : public, private, protected
    // properties
    id: number;
    firstName: string;
    lastName: string;
    private token: string;
    protected save: boolean;
    static MAX_FAILED_LOGIN = 2;
    private retryLogin = 0;
    done: boolean;

    // method
    login(username: string, password: string) {
        this.retryLogin += 1;
        if (username == 'admin' && password == 'admin') {
            return true;
        }

        if (this.retryLogin >= User.MAX_FAILED_LOGIN) {
            return 'max login attempted';
        }
        return false;
    }
    register() {}

    constructor(id: number, firstName: string, lastName: string) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.token = '';
        this.save = false;
        this.done = false;
    }
}
User.MAX_FAILED_LOGIN = 5;
let myUser = new User(1, 'John', 'Doe');
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
// console.log(myUser.login('admin', 'admin'));

// sub-class
class EnhancementUser extends User {
    location: string;
    constructor(id: number, firstName: string, lastName: string, location: string) {
        super(id, firstName, lastName);
        this.location = location;
    }
}
let myNewUser = new EnhancementUser(3, 'fajri', 'putra', 'jakarta');

// class --> OOP ( Object Oriented Programming)
// class --> Object Instance
