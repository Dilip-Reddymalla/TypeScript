export {}
// genral syntax of class in typescript
// class Device {
//     name = "LG";
//     price = 1000;
//     category = "electronics";

// }

// let d1 = new Device();
// let d2 = new Device();


// class Device{
//     Name: string;
//     Price: number;
//     Category: string;

//     constructor(name: string, price: number, category: string){
//         this.Name = name;
//         this.Price = price;
//         this.Category = category;
//     }
// } one way of writing class in typescript

// better way and typescript way of writing class in typescript

class Device{
    constructor(public Name: string, public Price: number, public Category: string){
    }
} // here in constructor we are declaring the properties and initializing them in one line

let d1 = new Device("LG", 1000, "electronics");
let d2 = new Device("Samsung", 2000, "electronics");


console.log(d1);
console.log(d2);

// access modifiers in typescript

class BottleMaker{
    constructor(public name: string, private price:number, protected category:string, readonly rating:number){}

    changeName(newName: string):void{
        this.name = newName;
    }
    changePrice(newPrice: number):void{
        this.price = newPrice;
    }
    changeCategory(newCategory: string):void{
        this.category = newCategory;
    }

}

let b1 = new BottleMaker("CocaCola", 100, "beverages", 4.5)
// b1.name = "Pepsi"; // public property can be accessed and modified
// b1.price = 200; // private property cannot be accessed outside the class
// b1.category = "soft drinks"; // protected property cannot be accessed outside the class
// b1.rating = 4.8; // readonly property cannot be modified outside the class

// correct way to modify

b1.changeName("Pepsi");
b1.changeCategory("soft drinks");
b1.changePrice(200);


console.log(b1);

class MetalBottleMaker extends BottleMaker {
    constructor(name: string, price: number, category: string, rating: number, public type: string){
        console.log("super constructor called");
        super(name, price, category, rating);
        console.log("MetalBottleMaker constructor call completed");
    }

    getCategory(): string{
        return this.category; // protected property can be accessed in derived class
    }
    // getPrice(): number{
    //     return this.price; // private property cannot be accessed in derived class
    // }
}

let mb1 = new MetalBottleMaker("Stainless Steel", 500, "beverages", 4.8, "metal");
console.log(mb1);
console.log(mb1.getCategory()); // protected property can be accessed in derived class



