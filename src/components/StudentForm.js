// StudentForm.js
import React, { useState, useEffect } from 'react';

function StudentForm({ addStudent, editIndex, students, setEditIndex, editedStudent }) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (editedStudent) {
      setName(editedStudent.name);
      setMobile(editedStudent.mobile);
      setAddress(editedStudent.address);
    }
  }, [editedStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim() || !address.trim()) return;
    addStudent({ name, mobile, address });
    setName('');
    setMobile('');
    setAddress('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button type="submit">{editIndex !== null ? 'Update Student' : 'Add Student'}</button>
      {editIndex !== null && (
        <button onClick={() => setEditIndex(null)}>Cancel</button>
      )}
    </form>
  );
}

export default StudentForm;

