//call-function passed as arguments
function greetConsole(name){
    console.log("hello" ,name);
}

function greetHeading(name){
    const head = document.querySelector("h1")
    head.innerHTML ='hello '+name
}

function greet(callback){
    callback("tamil")
}

greet(greetConsole)
greet(greetHeading)

//FoEach 
arr=['ECE','IT','AI&DS','CSE']

        arr.forEach(val => {
            const head2= document.querySelector('h2');
            const opt = document.createElement('option')
            opt.textContent=val;
            opt.value=val;
            document.getElementById("branch").appendChild(opt)
        });
        
        //Add event listener to the select element
        document.getElementById("branch").addEventListener('change',function()
        {
            const selectedOption =this.options[this.selectedIndex].textContent;
            document.querySelector('h2').textContent=selectedOption;

             console.log(selectedOption);
        })
       
        
