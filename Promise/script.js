//The promise object represents the eventual completion(or failure)
//of a asychronous operation

function tatkalBook(){
    return new Promise((resolve,reject)=>{
        let bookingSucess = true;
        if(bookingSucess)
           resolve(500)
        else
            reject()  
    })
}

tatkalBook()
.then((amt)=>console.log(`Thanks buddy! I have transferred RS.${amt}`))
.catch(()=>console.log("Thanks for Trying will book a bus"))


function tossCoin(){
    return new Promise((resolve,reject)=>{
        //0-head (success) 1-tail(fail)
        const rand= Math.floor(Math.random())
        if(rand == 0)
           resolve()
        else
           reject()   
    })
}

tossCoin()
.then(()=>console.log("Congrats! Its head! You Won"))
.catch(()=>console.log("Sorry!You lost!Its tail"))


let reachA = new Promise((resolve,reject)=>{
    const reached = true;
    if(reached)
      setTimeout(resolve,3000,'Tamil reached')
    else
      reject('Tamil not reached')   
})

let reachB = new Promise((resolve,reject)=>{
    const reached = true;
    if(reached)
      setTimeout(resolve,2000,'Siva reached')
    else
      reject('Siva not reached')   
})
 
let reachC = new Promise((resolve,reject)=>{
    const reached = true;
    if(reached)
      setTimeout(resolve,1000,'Mahe reached')
    else
      reject('Mahe not reached')   
})

// Promise.all([reachA,reachB,reachC])
// .then((message)=>console.log(message))
// .catch((message)=>console.log(message))

// Promise.allSettled([reachA,reachB,reachC])
// .then((message)=>console.log(message))
// .catch((message)=>console.log(message))

// Promise.any([reachA,reachB,reachC])
// .then((message)=>console.log(message))
// .catch((message)=>console.log(message))

Promise.race([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))
