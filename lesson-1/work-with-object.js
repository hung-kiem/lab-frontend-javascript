var myObject = {
    age: 18,
    name: 'John',
}

var emailKey = 'email';

myObject['age'] = 20;
myObject['last-name'] = 'Doe';
myObject[emailKey] = 'hungnk1@vnpay.vn';

var myFunction = function() {};
myObject['function'] = myFunction;
myObject['null'] = null;

console.log(myObject);

// Object contructor
var User = function(firstName, lastName, age) {
    this.name = `${firstName} ${lastName}`;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getName = function () {
        return this.name;
    }
}

var hung = new User('Hung', 'Nguyen', 18);
var john = new User('John', 'Doe', 20);
hung.avatar = 'https://www.google.com';
console.log(hung.constructor);

console.log(hung.getName());
console.log(john);

// Object prototype
User.prototype.getAvatar = function() {
    return this.avatar;
}
console.log(john.getAvatar());