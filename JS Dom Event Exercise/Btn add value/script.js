//selecting input box1
//selecting input box2
var box1 = document.getElementById("num1")
var box2 = document.getElementById("num2")
//selection result
var result = document.getElementById("Result")



function add() {
    var box1value = Number(box1.value)
    var box2value = Number(box2.value)

    var total = box1value + box2value
    result.textContent = total
}