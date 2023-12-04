// components/UserSignup.js
import React, { useState } from 'react';
import { userSignup } from '../services/api';

const UserSignup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const newUser = await userSignup(formData);
      // Handle successful signup, e.g., show success message
      console.log('New user signed up:', newUser);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>User Signup</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {/* Other input fields for email and password */}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default UserSignup;
