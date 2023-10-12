// Brukte ting herfra https://www.w3schools.com/react/react_forms.asp

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
