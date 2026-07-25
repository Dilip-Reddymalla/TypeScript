export {};
let a: number = 1; // type annotation

//  type inference
// if the type of the variable is not defined then typescript will automatically infer the type using the assigned value 

// type annotation

function add(a:number, b:number):number {return 0} // -> this function takes only numbers and return only numbers

// object type annotation

let student: {
    name:string;
    rollNo:number;
} = {
    name: "John",
    rollNo: 123
}// it sets the type of the student variable to an object with name and rollNo properties of type string and number respectively

interface Student {
    name: string;
    rollNo: number;
}

let student1: Student = {
    name: "John",
    rollNo: 123
} // it sets the type of the student1 variable to an object with name and rollNo properties of type string and number respectively using interface

// using interface and selecting a type of an object is equal to object type annotation

// but using interface is better because it can be reused and extended


// interfaces and type aliases


interface User {
    name: string,
    email: string,
    password: string,
    age ?: number // optional property

}

function createUser(user: User){
    console.log(user.name);
}

createUser({
    name: "John",
    email: "example@gmail.com",
    password: "123456",
    // role: "admin" // -> this will throw an error because the role property is not defined in the User interface
})

createUser({
    name: "doe",
    email: "example@gmail.com",
    password: "123456",
    age: 25,
})


interface Admin extends User {
    admin: boolean,
}

function createAdmin(admin: Admin){
    console.log(admin.name);
}

createAdmin({
    name: "admin",
    email: "example@gmail.com",
    password: "123456",
    admin: true
});


interface Abcd {
    name: string,
}
interface Abcd{
    email: string,
}

function createAbcd(abcd: Abcd){
    console.log(abcd.name);
    console.log(abcd.email);
} // -> this will work because the interface is merged and now it has both name and email properties



// type aliases

type userPassword = string | number; // -> this type alias can be used to define a variable that can be either a string or a number

let password: userPassword = "123456"; // password can be a string or a number



// union and intersection types
 
// | -> union type -> a variable can be of multiple types

// & -> intersection type -> a variable can be of multiple types but it must have all the properties of the types

interface A {
    name: string,
}
type B = A & {
    email: string,
}

function createB(b: B){
    console.log(b.name);
    console.log(b.email);
}
