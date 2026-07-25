export{}

// generics allow us to create reusable components that can work with a variety of types rather than a single one. This allows users to consume these components and use their own types.

function log<T>(arg: T) {
    console.log(arg);
}
log<string>("Hello World");
log<number>(100);

log("Hello World");
log(100);

interface User<T>{
    name: string;
    age: number;
    key: T
}

function addUser(obj: User<Number>){
    console.log(obj);
}

addUser({name:"user1",age:20,key:1});


// 1) generic functions

function add<T>(a:T,b:T):void{
    console.log("a is type of ",typeof(a),"\n","b is type of ",typeof(b));
}

function print<T,K>(a:T,b:K):void{
    console.log("a is type of ",typeof(a),"\n","b is type of ",typeof(b));
}

add<number>(10,20);
add<string>("Hello ", "world");

// 2) generic interfaces

interface interface1<T>{
    key:T;
}

interface interface2<T,K>{
    key1:T,
    key2:K,
}

function printInterfaces(obj: interface1<number> | interface2<string,number>):void
{
    console.log(obj)
}

printInterfaces({key:1});
printInterfaces({key1:"1",key2:2});



