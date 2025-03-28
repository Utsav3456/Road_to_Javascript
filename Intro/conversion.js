let score = 33;   // it's a number
let marks = "33"; // it's a string 

//console.log(typeof score);
console.log(typeof marks);  // or console.log(typeof (marks));

// -- String to number conversion -- //

let a = Number(marks);  // always write the first letter capital (e.g. Number, Boolean, etc.)
console.log(typeof a);
console.log(a);


// -- Output of Conversion -- //

// "33"       => 33  ( string converted into number)
// "33abc"    => NaN 
// true       => 1
// false      => 0
// null       => 0
// undefined  => NaN 

let name = "Utsav";
let b = Boolean(name);
console.log(b);

// -- Output of Conversion -- //

// 1        => true
// 0        => false
// "utsav"  => true
// "123abc" => true
// ""       => false

let someNumber = 79
let c = String(someNumber);
console.log(c);
console.log(typeof c);
