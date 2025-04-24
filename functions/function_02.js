function calculate(num1) {
    return num1;
};

console.log(calculate(2));
console.log(calculate(2, 3, 4));  // it will only print (2) as a output

// But if we want to print all the values, then use rest/spread operator //

function calculate_2(...num2) {    // ... = rest operator 
    return num2;
};

console.log(calculate_2(2, 3, 4));  // print an array as a output

function calculate_3(val1, val2, ...num3) {
    return num3;
};

console.log(calculate_3(2, 3, 4, 5, 6, 7));  // here val1 = 2, val2 = 3 and rest is an array which is stored in num3 num3

const user = {
    username: "Utsav",
    price: 199
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
};

// handleObject(user);
handleObject(
    {
        username: "sam",
        price: 399
    }
);

const arr = [34, 45, 23, 67];

function value(getArray){
    return getArray[1]
};

console.log(value(arr));
