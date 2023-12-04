// components/UpdateEmployee.js
import React, { useState } from 'react';
import { updateEmployee } from '../services/api';

const UpdateEmployee = () => {
  const [formData, setFormData] = useState({
    employeeId: '',
    // Other fields for update
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedEmployee = await updateEmployee(formData.employeeId, formData);
      // Handle successful update, e.g., show success message
      console.log('Employee updated:', updatedEmployee);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Update Employee</h2>
      {error && <p>{error}</p>}
      <input
        type="text"
        placeholder="Employee ID"
        name="employeeId"
        value={formData.employeeId}
        onChange={handleChange}
      />
      {/* Other input fields for update */}
      <button onClick={handleUpdate}>Update Employee</button>
    </div>
  );
};

export default UpdateEmployee;
