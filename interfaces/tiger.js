"use strict";
exports.__esModule = true;
// create tiger class that implements animal
var Tiger = /** @class */ (function () {
    // create constructor
    function Tiger(isFriendly, name, age, isMale) {
        this.isFriendly = isFriendly;
        this.name = name;
        this.age = age;
        this.isMale = isMale;
    }
    return Tiger;
}());
exports.Tiger = Tiger;
// some quick tests
var niceTiger = new Tiger(true, "Tigger", 100, true);
var meanTiger = new Tiger(false, "Carole Baskin", 60, false);
console.log(niceTiger);
console.log(meanTiger);
