import React, { useState } from 'react';

function ComplitTask() {
  const [tasks, setTasks] = useState([
    { task: 'Read the project brief', completed: true },
    { task: 'Create a project repository', completed: false },
    { task: 'Create React application using Vite', completed: false },
    { task: 'Finish Day 1 Development Tasks', completed: false }
  ]);

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item.task} - {item.completed ? '✅' : '❌'}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComplitTask;
