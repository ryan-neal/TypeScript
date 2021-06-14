"use strict";
// Let's create an album class
exports.__esModule = true;
// What do we need to create a class and export it?
var Album = /** @class */ (function () {
    // What goes in our constructor?
    function Album(artist, album, year, review) {
        this.bandName = artist;
        this.year = year;
        this.albumName = album;
        this.isGood = review;
    }
    //What methods might we want?
    Album.prototype.updateIsGood = function (review) {
        return this.isGood = review;
    };
    return Album;
}());
exports.Album = Album;
// How can we test it?
var letItBe = new Album("Let it Be", "The Beatles", 1970, true);
console.log(letItBe);
letItBe.updateIsGood(false);
console.log(letItBe);
