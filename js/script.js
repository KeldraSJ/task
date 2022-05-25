let taskItems = [];

const addTask = (text) => {
  const task = {
    text,
    complete: false,
    id: Date.now(),
  };
  taskItems.push(task);
  console.log(taskItems);
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
