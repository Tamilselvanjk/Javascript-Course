let json1 = 'Tamil';
let json2 = 19;
let json3 =true;
let json4 =[4,5,6,7,8];
let json5={
    "stock":"TCS",
    "price":3000
}

let json6 =`[
    {
        "stock":"HUL",
        "price":2000
    } ,   
    {
        "stock":"SBI",
        "price":1000
    }
]`

let parse = JSON.parse(json6);
console.log(parse[1].stock);
let parse1 = JSON.stringify(parse);
console.log(parse1);