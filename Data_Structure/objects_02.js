const User = new Object();  // singleton object // empty object

// or // 

const newUser = {};  // non - singleton object  // empty object

User.id = "123abc";
User.name = "Utsav";
User.isLoggedIn = false;

// console.log(User);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {               // object inside object  // object nesting
        userfullname: {
            firstname: "Utsav",
            lastname: "Tyagi"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b", 3: "c"};
const obj2 = {3: "d", 4: "e", 5: "f"};

const obj3 = Object.assign({}, obj1, obj2);

// or // 

const obj4 = {...obj1, ...obj2};  // spread operator

console.log(obj3);
console.log(obj4);