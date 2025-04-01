/* 
   There are 2 types of memory ( stack and heap )

   Stack (Primitive) and Heap (non-primitive)

   Primitive Datatypes - string, number, bigInt, Boolean, undefined, Null, and symbol 
   
   Non-primitive Datatypes - array, object, function, date and RegExp  
*/

// Stack Memory - it copies the value means, it doesn't change the original value just take its copy

let a = "Hello";
let b = a;
b = "World";
console.log("a = ", a);
console.log("b = ", b);

// Heap Memory - it copies the reference means, it changes the original value

let user_1 = {
   name: "abc",
   age: 18
};
let user_2 = user_1;
user_2.name = "xyz";
console.log("user_1 = ", user_1.name);
console.log("user_2 = ", user_2.name);
