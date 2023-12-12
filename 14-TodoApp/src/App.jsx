import  { useState } from 'react';
import './assets/App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [color, setColor] = useState('#f0f0f0');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    setTasks(tasks.filter(c=> c.toLowerCase().includes(searchInput.toLowerCase())));
  };
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  return (
    <div className="todoapp">
      <h1>Todo List</h1>
      <h2> ({tasks.length})</h2>
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <input
        type="text"
        value={searchInput}
        onChange={handleSearchChange}
        placeholder="Search"
      />
      <input
        type="color"
        onChange={handleColorChange}
      />
      <button onClick={addTask}>Add</button>
      <ul id="taskList">
        {tasks.map((task, index) => (
          <li key={index}  style={{ backgroundColor: color , textAlign: 'center'}}>
            {task} <button   style={{ backgroundColor: 'red'}} onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
