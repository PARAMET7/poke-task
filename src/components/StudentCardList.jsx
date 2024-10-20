import React from 'react';
import StudentCard from './StudentCard';

function StudentCardList({ students, deleteStudent }) {
  return (
    <div>
      {students.map((student) => (
        <StudentCard
          key={student._id}
          {...student}
          deleteStudent={deleteStudent}
        />
      ))}
    </div>
  );
}

export default StudentCardList;
