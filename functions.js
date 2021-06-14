// Great! Now let's create a function to add albums to an empty array;
var albums = [];
// What do we need?
function addAlbum(album) {
    albums.push(album);
}
function addAlbums(album) {
    var albums2 = [];
    albums2.push(album);
    return albums2;
}
// How can we test if it works?
console.log(addAlbum('The Beatles'));
console.log(albums);
console.log(addAlbums('The Beatles'));
