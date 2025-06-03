// Grab elements
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add item on button click
addBtn.addEventListener('click', () => {
  const task = input.value.trim();
  if (task === '') return;

  const li = document.createElement('li');
  li.textContent = task;

  // Optional: click to remove
  li.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  todoList.appendChild(li);
  input.value = '';
});
