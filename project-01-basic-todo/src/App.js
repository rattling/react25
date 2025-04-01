import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput('');
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>My Todo App</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTask()}
        placeholder="What do you need to do?"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, i) => (
          <li
            key={i}
            onClick={() => toggleTask(i)}
            style={{
              textDecoration: task.done ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
