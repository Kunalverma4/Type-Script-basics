"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'welcome back';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'title';
var isBeginner = true;
var total = 0;
var name = 'kunal';
var sentence = "my name is ".concat(name, "\ni am a beginner in type script");
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['kunal', 23];
var color;
(function (color) {
    color[color["red"] = 5] = "red";
    color[color["green"] = 6] = "green";
    color[color["blue"] = 7] = "blue";
})(color || (color = {}));
;
var c = color.blue;
console.log(c);
var randomvalue = 10;
randomvalue = true;
randomvalue = 'kunal';
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        'name' in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
var A = add(2);
console.log(A); // answer 12
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var i = {
    firstName: 'kunal',
    lastName: 'verma'
};
fullName(i);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("good morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('kunal');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('manager delegating tasks');
    };
    return Manager;
}(Employee));
var m1 = new Manager('bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
