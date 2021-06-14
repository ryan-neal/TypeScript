// Maybe we will need to import something
import { Album } from './album';

// Now let's create an album catalogue. How do we create the class?
class Catalogue{
    // What properties do we need?
    name: string;
    catalogue: Album[];

    // How do we create an instance?   
    constructor(name: string){
        this.name = name;
        this.catalogue = [];
    }

    // How can we add albums?
    addAlbum(album: Album): void { 
        this.catalogue.push(album);
    }
    

}


// How can we test it?
let myCatalogue = new Catalogue("Ryan's albums");
console.log(myCatalogue)
let letItBe: Album = new Album("The Beatles", "Let it Be", 1970, true);
myCatalogue.addAlbum(letItBe);
let bandOfGypsies: Album = new Album("Jimi Hendrix", "Band of Gypsies", 1970, true);
myCatalogue.addAlbum(bandOfGypsies);
let recipeForHate: Album = new Album("Bad Religion", "Recipe For Hate", 1993, true);
myCatalogue.addAlbum(recipeForHate);
console.log(myCatalogue)


