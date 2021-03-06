// Let's create an album class


// What do we need to create a class and export it?

export class Album{
    // What fields do we need?
    bandName: string;
    albumName: string;
    year: number;
    isGood: boolean;

    // What goes in our constructor?
    constructor(artist: string, album: string, year: number, review: boolean){
        this.bandName = artist;
        this.year = year;
        this.albumName = album;
        this.isGood = review;
    }

    //What methods might we want?
    updateIsGood(review: boolean): boolean{
        return this.isGood = review;
    }


}

// How can we test it?
let letItBe: Album = new Album("Let it Be", "The Beatles", 1970, true);
console.log(letItBe);
letItBe.updateIsGood(false);
console.log(letItBe);