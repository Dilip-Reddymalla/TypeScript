export{}

// functions

// function types

// funtion as an parameter

function abcd(name:string, age:number, cb: (arg:string)=> void):void{
    cb(name);
}

abcd("hello", 20, (arg:string)=>{
    console.log(arg);
})


//  ? -> optional parameters
//  default parameters -> gender:string = "prefer not to say" -> its sets given value if the parameter is not passed

// Rest parameters
//  ... -> rest/spread operator

function sum(...numbers:number[]):number{
    return numbers.reduce((acc, curr)=> acc + curr, 0);
}

sum(1, 2, 3, 4, 5) // 15

// ... -> will take all the parameters passed to the function and put them in an array called numbers -> it copies all the args 

let arr1 = [1,2,3,4,5]
let arr2 = [...arr1]

arr2[1] = 10

console.log(arr1) // [1,2,3,4,5]
console.log(arr2) // [1,10,3,4,5] -> arr2 is a copy of arr1


// overloading

function add(a:number, b:number): number;
function add(a:string, b:string): string;

function add(a:any, b:any): any{
    if(typeof a === "number" && typeof b === "number"){
        return a + b;
    }
    if(typeof a === "string" && typeof b === "string"){
        return a + b;
    }
    else
        throw new Error("Invalid arguments");
}

add(1, 2) // 3
add("hello", " world") // hello world