// imports
import {Animal} from './animal';
import {Tiger} from './tiger';
import {Bunny} from './bunny';

// create zoo class
export class Zoo {
    city: string;
    catalogue: Animal[];

    // create constructor
    constructor(city: string){
        this.city = city;
        this.catalogue = [];
        
    }

    // create addAnimal method
    addAnimal(animal: Animal): void {
        console.log(animal.isFriendly);
        if (animal.isFriendly){
            this.catalogue.push(animal);
        }
    }
}

let niceTiger: Tiger = new Tiger(true, "Tigger", 100, true);
let meanTiger: Tiger = new Tiger(false, "Carole Baskin", 60, false);
let philadelphia: Zoo = new Zoo("Philadelphia");

let niceBunny: Bunny = new Bunny(true, 50, "Rabbit");

philadelphia.addAnimal(niceTiger)
console.log(philadelphia);
philadelphia.addAnimal(meanTiger)
console.log(philadelphia);




