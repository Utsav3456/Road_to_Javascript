const accountId = 79;                 // fixed ( cannot be changed )
let accountEmail = "abc@gmail.com";   // variable ( can be changed )
var accountPassword = "123456";       // variable
accountCity = "Delhi";                // variable
let accountState;

// Prefer not to use (var) because of issue in block scope and functional scope
// Use (const) and (let)

// accountId = 2 (declaring other variable is not allowed when there is already const defined )
accountEmail = "xyz@gmail.com";
accountPassword = "789123";
accountCity = "Chandigarh";

// -- 1st Method to print Output -- //

/* console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
   console.log(accountCity); */

// -- 2nd Method to print output -- //

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


