import { useState } from "react";
import StudentCard from "../components/StudentCard";
import { Link } from 'react-router-dom';
import studentsData from "../assets/students.json";

function HomePage() {
  const [students, setStudents] = useState(studentsData);
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete homework", isCompleted: false },
    { id: 2, title: "Read a book", isCompleted: false },
    { id: 3, title: "Go for a run", isCompleted: false },
  ]);

  const toggleTask = (index) => {
    console.log("Task clicked:", index); // Log for debugging
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="border-2 border-rose-500 m-2">
      <h1>Poke - Schoole</h1>
      <div className="flex justify-between items-center p-2 font-bold border-b w-full">
        <span className="flex items-center justify-center" style={{ flexBasis: "20%" }}>Image</span>
        <span style={{ flexBasis: "20%" }}>Name</span>
        <span style={{ flexBasis: "20%" }}>Program</span>
        <span style={{ flexBasis: "20%" }}>Email</span>
        <span style={{ flexBasis: "20%" }}>Phone</span>
      </div>

      {students &&
        students.map((student) => (
          <Link key={student._id} to={`/students/${student._id}`}>
            <StudentCard {...student} />
          </Link>
        ))}

      <h2 className="mt-4">Tasks</h2>
      <div>
        {tasks.map((task, index) => (
          <div
            key={task.id}
            onClick={() => toggleTask(index)}
            className={`p-2 cursor-pointer ${task.isCompleted ? 'line-through' : ''}`}
          >
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
