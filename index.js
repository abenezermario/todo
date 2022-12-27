function elemnets() {
  const addBtn = document.getElementById("addBtn");
  const todoContainer = document.getElementById("todo-container");
  const todoInput = document.getElementById("todo-input");

  return {
    addBtn,
    todoContainer,
    todoInput,
  };
}

function addTodo() {
  const { todoInput, todoContainer } = elemnets();

  if (todoInput.value) {
    let btn = document.createElement("button");
    let id = new Date().getTime();
    let li = document.createElement("li");
    let todoText = document.createElement("h2");

    li.classList.add("todo-item");
    li.setAttribute("id", id);
    todoText.innerHTML = todoInput.value;
    btn.classList.add("deleteBtn");
    btn.innerHTML = `<ion-icon size="large" name="trash-outline"></ion-icon>`;

    btn.addEventListener("click", () => {
      deleteTodo(id);
    });
    li.appendChild(todoText);
    li.appendChild(btn);
    todoContainer.appendChild(li);
  }

  todoInput.value = "";
}

function deleteTodo(id) {
  const { todoContainer } = elemnets();

  todoContainer.removeChild(document.getElementById(id));
}
