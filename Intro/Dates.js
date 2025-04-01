let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let newDate = new Date(2023, 0, 23);
let newDate = new Date(2023, 0, 23, 5, 3);
console.log(newDate.toLocaleString());

let a = Date.now();
console.log(a);
console.log(Math.floor(Date.now()/1000));
