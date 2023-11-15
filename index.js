const todoButton = document.querySelector("#todoButton");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
let data = [];

todoButton.addEventListener("click", function () {
  let value = todoInput.value;
  todoInput.value = "";
  data.push(value);

  const datas = data
    .reverse()
    .map(function (item, index, list) {
      return `<li class="list-group-item">
    ${item} <input type="checkbox" class="ms-5" >
  </li>`;
    })
    .join("");
  todoList.innerHTML = datas;
});
