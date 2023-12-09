import React, { useState } from 'react';
import './App.css'; 
import greendzine from '../images/greendzine.png';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // to Check if the credentials are correct (dummy check)
    if (email === 'alam@gmail.com' && password === 'alam') {
      toast.success('Login Successful', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      onLogin(); // Call the onLogin prop passed from the parent component
      setIsLoggedIn(true); 
    } else {
      toast.error('Invalid Credentials', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  const forgot_password = () => {
   
    toast.info('Password sent to E-Mail', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

 
  if (!isLoggedIn) {
    return (
    <div className='login'>
    
      <div >
        <img src={greendzine} alt="greendzine image" width="150" height="150" className='greendzine-image'/>
        <h2 className='login-text'>꒒ꂦꁅꀤꈤ</h2>
        <label>
        <input className='textboxs'  type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </label>
        <br />
        <label>
        <input className='textboxs' type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </label>
        </div>
        <br/>
        <button className='button' onClick={handleLogin}>Login</button>
        <br/>
        <button className='button' onClick={forgot_password}>Forgot Password</button>
        

      
    </div>
    );
  } else {
    
    return null;
  }
};

export default Login;
