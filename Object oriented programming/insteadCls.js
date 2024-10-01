//E5 modules class does not use
function User(name,age){
    this.name=name;
    this.age=age;
    this.login=function(){
        console.log('you are logged in');
    }
}

let user1= new User('Jegan',54)
user1.login()

//login changed prototype
function User1(name,age){
    this.name=name;
    this.age=age;
}

User1.prototype.login =function(){
    console.log('hi',this.name);
    console.log("you are logged in");
}

let user2= new User1('Jegan',54)
user2.login()
