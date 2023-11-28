import React, { useState } from 'react';
import './App.css'; 
import greendzine from '../images/greendzine.png';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // to Check if the credentials are correct (dummy check)
    if (email === 'alam@gmail.com' && password === 'alam') {
      onLogin(); // Call the onLogin prop passed from the parent component
      setIsLoggedIn(true); 
    } else {
      alert('Invalid credentials');
    }
  };

  const forgot_password = () => {
   
    alert('Password sent to email.');
  };

 
  if (!isLoggedIn) {
    return (
    <div className='login'>
    
      <div >
        <img src={greendzine} alt="greendzine image" width="150" height="150" className='greendzine-image'/>
        <h2 className='login-text'>꒒ꂦꁅꀤꈤ</h2>
        <div className='text'>
        <label>
        <input className='textbox' type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
        <input className='textbox' type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        </div>
        <br/>
        <button className='button' onClick={handleLogin}>Login</button>
        <button className='button' onClick={forgot_password}>Forgot Password</button>
      </div>
    </div>
    );
  } else {
    
    return null;
  }
};

export default Login;