let ampm = document.getElementById('ampm')
function displayTime(){
let dataTime = new Date();
let hours = dataTime.getHours();
let min= dataTime.getMinutes();
let sec = dataTime.getSeconds();

if(hours > 12){
    hours = hours-12;
    ampm.innerHTML='PM'
}

document.getElementById('hours').innerHTML=padZero(hours);
document.getElementById('minutes').innerHTML=padZero(min);
document.getElementById('seconds').innerHTML=padZero(sec);


function padZero(num){
    return num<10? '0'+ num:num
}

}

setInterval(displayTime,500)

function displayDate(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    document.getElementById('day').innerHTML=addZero(day);
    document.getElementById('month').innerHTML=addZero(month);
    document.getElementById('year').innerHTML=year;

    function addZero(num){
        return num<10? '0'+ num:num
    }
    

}

setInterval (displayDate,500)