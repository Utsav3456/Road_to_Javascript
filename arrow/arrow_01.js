const user = {
    username: "Utsav",
    price: 999,
    welcomeMsg: function() {
        console.log(`${this.username} to ${this.price}`);  // this is used to access the object and also to refer the current context
        console.log(this);
    }
}

user.welcomeMsg();

user.username = "Sam";   // current object is changed
user.welcomeMsg();

console.log(this); // this is used to refer the global object, so it is empty in this case
