"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    //num.toUpperCase();
    //return "hello";
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
getUpper("vadim");
signUpUser("Vadim", "fake@mail.ru", "123", false);
loginUser("h", "fake@mail.com");
// function getValue(myVal: number): string{
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK";
// }
var getHello = function (s) {
    return "" + s;
};
var heroes = ["thor", "spiderman", "ironman"];
//const heroes = [2, 1, 3];
//let mapheroes = heroes.map(hero => {
var mapheroes = heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
mapheroes.forEach(function (element) {
    console.log(element);
});
