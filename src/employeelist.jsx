import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 
import home from '../images/home.png'
import user from '../images/user.png'
import logo from '../images/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmployeeList = ({ employeeData }) => {
  // Create a state variable to store the search input
  const [search, setSearch] = useState("");

  // Create a function to handle the input change
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // Create a function to filter the employee data by name
  const filterByName = (data) => {
    return data.filter(employee => employee.name.toLowerCase().includes(search.toLowerCase()));
  };

  return (
    <div>
        <div>
          <img src={logo} alt="logo image" width="150" height="150" className='logo-image'/>
          </div>
        <div className='employelist-text' >
            <h2 >𝔼𝕞𝕡𝕝𝕠𝕪𝕖𝕖 𝕃𝕚𝕤𝕥</h2>
        </div>
         <div className='search'>
          {/*(old code)  <input type="text" value={search} onChange={handleChange} placeholder="🔍 Search by name" className='search-form'/> */}
          <div className="textInputWrapper">
              <input placeholder=" 🔍 Search Employees" type="text" onChange={handleChange} className="textInput"   />
          </div>
          
         </div> 
    
      {filterByName(employeeData).map((employee) => (
        <div key={employee.id} className='employee-card'>
        
          <p>{`Emp id: ${employee.id}`}</p>
          <p>{`Name: ${employee.name}`}</p>
          <p>{`DOB: ${employee.dob}`}</p>
          <p>{`Role: ${employee.job}`}</p>
        </div>
      ))}
      <div className="bottom-navigation">
        <Link to="/">
          <img className='link-image' src={home} alt="Home" />
        </Link>
        <Link to="/employee-list">
          <img className='link-image' src={user} alt="Employee List" />
        </Link>
      </div>
    </div>
  );
};

export default EmployeeList;
