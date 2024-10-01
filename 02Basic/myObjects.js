"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Mohaiminul",
    email: 'ex@gmail.com',
    isActive: true
};
// wired behaviour
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: 'Mohaiminul', isPaid: true, email: 'ex@gmail.com' };
createUser(newUser);
function createCourse() {
    return { name: 'js', price: 90 };
}
