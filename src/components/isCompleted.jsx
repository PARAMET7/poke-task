import React from 'react';

function ComplitTask({ tasks, toggleTask }) {
  return (
    <div className="task-list">
      <ul>
        {tasks.map((task, index) => (
          <li key={task.id} className="task-item">
            <button
              className="task-button"
              style={{ cursor: 'pointer', padding: '10px', margin: '5px', border: 'none', background: task.isCompleted ? 'lightgreen' : 'lightcoral', color: 'white', borderRadius: '5px' }}
              onClick={() => toggleTask(index)} // Handle click to toggle completion
            >
              {task.title} {task.isCompleted ? '✅' : '❌'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComplitTask;

