//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


// Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", checkDelete);

//Functions

function checklength(element) {
  return element.value.length;
}

function addTodo(event) {
  // stop button submit refraishe

  event.preventDefault();

  // To-Do-Div
  if (checklength(todoInput) > 0) {
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo");

    // Create Li

    const newTodo = document.createElement("li");
    console.log(checklength(todoInput));
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    tododiv.appendChild(newTodo);
    todoInput.value = "";

    //check Mark Button

    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn-1");
    tododiv.appendChild(completeButton);

    //check trash Button

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    tododiv.appendChild(trashButton);

    // append to List all items

    todoList.append(tododiv);
  }
}

// function deleteCheck(e){
//     const item = e.target
    
//     if (item.classList[0] === "trash-btn") {
//         const todo = item.parentElement
//         console.log(item.classList)
//         todo.remove()
//     }
// }

function checkDelete(e){
    var element = document.getElementsByClassName("trash-btn")[0];
    const item = e.target
    // delete
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement
        console.log(item.classList)
        todo.remove()
    }
    // check
    if (item.classList[0] === "complete-btn-1") {
       const todo = item.parentElement;
       todo.classList.toggle("complete")
       console.log(item.classList)
       
   }
}
    

