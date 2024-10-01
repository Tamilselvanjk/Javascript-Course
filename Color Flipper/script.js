let btn =document.getElementById("btn");
let wrap = document.getElementById("wrap");
let colortext = document.getElementById("color");
const hex =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]; 
    
//button add click    
btn.addEventListener('click',function(){ 
    let hexColor ="#";
    for(let i=1; i <=6 ; i++){
       hexColor += randHexValue()
    }
    wrap.style.backgroundColor = hexColor;
    colortext.innerHTML =hexColor;

}
)

function randHexValue(){
    let randomIndex = Math.floor(Math.random()*16)
    return hex[randomIndex]

}