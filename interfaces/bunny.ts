// import 
import { Animal } from './animal'

// create Bunny class that implement animal
export class Bunny implements Animal {
    isFriendly: boolean;
    jumpHeight: number;
    name: string;

    // create constructor
    constructor(isFriendly: boolean, jumpHeight: number, name: string){
        this.isFriendly = isFriendly;
        this.jumpHeight = jumpHeight;
        this.name = name;
    }
    
}


// Let's create a bunny to make sure it works
let niceBunny: Bunny = new Bunny(true, 2, "Rabbit");
let meanBunny: Bunny = new Bunny(false, 5, "Vorpal");

console.log(niceBunny);
console.log(meanBunny);