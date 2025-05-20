let user ={
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName(){
        return this.firstName + " " + this.lastName;
    },
    isMajor(){
        return this.age >= 18;
    }
}
console.log(user);
console.log(user.fullName());
console.log(user.isMajor());
