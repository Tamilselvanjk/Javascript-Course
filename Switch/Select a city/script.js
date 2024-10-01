/* 
'Tamilnadu': population = 4646732
             literacyRate = 90.20
             language = 'Tamil'
'Mumbai': population = 8443674
             literacyRate = 88.71
             language = 'Marathi'
'Kerala': population = 1244367
             literacyRate = 89.65
             language = 'Malayalam'
'Delhi':  population = 1679532
             literacyRate = 86.20
             language = 'Hindi' 
             
The indian city of kerala has a population of 89.65. Language spoken is malayalam and literacy rate is  89.65%.             
*/

const button = document.querySelector("button");
let resultdiv = document.createElement('div');
    resultdiv.id ='result';
    document.getElementById('wrapper').appendChild(resultdiv);

   

//Even listener
button.addEventListener('click',displayStats)
function displayStats(){
    
    const input = document.getElementById('input');
    const city = input.options[input.selectedIndex].value;
    let population = 0 , literacyRate = 0 , language = '' ; 
    switch(city){ 
        case 'Mumbai':
            population = 8443674
            literacyRate = 88.71
            language = 'Marathi'
            break
        case 'Tamilnadu':
            population = 4646732
            literacyRate = 90.20
            language = 'Tamil'
            break
        case 'Kerala':
            population = 1244367
            literacyRate = 89.65
            language = 'Malayalam'
            break
        case 'Delhi':
            population = 1679532
            literacyRate = 86.20
            language = 'Hindi' 
            break   

    }

    let text =`The indian city of ${city} has a population of ${population}.Language spoken is ${language} and literacy rate is ${literacyRate} %.`;
    
    document.getElementById('result').innerHTML= text;
}