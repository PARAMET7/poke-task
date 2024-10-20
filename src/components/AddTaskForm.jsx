import React, { useState } from 'react';

function AddTaskForm({ addTask }) {
  const [taskTitle, setTaskTitle] = useState('');

  const handleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask({ title: taskTitle, isCompleted: false });
      setTaskTitle(''); // Reset the input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={taskTitle}
        onChange={handleChange}
        placeholder="Add a new task"
        className="border rounded-l px-4 py-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white rounded-r px-4 py-2">
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;
