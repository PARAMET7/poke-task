import React from 'react';

function ListItem({ task, deleteTask }) {
  return (
    <div className="task-item">
      <span>{task.task}</span>
      <span>{task.completed ? '✔️' : '❌'}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default ListItem;
