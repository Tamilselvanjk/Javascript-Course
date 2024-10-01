import Car,{fillGas as fill,repair} from './car.js';

let car1 = new Car();
car1.drive();
fill()

let user1 ={
    name:"Tamil",
    age:19 ,
    
    login(){
        console.log('Hi',this.name);
        console.log("your are logged in");
    },
    
    logout(){
        
        console.log("your are logged out");
    }
}

user1.login()

//Class is template of properties and method

class user {
    constructor (name,age){
        this.name=name;
        this.age =age;
    }
     
    login(){
        console.log('Hi',this.name);
        console.log("your are logged in");
    }
    
    logout(){
        
        console.log("your are logged out");
    }
}
let userOne= new user("siva",19);
console.log(userOne);

//Example
class Account{
    constructor(AccountNo,Name){
        this.accountNo=AccountNo;
        this.name=Name;

    }
     
    Transfer(){
        console.log('Hi',this.name);
        console.log("your are Trasfer amount");
    }
    
    checkBalance(){
        
        console.log("your are checkBalance amount");
    }
}
let accountOne= new Account(7842189387498,"mahe")
console.log(accountOne);

//string convert object
let music =new String('Arr')
console.log(music);

//Static - Common variable/method for class accessed with class name

class User {
    static numberOfUsers = 0;
    constructor(name,age){
        //base class , parent class, super class 
        //instance variables
        this.name =name;
        this.age =age;
        User.numberOfUsers++
    }
    login(){
        console.log("your are logged in");
    }
    
    logout(){
        
        console.log("your are logged out");
    }
}
let UserOne = new User("siva",19)
let UserTwo = new User("tamil",19)
let UserThree = new User("lax",17)
console.log("No of Users",User.numberOfUsers);

class user2 {
    static numberOfUsers=0;
    constructor(name,age){
        this.name =name;
        this.age =age;
        user2.numberOfUsers++
    }
    login(){
        console.log("your are logged in");
    }
    
    logout(){
        
        console.log("your are logged out");
    }
    static displayTotalUsers(){
        console.log('Total no of user is '+ user2.numberOfUsers);
    }
}
let User1 = new user2("jegan",40)
let User2 = new user2("mahe",25)
let User3 = new user2("mahu",20)
let User4 = new user2("pradeep",21)

user2.displayTotalUsers()

//inheritance - acquiring properties of a base class

//derived class,child class,sub class

class paidUser extends User{
    constructor(name,age){
        super(name,age);
        this.storage=100;
    }
    
    message(){
        console.log('you have 100GB free storage');
    }
    //overriding
    login(){
        console.log('Thank you for your support');
        //chainMethod use (return this) message;
        return this;
    }
}
let paidUser1 = new paidUser('kavitha',30)
paidUser1.login()
paidUser1.message()

//chaining Method
paidUser1.login().message()


//Get and Set

class Temprature {
    constructor(temp){
        this._temp = temp
    }
    get temp(){
        return `${this._temp} deg celcius`
    }
    set temp(temp){
        if(temp > 100)
          temp = 100
        this._temp = temp  
    }
}
let temp1= new Temprature(25)
temp1.temp = 150;
console.log(temp1.temp);