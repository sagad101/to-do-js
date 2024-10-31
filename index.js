let input = document.getElementById(`input`);
let btn = document.getElementById(`btn`);
let toDoList = document.getElementById(`todo-list`);
let taskCountDisplay = document.getElementById("task-count");

let tasks = [];

function addTask() {
  let Html = `
  <div class="todo-item">
              <p>${input.value}.</p>
              <img onclick="removeTask(this)" src="close btn.png" alt="close" />
    </div>
    `;

  tasks.push(input.value);
  toDoList.insertAdjacentHTML(`afterbegin`, Html);
  input.value = ``;
  document.getElementById(`tasks-count`).innerHTML = `${tasks.length}`;
}

function removeTask(element) {
  let item = element.parentNode;
  toDoList.removeChild(item);
  document.getElementById(`tasks-count`).innerHTML = `${tasks.length}`;
}

btn.addEventListener(`click`, addTask);
