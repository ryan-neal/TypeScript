"use strict";
exports.__esModule = true;
// create Bunny class that implement animal
var Bunny = /** @class */ (function () {
    // create constructor
    function Bunny(isFriendly, jumpHeight, name) {
        this.isFriendly = isFriendly;
        this.jumpHeight = jumpHeight;
        this.name = name;
    }
    return Bunny;
}());
exports.Bunny = Bunny;
// Let's create a bunny to make sure it works
var niceBunny = new Bunny(true, 2, "Rabbit");
var meanBunny = new Bunny(false, 5, "Vorpal");
console.log(niceBunny);
console.log(meanBunny);
