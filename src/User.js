import { useState } from 'react';

const UserCreation = () => {
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({}); // Added errors state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform client-side validation
    const validationErrors = {};
    if (!user.username) {
      validationErrors.username = 'Username is required.';
    }
    if (!user.email) {
      validationErrors.email = 'Email is required.';
    }
    if (!user.password) {
      validationErrors.password = 'Password is required.';
    }
    setErrors(validationErrors);

    // If no validation errors, submit the user data
    if (Object.keys(validationErrors).length === 0) {
      // Simulate sending the user data to a server
      console.log('User data submitted:', user);
    }
  };

  return (
    <div>
      <h1>User Creation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={user.email} onChange={handleChange} />
          <span className="error">{errors.email}</span>
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={user.username} onChange={handleChange} />
          <span className="error">{errors.username}</span> 
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={user.password} onChange={handleChange} />
          <span className="error">{errors.password}</span> 
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserCreation;
