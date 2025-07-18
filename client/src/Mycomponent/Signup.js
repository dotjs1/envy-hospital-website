import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Signup() {

  const [message, setMessage] = useState('');

  const handleSignup = () => {
    setMessage('Signup functionality is currently unavailable. Please try again later or contact support.');
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: '350px' }}>
        <h3 className="text-center mb-4"> Create Account</h3>

        <div className="input-group mb-3">
          <span className="input-group-text"><i className="bi bi-person"></i></span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text"><i className="bi bi-lock"></i></span>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>

        <button className="btn btn-primary w-100 mb-3" onClick={handleSignup}>Sign Up</button>

        {message && (
          <div className="alert alert-info alert-dismissible fade show" role="alert">
            {message}
            <button type="button" className="btn-close" onClick={() => setMessage('')}></button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Signup;