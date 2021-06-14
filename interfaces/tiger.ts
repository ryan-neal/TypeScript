// imports
import { Animal } from './animal';

// create tiger class that implements animal
export class Tiger implements Animal{
    isFriendly: boolean;
    name: string;
    age: number;
    isMale: boolean;

    // create constructor
    constructor(isFriendly: boolean, name: string, age: number, isMale: boolean){
        this.isFriendly = isFriendly;
        this.name = name;
        this.age = age;
        this.isMale = isMale;
    }
    
}

// some quick tests
let niceTiger: Tiger = new Tiger(true, "Tigger", 100, true);
let meanTiger: Tiger = new Tiger(false, "Carole Baskin", 60, false);

console.log(niceTiger);
console.log(meanTiger);