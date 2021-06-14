"use strict";
exports.__esModule = true;
// Maybe we will need to import something
var album_1 = require("./album");
// Now let's create an album catalogue. How do we create the class?
var Catalogue = /** @class */ (function () {
    // How do we create an instance?   
    function Catalogue(name) {
        this.name = name;
        this.catalogue = [];
    }
    // How can we add albums?
    Catalogue.prototype.addAlbum = function (album) {
        this.catalogue.push(album);
    };
    return Catalogue;
}());
// How can we test it?
var myCatalogue = new Catalogue("Ryan's albums");
console.log(myCatalogue);
var letItBe = new album_1.Album("The Beatles", "Let it Be", 1970, true);
myCatalogue.addAlbum(letItBe);
var bandOfGypsies = new album_1.Album("Jimi Hendrix", "Band of Gypsies", 1970, true);
myCatalogue.addAlbum(bandOfGypsies);
var recipeForHate = new album_1.Album("Bad Religion", "Recipe For Hate", 1993, true);
myCatalogue.addAlbum(recipeForHate);
console.log(myCatalogue);
