// StudentList.js
import React from 'react';

function StudentList({ students, deleteStudent, editStudent }) {
  return (
    <div>
      <h2>All Students</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name}, {student.mobile}, {student.address}
            <button onClick={() => deleteStudent(index)}>Delete</button>
            <button onClick={() => editStudent(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
