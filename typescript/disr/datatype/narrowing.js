"use strict";
// Optional ?
// Narrowing
const showName = (firstName, lastName, midName) => {
    if (midName) {
        return firstName + " " + midName + " " + lastName;
    }
    return firstName + " " + lastName;
};
// Union type
// Narrowing typeof
const unionFunc = (a) => {
    if (typeof a === "string") {
        return parseInt(a);
    }
    return a;
};
console.log(unionFunc("10.11111"));
function login(user) {
    if ("role" in user) {
        console.log("Welcome to admin");
    }
    console.log("Welcome back");
}
// login(user)
//# sourceMappingURL=narrowing.js.map