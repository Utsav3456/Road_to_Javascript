
function myFun(){
    console.log("UTSAV");
};

myFun();

function add(num1, num2){       // parameters
    console.log(num1 + num2);
};
// add(3, 4);                      // arguments
// add(3, "4");
// add(3, "a");
// add(3, null);

// const result = add(3, 5)
// console.log(result)       // undefined

function addnum(num1, num2){       
    let result = num1 + num2;
    return result;
};

const result = addnum(3, 5);
// console.log("Result: ", result);  // 8

function login(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(login("utsav"))
console.log(login())