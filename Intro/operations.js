let value = 3;
let negValue = -value;
console.log("Value = ",negValue);

console.log("Sum = ", 2 + 2);
console.log("Subtract = ", 2 - 2);
console.log("Multiply = ", 2 * 2);
console.log("Power = ", 2 ** 3);
console.log("Divide = ", 2 / 2);
console.log("Remainder = ", 3 % 2);

let x = 2;
let y = 2;

// Returns the value first, then increments
console.log("Postfix = ", x++); // or (x--) It first stores the value and then increment it. 
console.log("x = ", x);

// Increments first, then returns the updated value
console.log("Prefix = ", ++y);  // or (--y) It first increments the value and then store it. 

let str1 = "Hello";
let str2 = " Utsav";
let str3 = str1 + str2;
console.log(str3);

// -- tricky conversions -- //

console.log("1" + "2");     // Output - 12 
console.log("1" + 2);       // Output - 12 
console.log(1 + "2");       // Output - 12 
console.log(1 + 3 + "2");   // Output - 42 
console.log("1" + 3 + 2);   // Output - 132

// NOTE- If the 1st argument is string , then the whole is treated as a string

