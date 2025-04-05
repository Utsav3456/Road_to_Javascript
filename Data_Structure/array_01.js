const arr = [34, 56, 78, 45, 67];
const arr2 = ["Utsav", 79, true, -3, null];

// or //

const arr3 = new Array(1, 2, 3, 4);

console.log(arr);
console.log(arr[2]);
console.log(arr2);
console.log(arr2[3]);

// Array Methods //

arr.push("Hello");
arr.push("World");
arr.pop();          // removes the last element
arr.unshift(-2);    // add element at the start of the array but not suitable for optimization
arr.shift();        // removes the first element 

console.log(arr.includes(78));
console.log(arr.indexOf(78));

console.log(arr);

// slice and splice //

console.log("A ", arr);
const my1 = arr.slice(1, 3);   // 
console.log(my1);

console.log("B ", arr);
const my2 = arr.splice(1, 3);
console.log(my2);

console.log("C ", arr);