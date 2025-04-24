// var c = 300;
let a = 300          // global variable  // global scope
if (true) {
    let a = 10;      // error because a is not defined outside the block
    const b = 20;    // error because b is not defined outside the block
    var c = 30;        // var should be avoided
    // console.log("Inner : ", a);   // block scope
}

// console.log(a);
// // console.log(b);
// console.log(c);      // output - 30

function one(){
    const username = "Utsav";
    
    function two(){
        const website = "Utsav.com";
        console.log(username);  
    }

    // console.log(website);   // error because website is not defined outside the block
    
    two();
};

// one();

if (true) {
    const username = "Utsav";
    if (username === "Utsav") {
        const website = "Utsav.com";
        // console.log(username + " " + website);  
    }
    // console.log(website);  // error because website is not defined outside the block
}

// console.log(username);  // error because username is not defined outside the block


// --------  Interesting example ----------- //   mini hoisting

function addone(num) {
    return num + 1;
}

addone(5);

const addTwo = function(num) {
    return num + 2;
}

addTwo(5);