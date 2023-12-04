// components/DeleteEmployee.js
import React, { useState } from 'react';
import { deleteEmployee } from '../services/api';

const DeleteEmployee = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    try {
      await deleteEmployee(employeeId);
      // Handle successful deletion, e.g., show success message
      console.log('Employee deleted');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Delete Employee</h2>
      {error && <p>{error}</p>}
      <input
        type="text"
        placeholder="Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete Employee</button>
    </div>
  );
};

export default DeleteEmployee;
