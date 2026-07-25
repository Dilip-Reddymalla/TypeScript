export{}

// type assertion

let a: any = "Hello World";

(a as string).toUpperCase(); // here we are asserting that a is of type string, so we can call the toUpperCase() method on it.

(a as number).toFixed(2); // here we are asserting that a is of type number, so we can call the toFixed() method on it.

//  other way
(<number>a).toFixed(2);

// Type casting
let b = Number("12");
console.log(typeof b); // number

// non null assertion operator

// if we are sure that a variable is not null or undefined, we can use the non-null assertion operator (!) to tell TypeScript that the variable is not null or undefined.

let c: string | null = "Hello World";
c!.toUpperCase(); // here we are asserting that c is not null, so we can call the toUpperCase() method on it.

// type guard -> these are used to narrow down the type of a variable within a conditional block. -> 

// 1) typeof 
if (typeof a === "string") {
    a.toUpperCase();
}

// 2) instanceof
class TvRemote{
    switchOff() {
        console.log("TV is switched off");
    }
}

class CarRemote{
    switchOff() {
        console.log("Car is switched off");
    }

}

const tv = new TvRemote();
const car = new CarRemote();

function switchOffRemote(device: TvRemote | CarRemote) {
    if(device instanceof TvRemote) {
        device.switchOff();
    } else if(device instanceof CarRemote) {
        device.switchOff();
    }
}