"use strict";
exports.__esModule = true;
var tiger_1 = require("./tiger");
// create zoo class
var Zoo = /** @class */ (function () {
    // create constructor
    function Zoo(city) {
        this.city = city;
        this.catalogue = [];
    }
    // create addAnimal method
    Zoo.prototype.addAnimal = function (animal) {
        console.log(animal.isFriendly);
        if (animal.isFriendly) {
            this.catalogue.push(animal);
        }
    };
    return Zoo;
}());
exports.Zoo = Zoo;
var niceTiger = new tiger_1.Tiger(true, "Tigger", 100, true);
var meanTiger = new tiger_1.Tiger(false, "Carole Baskin", 60, false);
var philadelphia = new Zoo("Philadelphia");
philadelphia.addAnimal(niceTiger);
console.log(philadelphia);
philadelphia.addAnimal(meanTiger);
console.log(philadelphia);
