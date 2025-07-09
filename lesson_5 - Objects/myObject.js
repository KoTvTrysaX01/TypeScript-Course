"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Vadim",
    email: "myemail@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Vadim", isPaid: true, email: "example@.com" };
// createUser({name: "Vadim", isPaid: false});
createUser(newUser);
function createCourse() {
    return { name: "reactts", price: 15 };
}
