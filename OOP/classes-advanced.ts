export{}

// protected 

class bottleModifier {
    constructor(public name:string, protected price:number, private color:string) {}

    printPrice(){
        console.log(this.price)
    }
}

class bottle extends bottleModifier {
    constructor(name:string, price:number, color:string){
        super(name, price, color)
    }
    printPrice(){
        console.log(this.price)
    }
}

let b1 = new bottle("bottle1", 100, "blue")
let b2 = new bottle("bottle2", 200, "red")
b1.printPrice() // 100
b2.printPrice() // 200


//readonly
// class User{
//     constructor(public readonly name:string){}
//     // changeName(){
//     //     this.name = "new name";
//     // } this will give an error because name is readonly

// }

// let u1 = new User("user1")
// u1.changeName()

// optional properties

// class User{
//     constructor(public name:string, public age:number, public gender?:string){}
// } // now gender is optional

// let u1 = new User("user1", 20)
// let u2 = new User("user2", 25, "male") // gender is optional


// getters and setters

class User{
    constructor(public _name:string, public age:number, public gender?:string){}

    get name(){
        return this._name;
    }

    set name(value:string){
        this._name = value;
    }
} 

let u1 = new User("user1", 20)

// get function(){} -> getter function
// set function(value){} -> setter function

// static members

class kernel {
    static version = "1.0.0"

    static printRandomNumber(){
        console.log(Math.random())
    }
}

console.log(kernel.version) // 1.0.0
kernel.printRandomNumber() // random number

// abstract classes and methods

abstract class Animal {
    abstract makeSound():void; // abstract method

    move(){
        console.log("Moving...")
    }
}

class Dog extends Animal {
    makeSound():void {
        console.log("Woof!");
    }
}

let d1 = new Dog();
d1.makeSound() // Woof!
d1.move() // Moving...

// real world example of abstract class

abstract class payment {    
    abstract pay(amount:number):void;

    printReceipt(){
        console.log("Receipt printed")
    }
}

class creditCardPayment extends payment {
    pay(amount:number):void{
        console.log(`Paid ${amount} using credit card`)
    }
}

class UpiPayment extends payment {
    pay(amount:number):void{
        console.log(`Paid ${amount} using UPI`)
    }
}

let p1 = new creditCardPayment()
p1.pay(1000);
p1.printReceipt();

let p2 = new UpiPayment()
p2.pay(500);
p2.printReceipt();
