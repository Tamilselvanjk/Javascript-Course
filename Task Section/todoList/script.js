var ul = document.querySelector("#list-container")
var input = document.querySelector("#result")

function add() {
    var list = document.createElement("li")
    list.innerHTML = input.value + "<button onclick='del(event)'>delete</button> "
    ul.append(list)
}

function del(event) {
    event.target.parentElement.remove();
    input.value="";
}