let taskItems = [];

const listTask = (task) => {
  const list = document.querySelector(".js-task-list");

  const isComplete = task.complete ? "done" : "";

  const node = document.createElement("li");

  node.setAttribute("class", `task-item ${isComplete}`);
  node.setAttribute("data-key", task.id);

  node.innerHTML = `
    <input class= "checkbox" id="${task.id}" type="checkbox"/>
    <label for="${task.id}" class="check js-check"></label>
    <span>${task.text}</span>
    <button class="delete-task js-delete-task">
    <svg><use href="#delete-icon"></use></svg>
    </button>
  `;

  list.append(node);
};

const addTask = (text) => {
  const task = {
    text,
    complete: false,
    id: Date.now(),
  };
  taskItems.push(task);
  listTask(task);
};

let inputForm = document.querySelector(".input-form");
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputText = document.querySelector(".input-text");

  const text = inputText.value;
  if (text !== "") {
    addTask(text);
    inputText.value = "";
    inputText.focus();
  }
});
