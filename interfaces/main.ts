import { Tiger } from "./tiger";
import { Bunny } from "./bunny";
import { Zoo } from "./zoo";


let niceTiger: Tiger = new Tiger(true, "Tigger", 15);
let meanTiger: Tiger = new Tiger(false, "Meany", 12);

console.log(niceTiger);
console.log(meanTiger);

let niceBunny: Bunny = new Bunny(true, "Peter");
let meanBunny: Bunny = new Bunny(false, "Bitey");

console.log(niceBunny);
console.log(meanBunny);

let stLouis: Zoo = new Zoo("St. Louis");
stLouis.addAnimal(niceBunny);
stLouis.addAnimal(niceTiger);
stLouis.addAnimal(meanBunny);
stLouis.addAnimal(meanTiger);

console.log(stLouis);