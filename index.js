
// Problem
class User {
    constructor(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
}

let user1 = new User('Bob');
console.log('User1:', user1); // User: User {name: 'Bob', age: undefined, phone: undefined}

// if we want to add phone, but not age then
let user2 = new User('Bob', undefined, 123);
console.log('User2:', user2);
// Above way is difficult when we have N number of users and need to pass 'undefined' for number of properties we are not setting

// Solution:
// In javascript way we can use optiona parameters ,even detruct them to an object

class UserBuilder {
    constructor(name, { age, phone } = {}) {
        this.name = name;
        this.age = age;
        this.phone = phone;
    }

    setPhone(phone) {
        this.phone = phone;
    }
}

let user3 = new UserBuilder('Bob');
console.log('user3:', user3);

let user4 = new UserBuilder('Bob:', { age: 30 }); // This way we don't have to worry about the properties we don't have values for
console.log('user4', user4);

// if we need to set this later, define set methods
user4.setPhone(123);
console.log('user4', user4);


