import React, { useState } from 'react';
import placeholderImage from "./../assets/placeholder.png";
import studentsData from "./../assets/students.json";
import tasksData from './../assets/tasks.json'; // Import your tasks JSON
import { Link, useParams } from 'react-router-dom';
import AddTaskForm from '../components/AddTaskForm'; // Import the AddTaskForm component

function StudentDetailsPage() {
  const { studentId } = useParams();

  const studentProfile = studentsData.find((student) => student._id === studentId);

  // Initialize tasks with imported JSON data
  const [tasks, setTasks] = useState(tasksData.map((task, index) => ({
    id: index + 1, // Assign unique IDs
    title: task.task,
    isCompleted: task.completed,
  })));

  // Add a new task
  const addTask = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...newTask, id: prevTasks.length + 1 }
    ]);
  };

  // Toggle task completion
  const toggleTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div className="StudentDetailsPage bg-gray-100 py-6 px-4 border-2 border-fuchsia-500 m-2">
      <h1>Student Details Page</h1>
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        {studentProfile ? (
          <>
            <img
              src={studentProfile.image || placeholderImage}
              alt="profile-photo"
              className="rounded-full w-32 h-32 object-cover border-2 border-gray-300"
            />
            <h1 className="text-2xl mt-4 font-bold">
              {studentProfile.firstName} {studentProfile.lastName}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 mb-4 border-b pb-4">
              <p className="text-left mb-2 border-b pb-2">
                <strong>LinkedIn:</strong>{" "}
              
              </p>
              <p className="text-left mb-2 border-b pb-2">
                <strong>Email:</strong>{" "}
                <span className="ml-2 text-blue-500 hover:underline">
                  {studentProfile.email}
                </span>
              </p>
              <p className="text-left mb-2 border-b pb-2">
                <strong>Languages:</strong>{" "}
                {studentProfile.languages.join(", ")}
              </p>
              <p className="text-left mb-2 border-b pb-2">
                <strong>Program:</strong> {studentProfile.program}
              </p>
              <p className="text-left mb-2 pb-2">
                <strong>Background:</strong> {studentProfile.background}
              </p>
              <p className="text-left mb-2 pb-2">
                <strong>Cohort:</strong>
                <span className="ml-2 text-blue-500 hover:underline">
                  {studentProfile.cohort}
                </span>
              </p>
            </div>

            <h2 className="mt-4">Tasks</h2>
            <AddTaskForm addTask={addTask} />
            <div className="task-list">
              <ul>
                {tasks.map((task, index) => (
                  <li key={task.id} className="task-item flex items-center mb-2">
                    <button
                      onClick={() => toggleTask(index)}
                      className={`px-4 py-2 rounded ${
                        task.isCompleted ? 'bg-green-500' : 'bg-red-500'
                      } text-white`}
                    >
                      {task.title} {task.isCompleted ? '✅' : '❌'}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <Link to='/'>
              <button className="text-white px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out">
                Back
              </button>
            </Link>
          </>
        ) : (
          <p>Student not found</p>
        )}
      </div>
    </div>
  );
}

export default StudentDetailsPage;
