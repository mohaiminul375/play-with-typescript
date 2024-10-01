"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return 'hello'
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
function getHello(s) {
    return "";
}
var heros = ['thor', 'spiderman', 'ironman'];
function consoleError(errmsg) {
    //  void won't permission to return a value 
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
var result = addTwo(2);
var result1 = getUpper('mohaiminul');
var result2 = signUpUser('Mohaiminul', 'mohaiminul375@gmail.com', true);
console.log(result);
console.log(result1);
