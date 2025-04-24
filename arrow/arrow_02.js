// function chai() {
//     let username = "Utsav";
//     console.log(this);
// }

// chai();



// ---------- Arrow function ---------- //

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// implicit return

// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => ( num1 + num2 );
const addTwo = (num1, num2) => ( {username: "Utsav"} );

console.log(addTwo(2, 3));
