let buttonStart =document.getElementById('btn-start')
let buttonStop =document.getElementById('btn-stop')
let buttonReset =document.getElementById('btn-reset')

//variables
let second = 0;
let tens   = 0;
let min    = 0;
let timer;

//Event Listeners
buttonStart.addEventListener('click',function(){
    if(!timer){  
       timer = true;
       stopWatch();
    }
    
});

buttonStop.addEventListener('click',function(){
    timer = false;
})

buttonReset.addEventListener('click',function(){
    timer = false;
    second=0;
    tens=0;

    document.getElementById('seconds').innerHTML='00';
    document.getElementById('tens').innerHTML='00';
    document.getElementById('minutes').innerHTML='00';
    
})

//function
function stopWatch(){
    if(timer){
        tens++;

        if(tens == 100){
            second++;
            tens = 0;
        }

        if(second == 60){
            min++
            second=0
        }

       document.getElementById('seconds').innerHTML=padZero(second)
       document.getElementById('tens').innerHTML =padZero(tens)
       document.getElementById('minutes').innerHTML=padZero(min)
    }
        setTimeout(stopWatch, 10)
}   


function padZero(num){
    return num < 10 ? '0' + num : num;
}



