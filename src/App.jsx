import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './home';
import EmployeeList from './employeelist';
import Login from './login';
import employeeData from './employee';
import './App.css'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.success('Logout Successful', {
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

  return (
    <Router>
      <div><ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/></div>
      <div >
        {isLoggedIn && (
         <button className='buttons' onClick={handleLogout}>Logout</button> 
        )}
      </div>

      <div className='app-main'>
        {isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Home employeeData={employeeData} isLoggedIn={isLoggedIn} />} />
            <Route path="/employee-list" element={<EmployeeList employeeData={employeeData} />} />
            
          </Routes>
        ) : (
          <Login onLogin={handleLogin} />
        )}
  </div>
    </Router>
  );
};

export default App;