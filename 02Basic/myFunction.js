"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(value) {
    return value.toLocaleUpperCase(); //method won't suggest if didn't define type of value
}
function signUpUser(name, email, isPaid) {
    var userInfo = {
        name: name,
        email: email,
        isPaid: isPaid
    };
    return userInfo;
}
function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    // set default value in argument
}
loginUser('mmm', 'mm');
var result = addTwo(2);
var result1 = getUpper('mohaiminul');
var result2 = signUpUser('Mohaiminul', 'mohaiminul375@gmail.com', true);
console.log(result);
console.log(result1);
