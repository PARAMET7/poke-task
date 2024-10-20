import React from 'react';
import ListItem from './ListItem';

function List({ tasks, onDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <ListItem key={task.task} task={task} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default List;
