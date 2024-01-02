var Customer = /** @class */ (function () {
    // Cant define empty constructor
    function Customer(first, last) {
        this.firstname = first;
        this.lastname = last;
    }
    // Defining the getter and setter method for firstname property
    Customer.prototype.getFirstName = function () {
        return this.firstname;
    };
    Customer.prototype.setFirstName = function (first) {
        this.firstname = first;
    };
    Object.defineProperty(Customer.prototype, "email", {
        get: function () {
            return this._email;
        },
        // set property can't have return type 
        set: function (_setEmail) {
            this._email = _setEmail;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
// Removing the boiler plate code
var Person = /** @class */ (function () {
    function Person(_name, _email) {
        this._name = _name;
        this._email = _email;
    }
    Object.defineProperty(Person.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (setEmail) {
            this._email = setEmail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (setName) {
            this._name = setName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var newcs = new Customer('martin', 'dickson');
console.log(newcs.getFirstName);
console.log(newcs.lastname);
console.log('JS file is generated even when there is compilation error');
console.log('To present this generatio use tsc --noEmitOnError customer.ts');
newcs.setFirstName('Jerry');
var p1 = new Person('John', 'joh@gmail.com');
console.log(p1.name);
