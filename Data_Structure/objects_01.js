// singleton
// object.create

// object literals 

const mySym = Symbol("key1");

const JsUSer = {
    name: "Utsav",
    "full name": "Utsav Tyagi",
    age: 18,
    location: "Delhi",
    email: "abc@gmail.com",
    [mySym]: Symbol("mykey1"), // []square brackets are necessar to declare symbol
};

console.log(JsUSer.email);
console.log(JsUSer["email"]);
console.log(JsUSer["full name"]);
console.log(JsUSer[mySym]);

JsUSer.email = "xyz@gmail.com";

// to freeze an object

// Object.freeze(JsUSer); // now you cannot change the value of JsUSer
JsUSer.email = "utsav@gmail.com";
console.log(JsUSer);

JsUSer.greeting = function () {
    console.log("Hello JS user");
};

JsUSer.greeting_2 = function () {
    console.log(`Hello JS user`,`${this.name}`);
};

console.log(JsUSer.greeting()); // undefined
console.log(JsUSer.greeting_2()); // undefined
