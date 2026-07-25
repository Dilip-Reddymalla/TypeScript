// primitive data types

let a = 12; // number
let b = "Hello"; // string
let c = true; // boolean

// a = "hi"; // Error: Type 'string' is not assignable to type 'number'

// arrays

let arr = [1,2,3,4,5, "Hello"]; // array of numbers and strings

let arr2: number[] = [1,2,3,4,5]; // array of numbers
// let arr3: number[] = [1,2,3,4,5, "hi"]; // Error: Type 'string' is not assignable to type 'number' 

// Tuples

let arr3: [number, string] = [1, "Hello"]; // tuple of number and string

// enums - enumerations

enum statusCodes {
    SUCCESS = 200,
    NOT_FOUND = 404,
    UNAUTHORIZED = 401
}

statusCodes.SUCCESS; // 200



// any, unkown, void, null, undefined

let d; // now this is typw of any up to assignment of value

let e: unknown; // unknown type

e = 10; // valid
e = "Hello"; // valid

// e.toUpperCase(); // Error: Object is of type 'unknown'.

if(typeof e === "string") {
    e.toUpperCase(); // valid
}

// void

function abcd(): void{
    console.log("Hello");
}

// null

// when a search for a value that is not present, it returns null

// undefined

let f: undefined; // undefined type

// means declared but not assigned any value




