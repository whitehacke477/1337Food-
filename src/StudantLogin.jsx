import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
  import './Styles.css';

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginHistory, setLoginHistory] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Clear error 
    setError('');

  
    const loginInfo = { email, password, timestamp: new Date().toLocaleString() };
    setLoginHistory([...loginHistory, loginInfo]);

    
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container mt-5" style={{width : '80vh'}} >
      <h1 className="mb-4" style={{textAlign:'center'}}><em><b>Students Login</b></em></h1>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label"><em><b>Email</b></em></label>
        <input
          type="email"
          className="form-control p-2 mb-2  bg-light"
         //  bg-secondary text-white border border-secondary
          id="emailInput"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label"><em><b>Password</b></em></label>
        <input
          type="password"
          className="form-control p-2 mb-2 bg-light  border "
          id="passwordInput"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    
      <button className="btn btn-primary" onClick={handleLogin}><em>Login</em></button>

          
          {loginHistory.length > 0 && (
            <div className="mt-4">
              <h5>Login History:</h5>
              <ul className="list-group">
                {loginHistory.map((info, index) => (
                  <li key={index} className="list-group-item">
                    <strong>Email:</strong> {info.email}, <strong>Password:</strong> {info.password}, <strong>Timestamp:</strong> {info.timestamp}
                  </li>
                ))}
              </ul>
            </div>
          )}
           </div>
       
      
  );
}

export default StudentLogin;
