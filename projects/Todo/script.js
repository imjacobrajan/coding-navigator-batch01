const todoInput = document.getElementById("todoInput");
const addButton = document.querySelector("button");
const searchInput = document.getElementById("searchInput");
const todoList = document.getElementById("todoList");

let todos = [];

const renderTodo = (filteredTodos = todos) => {
  console.log(filteredTodos);
  todoList.innerHTML = "";

  filteredTodos.forEach((todo, index) => {
    const li = document.createElement("li");

    const todoText = document.createElement("span");
    todoText.textContent = todo.input;

    const actions = document.createElement("div");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editTodo(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTodo(index);

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(todoText);
    li.appendChild(actions);

    todoList.appendChild(li);
  });
};

const addTodo = () => {
  let input = todoInput.value.trim();

  if (input) {
    todos.push({
      input,
      complete: false,
    });
  }
  saveTodos();
  renderTodo();
  todoInput.value = "";
};

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const editTodo = (index) => {
  const newText = prompt("Edit Todo", todos[index].input);

  todos[index].input = newText.trim();
  saveTodos();
  renderTodo();
};

const deleteTodo = (index) => {
  if (confirm("Do you want to delete this Todo")) {
    todos.splice(index, 1);
    saveTodos();
    renderTodo();
  }
};

function searchTodos() {
  const searchText = searchInput.value.toLowerCase();
  console.log(searchText);
  const filteredTodos = todos.filter((todo) =>
    todo.input.toLowerCase().includes(searchText)
  );

  console.log(filteredTodos);
  renderTodo(filteredTodos);
}
