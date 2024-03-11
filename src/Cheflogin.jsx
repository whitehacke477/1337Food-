import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = () => {
    // Here you can handle the signup logic
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    } else {
      setErrorMessage('');
    }
    // Here you can send the signup data to your backend or perform any other necessary actions
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4"><em>Chef login</em></h1>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label"><em>Email</em></label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label"><em>Password</em></label>
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPasswordInput" className="form-label"><em>Confirm Password</em></label>
        <input
          type="password"
          className="form-control"
          id="confirmPasswordInput"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSignup}><em>Signup</em></button>
      {errorMessage && <div className="text-danger mt-2">{errorMessage}</div>}
    </div>
  );
}

export default StudentSignup;
