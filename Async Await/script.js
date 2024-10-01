//Async - always returns a promise

async function fn(){
    return 'hello'
}
//console.log(fn());
//fn().then((message)=>console.log(message))


let reachA = new Promise((resolve,reject)=>{
    const reach = true;
    if(reach)
       setTimeout(resolve,2000,'Tamil reached');
    else 
       reject('Tamil not reached');   
})


async function asyncstatus(){
    try{ 
      console.log('Hi...');
      res = await reachA;
      console.log(res);
      console.log('bye');
    }
    catch(err){
        console.log(err);
    }

}
asyncstatus()


let tatkalBook = new Promise((resolve,reject)=>{
    let booking = true;
    if(booking)
       setTimeout(resolve,500,'Thanks bro! I have tranasferred RS.500')
    else
       setTimeout(reject,1000,'Thanks for trying! I will book a bus')
})

async function async(){
    try{ 
    result = await tatkalBook;
    console.log(result);
    }
    catch(err){
         console.log(err);
     }

}
async()

