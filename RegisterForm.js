import React from 'react';

function RegisterForm() {
  return (
    <div className="form-container">
      <h2>Sign Up Today</h2>
      <p>Please fill out this form to register</p>
      <form>
        <input type="text" placeholder="username" required />
        <input type="email" placeholder="email" required />
        <input type="password" placeholder="password" required />
        <input type="password" placeholder="confirm password" required />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
