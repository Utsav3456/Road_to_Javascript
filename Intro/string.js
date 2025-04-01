const name = "abc";
const age = 18;

// Old Method
// console.log(name + age + "marks");

// New Method

console.log(`Hello my name is ${name} and my age is ${age}`);

// Another way to declare string

const a = new String("HelloWorld");
console.log(a[2]);
console.log(a.length);
console.log(a.toUpperCase());
console.log(a.charAt(1));
console.log(a.indexOf("o"));
console.log(a.substring(0, 2)); // but actually it worked as (start, end-1)
console.log(a.slice(-8, 4));    // only work for negative indexing
console.log(a.replace("W", "T"));
console.log(a.includes("Utsav"));
console.log(a.includes("Hello"));

const b = "     Utsav    ";
console.log(b);
console.log(b.trim());   // used to remove blank space