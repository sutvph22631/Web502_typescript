"use strict";
const app = document.querySelector("body");
// number
const so = [1, 2, 3];
//string
const chu = ["a", "b", "v"];
const so1 = [[1, 2, 3], [4, 5, 6]];
//tuples
const tuple = ["minh", "luong", 1];
console.log(tuple);
//enum
var STATUS;
(function (STATUS) {
    STATUS[STATUS["PEN"] = 100] = "PEN";
    STATUS[STATUS["BIEN"] = 101] = "BIEN";
    STATUS[STATUS["PHAT"] = 102] = "PHAT";
})(STATUS || (STATUS = {}));
const TRANGTHAI = STATUS.PEN;
console.log(TRANGTHAI);
var CODE;
(function (CODE) {
    CODE[CODE["HAT"] = 0] = "HAT";
    CODE[CODE["NHAY"] = 1] = "NHAY";
    CODE[CODE["MUA"] = 2] = "MUA";
})(CODE || (CODE = {}));
// Object declaration
// Object literal
const sinhvien = {
    name: "Nam Cuong",
    age: 20,
    // homeTown: "Van Con"
};
const sinhvien2 = {
    name: "Thành",
    age: 20,
};
// Example
var ROLE;
(function (ROLE) {
    ROLE[ROLE["STAFF"] = 0] = "STAFF";
    ROLE[ROLE["MANAGER"] = 1] = "MANAGER";
    ROLE[ROLE["USER"] = 2] = "USER";
})(ROLE || (ROLE = {}));
// // Properties
// interface User {
//     username: string,
//     password: string,
//     email: string,
// }
// // Methods
// interface User {
//     login: () => void,
//     logout: () => void
// }
// interface Admin extends User {
//     role: ROLE.MANAGER | ROLE.STAFF
// }
// type User = {
//     username: string,
//     password: string,
//     email: string,
//     login: () => void,
//     logout: () => void,
// }
// type Admin = User & {
//     role: ROLE.MANAGER | ROLE.STAFF
// }
//# sourceMappingURL=objecttype.js.map