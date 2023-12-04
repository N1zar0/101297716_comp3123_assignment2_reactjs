const express = require('express');
const app = express();

// Importing route files
const userRoutes = require('./routes/UserRoutes');
const employeeRoutes = require('./routes/EmployeeRoutes');

// Middleware to parse JSON
app.use(express.json());

// Using defined routes
app.use('/api/users', userRoutes);
app.use('/api/employees', employeeRoutes);

// Other configurations and middleware

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
