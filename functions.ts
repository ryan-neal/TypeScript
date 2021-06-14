// Great! Now let's create a function to add albums to an empty array;
let albums: string[] = [];

// What do we need?
function addAlbum(album: string): void {
    albums.push(album);
}

function addAlbums(album: string): string[] {
    let albums2: string[] = [];
    albums2.push(album);
    return albums2;
}

// How can we test if it works?
console.log(addAlbum('The Beatles'));
console.log(albums);
console.log(addAlbums('The Beatles'));

