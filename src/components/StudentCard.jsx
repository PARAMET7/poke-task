import React, { useState } from 'react';
import ComplitTask from './ComplitTask'; // Import ComplitTask

function StudentCard({ name, image, program, tasks }) {
  // Local state to manage the task completion status
  const [studentTasks, setStudentTasks] = useState(tasks);

  // Function to toggle the task completion status
  const toggleTask = (taskIndex) => {
    const updatedTasks = studentTasks.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, isCompleted: !task.isCompleted }; // Toggle the task's isCompleted property
      }
      return task;
    });

    setStudentTasks(updatedTasks); // Update the task state
  };

  return (
    <div className="border-2 p-4 m-4">
      <img src={image} alt={name} className="w-24 h-24 object-cover" />
      <h2>{name}</h2>
      <p>{program}</p> {/* Render the program */}

      {/* Pass the toggleTask function to ComplitTask */}
      <ComplitTask tasks={studentTasks} toggleTask={toggleTask} />
    </div>
  );
}

export default StudentCard;
