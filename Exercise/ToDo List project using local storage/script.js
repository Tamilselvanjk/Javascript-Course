let btn = document.getElementById('add');
let input = document.getElementById('input');
let todoList = document.getElementById('todoList');

//Local storage,cookies
let todos= [];

window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo=> addtodo(todo))
    
}

btn.addEventListener('click',()=>{
    //array push input value
    todos.push(input.value)

    //input value adding para element
    addtodo(input.value)
    input.value = ' ';
    
    //localstorage full array change string
    localStorage.setItem('todos',JSON.stringify(todos))
})


function addtodo(todo){
    //create paragraph 
    let para = document.createElement('p')
    para.innerText = todo;
    todoList.appendChild(para)
    
    //single click
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo)
    })

    //double click
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)
    })

   // localStorage.clear()
}


function remove(todo){
    //array index value
    let index = todos.indexOf(todo);

    //linethrough first index value remove
    if(index > -1){
        todos.splice(index,1)
    }
    //localstorage remove index values
    localStorage.setItem('todos',JSON.stringify(todos))

}

