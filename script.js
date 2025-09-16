// let title = document.getElementById('title');
// let description = document.getElementById('description');
// let button = document.getElementById('btn');

// let todos = [];

// button.addEventListener('click', () => {
//   if (!title.value || !description.value) {
//     alert('please enter the task details');
//   } else {
//     todos.push({
//       title: title.value,
//       description: description.value,
//     });
//   }

//   title.value = '';
//   description.value = '';

//   add();
// });

// function add() {
//   let todoList = document.getElementById('list-group');
//   todoList.innerHTML = ''; // clear old todos

//   todos.forEach((todo, index) => {
//     let item = document.createElement('div');
//     item.className = "todo-item";

//     let titleEl = document.createElement('h2');
//     titleEl.innerText = todo.title;

//     let descriptionEl = document.createElement('p');
//     descriptionEl.innerText = todo.description;

//     // ✅ Create remove button
//     let removeBtn = document.createElement('button');
//     removeBtn.innerText = "Remove";
//     removeBtn.style.marginLeft = "10px";
//     removeBtn.className = "btn btn-danger btn-sm";
//     removeBtn.addEventListener('click', () => {
//       // remove from array
//       todos.splice(index, 1);
//       // re-render list
//       add();
//     });

//     item.appendChild(titleEl);
//     item.appendChild(descriptionEl);
//     item.appendChild(removeBtn);
//     todoList.appendChild(item);
//   });
// }


let title = document.getElementById('title');
let description = document.getElementById('description');
let button = document.getElementById('btn');

let todos = [];

button.addEventListener('click', () => {
  if (!title.value || !description.value) {
    alert('please enter the task details');
  } else {
    todos.push({
      title: title.value,
      description: description.value,
      completed: false // ✅ track task status
    });
  }

  title.value = '';
  description.value = '';

  add();
});

function add() {
  let todoList = document.getElementById('list-group');
  todoList.innerHTML = ''; // clear old todos

  todos.forEach((todo, index) => {
    let item = document.createElement('div');
    item.className = "todo-item";

    let titleEl = document.createElement('h5');
    titleEl.innerText = 'Title:'+todo.title;
    titleEl.className ='my-2'

    let descriptionEl = document.createElement('p');
    descriptionEl.innerText ='Description:'+ todo.description;

    // ✅ Style completed tasks
    if (todo.completed) {
      titleEl.style.textDecoration = "line-through";
      descriptionEl.style.textDecoration = "line-through";
      titleEl.style.color = "gray";
      descriptionEl.style.color = "gray";
    }

    // Remove button
    let removeBtn = document.createElement('button');
    removeBtn.innerText = "Remove";
    removeBtn.className = "remove-btn btn btn-danger";
    
    removeBtn.addEventListener('click', () => {
      todos.splice(index, 1);
      add();
    });

    // ✅ Completed button
    let completeBtn = document.createElement('button');
    completeBtn.innerText = todo.completed ? "Undo" : "Completed";
    completeBtn.className = "complete-btn btn btn-success mx-3";
    completeBtn.addEventListener('click', () => {
      todos[index].completed = !todos[index].completed; // toggle
      add();
    });

    // Add to item
    item.appendChild(titleEl);
    item.appendChild(descriptionEl);
    item.appendChild(completeBtn);
    item.appendChild(removeBtn);

    todoList.appendChild(item);
  });
}
