// App.js
import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addStudent = (student) => {
    if (editIndex !== null) {
      // Editing existing student
      const updatedStudents = [...students];
      updatedStudents[editIndex] = student;
      setStudents(updatedStudents);
      setEditIndex(null);
    } else {
      // Adding new student
      setStudents([...students, student]);
    }
  };

  const deleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  const editStudent = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="App">
      <h1>Student Manager</h1>
      <StudentForm 
        addStudent={addStudent} 
        editIndex={editIndex} 
        students={students} 
        setEditIndex={setEditIndex} 
        editedStudent={editIndex !== null ? students[editIndex] : null} 
      />
      <StudentList students={students} deleteStudent={deleteStudent} editStudent={editStudent} />
      <p>Total Students: {students.length}</p>
    </div>
  );
}

export default App;
